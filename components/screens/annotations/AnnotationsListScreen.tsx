import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  Grid,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import { Add as AddIcon, Logout as LogoutIcon } from "@mui/icons-material";
import { Annotation } from "~/API/AnnotationApi";
import { useAuth } from "~/components/utility/AuthContext";
import { useRouter } from "next/router";

type AnnotationsListScreenProps = {
  initialData: Annotation[];
};

export const AnnotationsListScreen = ({ initialData }: AnnotationsListScreenProps) => {
  const { logout } = useAuth();
  const router = useRouter();
  const annotations = initialData;

  return (
    <>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: "1px solid #e0e0e0" }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 600 }}>
            Annotations
          </Typography>
          <IconButton onClick={logout} size="small">
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
          <Typography variant="h4" component="h1" fontWeight={600}>
            My Annotations
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => router.push("/annotations/new")}
            size="large"
          >
            Add Annotation
          </Button>
        </Box>

        {annotations && annotations.length === 0 ? (
          <Box
            sx={{
              textAlign: "center",
              py: 8,
            }}
          >
            <Typography variant="h6" color="text.secondary" gutterBottom>
              No annotations yet
            </Typography>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() => router.push("/annotations/new")}
              sx={{ mt: 2 }}
            >
              Create Your First Annotation
            </Button>
          </Box>
        ) : (
          <Grid container spacing={3}>
            {annotations &&
              annotations.map((annotation) => (
                <Grid item xs={12} sm={6} md={4} key={annotation.id}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      cursor: "pointer",
                      transition: "transform 0.2s",
                      "&:hover": {
                        transform: "translateY(-4px)",
                      },
                    }}
                    onClick={() => router.push(`/annotations/${annotation.id}`)}
                  >
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" gutterBottom fontWeight={600}>
                        {annotation.title}
                      </Typography>
                      {annotation.annotation && (
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          {annotation.annotation}
                        </Typography>
                      )}
                    </CardContent>
                    <CardActions sx={{ px: 2, pb: 2 }}>
                      <Button
                        size="small"
                        onClick={() => router.push(`/annotations/${annotation.id}`)}
                      >
                        View Details
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
          </Grid>
        )}
      </Container>
    </>
  );
};
