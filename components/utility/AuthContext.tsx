import { createContext, useContext, ReactNode } from "react";
import { UserApi } from "~/API/UserApi";
import { TOKEN_COOKIE_NAME } from "~/API/config";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

type AuthContextType = {
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const router = useRouter();

  const login = async (email: string, password: string) => {
    const userApi = new UserApi();
    const response = await userApi.login({ email, password });

    if (!response.data?.token) {
      throw new Error("No access token received from server");
    }

    Cookies.set(TOKEN_COOKIE_NAME, response.data.token, {
      expires: 7,
      path: "/",
      sameSite: "lax",
    });

    // Force a hard navigation to ensure cookie is properly set
    window.location.href = "/annotations";
  };

  const register = async (email: string, password: string, name: string) => {
    const userApi = new UserApi();
    const response = await userApi.register({ email, password, name });

    if (!response.data?.token) {
      throw new Error("No access token received from server");
    }

    Cookies.set(TOKEN_COOKIE_NAME, response.data.token, {
      expires: 7,
      path: "/",
      sameSite: "lax",
    });

    // Force a hard navigation to ensure cookie is properly set
    window.location.href = "/annotations";
  };

  const logout = () => {
    Cookies.remove(TOKEN_COOKIE_NAME, { path: "/" });
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ login, register, logout }}>{children}</AuthContext.Provider>
  );
};
