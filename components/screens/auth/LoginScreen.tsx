import { useState } from "react";
import { Box, TextField, Button, Typography, Container, Link as MuiLink } from "@mui/material";
import { useAuth } from "~/components/utility/AuthContext";
import toast from "react-hot-toast";
import Link from "next/link";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const { login, register } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        await login(email, password);
        toast.success("Logged in successfully!");
      } else {
        await register(email, password, name);
        toast.success("Registered successfully!");
      }
    } catch (error: any) {
      const message = error.response?.data?.detail || error.message || "An error occurred";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            p: 4,
            borderRadius: 2,
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
            {isLogin ? "Sign In" : "Sign Up"}
          </Typography>

          <form onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
              {!isLogin && (
                <TextField
                  label="Name"
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              )}

              <TextField
                label="Email"
                type="email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <TextField
                label="Password"
                type="password"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={loading}
                sx={{ mt: 1 }}
              >
                {loading ? "Loading..." : isLogin ? "Sign In" : "Sign Up"}
              </Button>

              <Box sx={{ textAlign: "center", mt: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  {isLogin ? "Don't have an account? " : "Already have an account? "}
                  <MuiLink
                    component="button"
                    type="button"
                    variant="body2"
                    onClick={() => setIsLogin(!isLogin)}
                    sx={{ cursor: "pointer" }}
                  >
                    {isLogin ? "Sign Up" : "Sign In"}
                  </MuiLink>
                </Typography>
              </Box>
            </Box>
          </form>
        </Box>
      </Box>
    </Container>
  );
};
