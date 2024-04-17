type BaseButtonProps = {
  border?: boolean;
  colorType?: "solid" | "transparent";
  fullWidth?: boolean;
};

type DefaultButtonProps = BaseButtonProps & {
  buttonContent: "default";
  icon?: never;
  text: string;
};

type TextAndIconButtonProps = BaseButtonProps & {
  buttonContent: "textAndIcon";
  icon: React.ReactNode;
  text: string;
};

type IconOnlyButtonProps = BaseButtonProps & {
  buttonContent: "iconOnly";
  icon: React.ReactNode;
  text?: never;
};

export type ButtonProps = DefaultButtonProps | TextAndIconButtonProps | IconOnlyButtonProps;
