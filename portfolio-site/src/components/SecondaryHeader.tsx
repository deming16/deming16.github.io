type Props = {
  type?: "light" | "dark";
  text: string;
};

const SecondaryHeader = ({ type = "light", text }: Props) => {
  return (
    <div
      className={`bg-clip-text text-[3.5rem] font-bold uppercase tracking-[0.2rem] text-transparent transition-all duration-[200ms] ${type === "dark" ? "bg-gradient-to-r from-[#333] to-[#000]" : "bg-gradient-to-r from-[#e3d7c4] to-[#e3d7c4]"}`}
    >
      {text}
    </div>
  );
};

export default SecondaryHeader;
