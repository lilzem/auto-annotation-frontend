import type { GetServerSideProps, NextPage } from "next";
import { LoginScreen } from "~/components/screens/auth/LoginScreen";
import { getTokenFromContext } from "~/utils/auth";

const LoginPage: NextPage = () => {
  return <LoginScreen />;
};

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  const token = getTokenFromContext(context);

  if (token) {
    return {
      redirect: {
        destination: "/annotations",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default LoginPage;
