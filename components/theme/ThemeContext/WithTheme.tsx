import { useTheme } from "./ThemeContext";
import { ThemeType } from "./theme";
import { ComponentIsHOC, ComponentIsHOCNode } from "~/types/HoC";

type InputComponent<Props, Ref> = ComponentIsHOCNode<Props & WithInjectedTheme, Ref>;
type OutputComponent<Props, Ref> = ComponentIsHOC<
  Props extends WithInjectedTheme ? Omit<Props, keyof WithInjectedTheme> : Props,
  Ref
>;

export const WithTheme = <Props, Ref>(
  Component: InputComponent<Props, Ref>
): OutputComponent<Props, Ref> => {
  const ComponentWithTheme = (props: Props & { _ref?: React.ForwardedRef<Ref> }) => {
    const theme = useTheme();
    return (
      <Component
        {...props}
        {...(props._ref != null && !Component.isHoC ? { ref: props._ref } : {})}
        theme={theme}
      />
    );
  };
  ComponentWithTheme.isHoC = true;
  return ComponentWithTheme as unknown as OutputComponent<Props, Ref>;
};

export type WithInjectedTheme = {
  theme: ThemeType;
};
