import type { GetServerSideProps, NextPage } from "next";
import { AnnotationDetailScreen } from "~/components/screens/annotations/AnnotationDetailScreen";
import { requireAuth } from "~/utils/auth";
import { AnnotationApi, Annotation } from "~/API/AnnotationApi";

type AnnotationDetailPageProps = {
  annotation: Annotation;
};

const AnnotationDetailPage: NextPage<AnnotationDetailPageProps> = ({ annotation }) => {
  return <AnnotationDetailScreen initialAnnotation={annotation} />;
};

export const getServerSideProps: GetServerSideProps<AnnotationDetailPageProps> = async (
  context
) => {
  const token = requireAuth(context);

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const { id } = context.params as { id: string };

  if (!id) {
    return {
      notFound: true,
    };
  }

  try {
    const annotationApi = new AnnotationApi(token);
    const annotation = await annotationApi.getById(id);

    return {
      props: {
        annotation,
      },
    };
  } catch (error: any) {
    // If it's a 401 error, clear the token and redirect to login
    if (error?.response?.status === 401 || error?.status === 401) {
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

    // For other errors, return not found
    return {
      notFound: true,
    };
  }
};

export default AnnotationDetailPage;
