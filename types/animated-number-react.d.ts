declare module "animated-number-react" {
  export type Animation = {
    animatable: Animatable;
    currentValue: string;
    delay: number;
    duration: number;
    endDelay: number;
    property: string;
    tweens: ReadonlyArray<object>;
    type: string;
  };

  type Props = {
    value: number;
    duration?: number;
    delay?: number;
    className?: string;
    easing?: number;
    formatValue?: (value: number) => string;
    update?: (animation: Animation) => void;
    run?: (animation: Animation) => void;
    begin?: (animation: Animation) => void;
    complete?: (animation: Animation) => void;
  };

  declare function AnimatedNumber(props: Props): React.ReactElement;

  export = AnimatedNumber;
}
