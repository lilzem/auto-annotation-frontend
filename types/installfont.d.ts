declare module "installfont" {
  declare function installfont(path: string, cb: (err: unknown) => void): void;
  export = installfont;
}
