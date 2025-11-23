import { useState } from "react";
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
} from "@mui/material";
import { ArrowBack as ArrowBackIcon, Upload as UploadIcon } from "@mui/icons-material";
import { AnnotationApi } from "~/API/AnnotationApi";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { TOKEN_COOKIE_NAME } from "~/API/config";

export const NewAnnotationScreen = () => {
  const [title, setTitle] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
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

  const handlePdfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type === "application/pdf") {
        setPdfFile(file);
      } else {
        toast.error("Please select a PDF file");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      toast.error("Please enter a title");
      return;
    }

    if (!pdfFile) {
      toast.error("Please upload a PDF file");
      return;
    }

    setLoading(true);

    try {
      const token = Cookies.get(TOKEN_COOKIE_NAME);
      const annotationApi = new AnnotationApi(token);
      const annotation = await annotationApi.uploadAndCreate({
        title,
        image: imageFile || undefined,
        file: pdfFile,
      });

      toast.success("Annotation created successfully!");
      router.push(`/annotations/${annotation.id}`);
    } catch (error: any) {
      const message =
        error.response?.data?.detail || error.message || "Failed to create annotation";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

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
            New Annotation
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ py: 4 }}>
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom fontWeight={600}>
                  Annotation Details
                </Typography>
                <TextField
                  label="Title"
                  fullWidth
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  sx={{ mt: 2 }}
                />
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom fontWeight={600}>
                  Cover Image
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Upload a cover image for the annotation
                </Typography>
                <Button variant="outlined" component="label" startIcon={<UploadIcon />}>
                  {imageFile ? imageFile.name : "Upload Image"}
                  <input type="file" hidden accept="image/*" onChange={handleImageChange} />
                </Button>
                {imageFile && (
                  <Box
                    sx={{
                      mt: 2,
                      width: "100%",
                      height: 200,
                      backgroundImage: `url(${URL.createObjectURL(imageFile)})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: 1,
                    }}
                  />
                )}
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom fontWeight={600}>
                  PDF Document *
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Upload the PDF file to be annotated
                </Typography>
                <Button variant="outlined" component="label" startIcon={<UploadIcon />}>
                  {pdfFile ? pdfFile.name : "Upload PDF"}
                  <input type="file" hidden accept="application/pdf" onChange={handlePdfChange} />
                </Button>
              </CardContent>
            </Card>

            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={loading || !title.trim() || !pdfFile}
              sx={{ maxWidth: 300 }}
            >
              {loading ? "Creating..." : "Create"}
            </Button>
          </Box>
        </form>
      </Container>
    </>
  );
};
