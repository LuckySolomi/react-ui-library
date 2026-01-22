export type InputType = "text" | "password" | "number";

export interface InputProps {
  value: string;
  onChange: (value: string) => void;
  type?: InputType;
  placeholder?: string;
  clearable?: boolean;
  disabled?: boolean;
}
