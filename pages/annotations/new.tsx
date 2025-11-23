import type { GetServerSideProps, NextPage } from "next";
import { NewAnnotationScreen } from "~/components/screens/annotations/NewAnnotationScreen";
import { requireAuth } from "~/utils/auth";

const NewAnnotationPage: NextPage = () => {
  return <NewAnnotationScreen />;
};

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  const token = requireAuth(context);

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default NewAnnotationPage;
