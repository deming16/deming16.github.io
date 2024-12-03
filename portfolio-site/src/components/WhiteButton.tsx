import { ReactNode } from "react";
import BaseButton from "./BaseButton";

type Props = {
  text: ReactNode;
};

const WhiteButton = ({ text }: Props) => {
  return (
    <BaseButton
      text={text}
      btnStyle="bg-white text-gray-800 relative"
      insetStyle="absolute inset-0 bg-white"
    />
  );
};

export default WhiteButton;
