import { QuizProgress } from "~/components/business/quiz/quizQuery";
import { Chapter, ContentStatus } from "~/types";

export type Section = {
  id: string;
  label: string;
  state: string;
  courseId: string;
  ordering: number;
  description: string;
  chapters: Chapter[];
  webWorkspace: boolean;
  status: ContentStatus;
  progress: ContentStatus;
  hasQuiz: boolean;
  quizPassed?: boolean;
  quizProgress?: QuizProgress;
  initScript: { url: string };
  pdfUrl?: string;
};
