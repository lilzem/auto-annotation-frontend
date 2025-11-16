import { NextRouter } from "next/router";
import { ReactNode } from "react";
import { Destination } from "~/components/business/navigation/destination";

export type WithCurrentPage = {
  nextPageUrl: string;
};

export type WithLayout<T extends object = { token: string | null }> = {
  getLayout?: (page: ReactNode) => ReactNode;
  header?: (props: T & WithCurrentPage) => ReactNode;
  sidebar?: (props: T & WithCurrentPage) => ReactNode;
  footer?: (props: T & WithCurrentPage) => ReactNode;
  additionalContent?: (props: T & WithCurrentPage) => ReactNode;
  hideDiiaBanner?: boolean;
  layoutClass?: string | ((props: T & WithCurrentPage) => string);
  skeletonParams?: (router: NextRouter) => Promise<Map<string, unknown>>;
  mobileNavbar?: (props: { children: ReactNode }) => Destination[];
  disabledMiniHeader?: boolean;
};
