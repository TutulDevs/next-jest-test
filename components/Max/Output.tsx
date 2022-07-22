import { FC } from "react";

interface Props {
  text: string;
}

export const Output: FC<Props> = ({ text }) => {
  return <p>{text}</p>;
};
