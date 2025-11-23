import type { GetServerSideProps, NextPage } from "next";
import { AnnotationsListScreen } from "~/components/screens/annotations/AnnotationsListScreen";
import { requireAuth } from "~/utils/auth";
import { AnnotationApi, AnnotationsListResponse } from "~/API/AnnotationApi";

type AnnotationsPageProps = {
  data: AnnotationsListResponse;
};

const AnnotationsPage: NextPage<AnnotationsPageProps> = ({ data }) => {
  return <AnnotationsListScreen initialData={data.data.annotations} />;
};

export const getServerSideProps: GetServerSideProps<AnnotationsPageProps> = async (context) => {
  const token = requireAuth(context);

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  try {
    const annotationApi = new AnnotationApi(token);
    const data = await annotationApi.getAll(100, 0);

    return {
      props: {
        data,
      },
    };
  } catch (error: any) {
    // Clear the invalid token cookie and redirect to login
    context.res.setHeader(
      "Set-Cookie",
      `auth_token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax`
    );

    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
};

export default AnnotationsPage;
