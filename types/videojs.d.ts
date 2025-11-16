import "video.js";

declare module "video.js" {
  export type VideoSrc = {
    src: string;
    type: string;
  };

  export type VideoCaptions = {
    kind: string;
    label: string;
    srclang: string;
    src?: string;
    default: boolean;
  }[];

  export type VideoEvents =
    | "timeupdate"
    | "playing"
    | "play"
    | "pause"
    | "ended"
    | "seeking"
    | "seeked"
    | "error"
    | "volumechange"
    | "fullscreenchange"
    | "canplay"
    | "loadedmetadata"
    | "loadstart";

  export type HTMLVideoJSElement = HTMLElement & { player: Player };
}
