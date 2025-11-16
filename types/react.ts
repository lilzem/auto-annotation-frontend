import { ComponentPropsWithoutRef, ElementType } from "react";

export type GetProps<T extends ElementType> = ComponentPropsWithoutRef<T>;
