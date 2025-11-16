import { QuizQuestionSerialized } from "~/components/business/course/quiz/question/types";
import { ContentStatus } from "~/types";

export enum ChapterAvailability {
  FREE = "free",
  INTERMEDIATE = "intermediate",
  PREMIUM = "premium",
}

enum ChapterItemType {
  TASK = "task",
  MARKDOWN = "markdown",
  EXAMPLE = "example",
  HTML = "html",
  CAROUSEL = "carousel",
  VIDEO = "videoItem",
}

type WithType = { type: ChapterItemType };
type MarkdownItem = WithType & { content: string };
type HtmlItem = WithType & { content: string };
type ImageCarousel = WithType & { images: string[] };
type VideoItem = WithType & {
  url: string;
  captions: string | undefined;
  streamingUrl: string | undefined;
};
type InputOutputExample = WithType & {
  content: string;
  output: string;
  isRunnable?: boolean;
};
type WebExample = WithType & {
  content: Record<string, string>[];
  isRunnable?: boolean;
};

type ChapterItem =
  | QuizQuestionSerialized
  | MarkdownItem
  | HtmlItem
  | ImageCarousel
  | VideoItem
  | InputOutputExample
  | WebExample;

export type Chapter = {
  id: string;
  label: string;
  state: string;
  ordering: number;
  sectionId: string;
  availability: ChapterAvailability;
  tasksCount?: number;
  completedTaskCount?: number;
  isColumn: boolean;
  progress: ContentStatus;
  status: ContentStatus;
  opened: boolean;
  openedAt: string;
  items: ChapterItem[] | { document: any };
  tasksProgress: Record<string, { status: string }>;
  taskIds?: string[];
  type?: string;
  progressCreatedAt: string;
  progressModifiedAt: string;
};
