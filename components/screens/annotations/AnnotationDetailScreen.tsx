import { useState, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import {
  ArrowBack as ArrowBackIcon,
  Save as SaveIcon,
  VolumeUp as VolumeUpIcon,
  Delete as DeleteIcon,
  Upload as UploadIcon,
} from "@mui/icons-material";
import { AnnotationApi, Annotation } from "~/API/AnnotationApi";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { TOKEN_COOKIE_NAME } from "~/API/config";
import { AudioPlayer } from "~/components/utility/AudioPlayer";

type AnnotationDetailScreenProps = {
  initialAnnotation: Annotation;
};

export const AnnotationDetailScreen = ({ initialAnnotation }: AnnotationDetailScreenProps) => {
  const [annotation, setAnnotation] = useState<Annotation>(initialAnnotation);
  const [title, setTitle] = useState(initialAnnotation.title);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [annotationText, setAnnotationText] = useState(initialAnnotation.annotation || "");
  const [genre, setGenre] = useState(initialAnnotation.genre || "");
  const [saving, setSaving] = useState(false);
  const [generatingTTS, setGeneratingTTS] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type.startsWith("image/")) {
        setImageFile(file);
      } else {
        toast.error("Please select an image file");
      }
    }
  };

  const handleImageClick = () => {
    imageInputRef.current?.click();
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const token = Cookies.get(TOKEN_COOKIE_NAME);
      const annotationApi = new AnnotationApi(token);

      const updated = await annotationApi.update(annotation.id, {
        title,
        annotation: annotationText,
        genre,
        image: imageFile || undefined,
      });

      setAnnotation(updated);
      setImageFile(null);
      toast.success("Annotation saved successfully!");
    } catch (error: any) {
      const message = error.response?.data?.detail || error.message || "Failed to save annotation";
      toast.error(message);
    } finally {
      setSaving(false);
    }
  };

  const handleGenerateTTS = async () => {
    if (!annotationText.trim()) {
      toast.error("Please add annotation text before generating TTS");
      return;
    }

    setGeneratingTTS(true);
    try {
      const token = Cookies.get(TOKEN_COOKIE_NAME);
      const annotationApi = new AnnotationApi(token);
      const updated = await annotationApi.generateTTS(annotation.id);
      console.log("TTS generated, updated annotation:", updated);
      console.log("TTS URL:", updated.tts_url);
      setAnnotation(updated);
      toast.success("TTS generated successfully!");
    } catch (error: any) {
      const message = error.response?.data?.detail || error.message || "Failed to generate TTS";
      toast.error(message);
    } finally {
      setGeneratingTTS(false);
    }
  };

  const handleDelete = async () => {
    try {
      const token = Cookies.get(TOKEN_COOKIE_NAME);
      const annotationApi = new AnnotationApi(token);
      await annotationApi.delete(annotation.id);
      toast.success("Annotation deleted successfully!");
      router.push("/annotations");
    } catch (error: any) {
      const message =
        error.response?.data?.detail || error.message || "Failed to delete annotation";
      toast.error(message);
    }
  };

  const hasUnsavedChanges =
    title !== annotation.title ||
    imageFile !== null ||
    annotationText !== (annotation.annotation || "") ||
    genre !== (annotation.genre || "");

  return (
    <>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: "1px solid #e0e0e0" }}
      >
        <Toolbar>
          <IconButton edge="start" onClick={() => router.push("/annotations")} sx={{ mr: 2 }}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 600 }}>
            Annotation Details
          </Typography>
          <Button
            variant="contained"
            startIcon={<SaveIcon />}
            onClick={handleSave}
            disabled={saving || !hasUnsavedChanges}
            sx={{ mr: 1 }}
          >
            {saving ? "Saving..." : "Save"}
          </Button>
          <IconButton onClick={() => setDeleteDialogOpen(true)} color="error">
            <DeleteIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ py: 4 }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <Card>
            <CardContent>
              <TextField
                label="Title"
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                sx={{ mb: 2 }}
              />
              <TextField
                label="Genre"
                fullWidth
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
              />
            </CardContent>
          </Card>

          {(annotation.image || imageFile) && (
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom fontWeight={600}>
                  Cover Image
                </Typography>
                <Box
                  onClick={handleImageClick}
                  sx={{
                    width: 200,
                    height: 120,
                    backgroundImage: `url(${
                      imageFile ? URL.createObjectURL(imageFile) : annotation.image
                    })`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: 1,
                    cursor: "pointer",
                    position: "relative",
                    "&:hover": {
                      opacity: 0.8,
                    },
                    "&:hover .hover-text": {
                      display: "flex",
                    },
                  }}
                >
                  <Box
                    className="hover-text"
                    sx={{
                      position: "absolute",
                      inset: 0,
                      display: "none",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: "rgba(0,0,0,0.6)",
                      color: "white",
                      borderRadius: 1,
                    }}
                  >
                    <Typography variant="body2">Click to change</Typography>
                  </Box>
                </Box>
                <input
                  ref={imageInputRef}
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </CardContent>
            </Card>
          )}

          {!annotation.image && !imageFile && (
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom fontWeight={600}>
                  Cover Image
                </Typography>
                <Button variant="outlined" component="label" startIcon={<UploadIcon />}>
                  Upload Image
                  <input type="file" hidden accept="image/*" onChange={handleImageChange} />
                </Button>
              </CardContent>
            </Card>
          )}

          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom fontWeight={600}>
                Annotation Text
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={10}
                value={annotationText}
                onChange={(e) => setAnnotationText(e.target.value)}
                placeholder="Enter annotation text here..."
                sx={{ mt: 1 }}
              />
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: 2,
                }}
              >
                <Typography variant="h6" fontWeight={600}>
                  Text-to-Speech
                </Typography>
                <Button
                  variant="contained"
                  startIcon={generatingTTS ? <CircularProgress size={20} /> : <VolumeUpIcon />}
                  onClick={handleGenerateTTS}
                  disabled={generatingTTS || !annotationText.trim()}
                >
                  {generatingTTS ? "Generating..." : "Generate TTS"}
                </Button>
              </Box>
              {annotation.tts_url && (
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    Audio available
                  </Typography>
                  <AudioPlayer url={annotation.tts_url} />
                </Box>
              )}
              {!annotation.tts_url && (
                <Typography variant="body2" color="text.secondary">
                  No TTS audio generated yet. Add annotation text and click "Generate TTS".
                </Typography>
              )}
            </CardContent>
          </Card>
        </Box>
      </Container>

      <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
        <DialogTitle>Delete Annotation</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete this annotation? This action cannot be undone.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleDelete} color="error" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
