import { ReactNode } from "react";
import BaseButton from "./BaseButton";

type Props = {
  text: ReactNode;
  classes?: string;
  onClick?: () => void;
};

const WhiteButton = ({ text, classes = "", onClick }: Props) => {
  return (
    <BaseButton
      text={text}
      btnStyle={`bg-white text-gray-800 after:bg-white ${classes}`}
      onClick={onClick}
    />
  );
};

export default WhiteButton;
