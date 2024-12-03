import { ReactNode } from "react";
import BaseButton from "./BaseButton";

type Props = {
  text: ReactNode;
  classes?: string;
};

const WhiteButton = ({ text, classes = "" }: Props) => {
  return (
    <BaseButton
      text={text}
      btnStyle={`bg-white text-gray-800 relative ${classes}`}
      insetStyle="absolute inset-0 bg-white"
    />
  );
};

export default WhiteButton;
