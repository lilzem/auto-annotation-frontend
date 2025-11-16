declare module "next/image" {
  /**
   * The `Image` component is used to optimize images.
   *
   * Read more: [Next.js docs: `Image`](https://nextjs.org/docs/app/api-reference/components/image)
   */
  const Image: (
    props: React.ComponentPropsWithoutRef<(typeof import("next/image.d.ts"))["default"]>
  ) => React.ReactElement;
  export default Image;
  export * from "next/image.d.ts";
}

declare module "next/link" {
  /**
   * A React component that extends the HTML `<a>` element to provide
   * [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
   * and client-side navigation between routes.
   *
   * It is the primary way to navigate between routes in Next.js.
   *
   * Read more: [Next.js docs: `<Link>`](https://nextjs.org/docs/app/api-reference/components/link)
   */
  const Link: (
    props: React.ComponentPropsWithoutRef<(typeof import("next/link.d.ts"))["default"]>
  ) => React.ReactElement;
  export default Link;
  export * from "next/link.d.ts";
}
