import withDefaultProps from "~/components/utility/WithDefaultProps";
import { defaultTheme, ThemeType } from "./theme";
import { ThemeProvider } from "./ThemeContext";
import {
  billingUrl,
  emailUrl,
  helpUrl,
  myHomeUrl,
  myProfileUrl,
  passwordUrl,
  privacyUrl,
  profileEditUrl,
} from "~/pages/profile/profile.public";
import {
  blogUrl,
  catalogPageUrl,
  giftFreeActivateUrl,
  giftFreeClaimUrl,
  giftFreeUrl,
  notFoundUrl,
} from "~/pages/routes.public";
import { coursePath, projectPath, realWorldProjectsUrl, trackPath } from "~/pages/courses/courses.public";
import { RenderConditionCompose } from "~/components/utility/RenderConditionCompose";
import { WithInjectedRouter, WithRouter } from "~/components/utility/next/WithRouter";
import { challengesUrl } from "~/pages/code-challenges/challenges.public";
import { quizzesListUrl } from "~/pages/quizzes/quizzes.public";
import { JOBS_NOT_FOUND_PAGE, JOBS_PAGE, JOBS_VACANCY_URL } from "~/pages/jobs/jobs.public";
import { workspacesOverviewUrl } from "~/pages/workspaces/workspaces.public";
import { cvAuthorizeUrl, cvUrl } from "~/pages/cv/cv.public";
import { certificateTrackUrl, certificateUrl } from "~/pages/certificate/certificate.public";

export const newDarkTheme: ThemeType = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    secondaryBorderLight: "#6579A1",
    backgroundDark: "#181E2A",
    backgroundDarker: "#1C263B",
    pageBackground: "#181E2A",
    secondary: "#181E2A",
    secondaryVeryLight: "#38436B",
    secondaryDark: "#23304B",
    secondaryBgDark: "#1E2635",
    progressRadarBackground: "transparent",
    progressRadarBorder: "#6579A1",
    sidebarBackground: "#2A3354",
  },
};

const DarkThemePages = [
  myHomeUrl,
  myProfileUrl,
  billingUrl,
  emailUrl,
  passwordUrl,
  privacyUrl,
  helpUrl,
  catalogPageUrl,
  realWorldProjectsUrl,
  challengesUrl,
  quizzesListUrl,
  giftFreeUrl,
  giftFreeActivateUrl,
  giftFreeClaimUrl,
  JOBS_PAGE,
  JOBS_NOT_FOUND_PAGE,
  JOBS_VACANCY_URL,
  notFoundUrl,
  blogUrl,
  workspacesOverviewUrl,
  cvUrl,
  profileEditUrl,
  cvAuthorizeUrl,
  certificateUrl,
  certificateTrackUrl,
  coursePath,
  projectPath,
  trackPath,
] as const;

const isRedesignPage = (pathName: string): boolean => {
  return DarkThemePages.some((page) => pathName.endsWith(page));
};

export const DarkThemeWrapper = WithRouter(
  RenderConditionCompose.new()
    .route(withDefaultProps(ThemeProvider, { value: newDarkTheme } as const))
    .route(({ children }) => <>{children}</>)
    .component<WithInjectedRouter>(({ router }) => (isRedesignPage(router.pathname) ? 0 : 1))
);
