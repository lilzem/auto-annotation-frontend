import type { GetServerSideProps, NextPage } from "next";
import { getTokenFromContext } from "~/utils/auth";

const RootPage: NextPage = () => {
  return null;
};

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  const token = getTokenFromContext(context);

  return {
    redirect: {
      destination: token ? "/annotations" : "/login",
      permanent: false,
    },
  };
};

export default RootPage;
