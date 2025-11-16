import { ForwardedRef, ReactElement, ReactNode } from "react";

export type WithRef<T> = { _ref?: ForwardedRef<T> };
export type PropsWithRef<Props, Ref> = Props & WithRef<Ref>;
type ComponentWithRef<P, T> = (
  props: PropsWithRef<P, T>,
  ref?: ForwardedRef<unknown>
) => ReactElement;
export type ComponentIsHOC<P, T> = ComponentWithRef<P, T> & { isHoC?: boolean };
type ComponentNodeWithRef<P, T> = (props: PropsWithRef<P, T>) => ReactElement | ReactNode;
export type ComponentIsHOCNode<P, T> = ComponentNodeWithRef<P, T> & { isHoC?: boolean };
export type InputHoCComponent<P, R, I> = ComponentIsHOCNode<P & I, R>;
export type OutputHoCComponent<P, R, I> = ComponentIsHOC<P extends I ? Omit<P, keyof I> : P, R>;
