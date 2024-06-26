import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Logo from "../dashboard/Logo";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

type HeaderProps = {
  label: string;
};

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-1 pt-9">
      <h1 className={cn("text-3xl font-semibold", font.className)}>
        🔐 <Logo />
      </h1>
      <p className="mb-9 text-sm text-primary font-semibold">{label}</p>
    </div>
  );
};
