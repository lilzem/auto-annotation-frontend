import { GetServerSidePropsContext } from "next";
import { TOKEN_COOKIE_NAME } from "~/API/config";

export const getTokenFromContext = (context: GetServerSidePropsContext): string | undefined => {
  return context.req.cookies[TOKEN_COOKIE_NAME];
};

export const requireAuth = (context: GetServerSidePropsContext): string | null => {
  return getTokenFromContext(context) || null;
};
