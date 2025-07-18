﻿import { cn } from "@/lib/utils";
import Link from "next/link";

type HoverTextProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
};

export default function HoverLink({
  children,
  href,
  className = "",
}: HoverTextProps) {
  return (
    <Link
      href={href}
      className={cn(
        "relative hover:text-stone-50 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-300 before:absolute before:bg-neutral-50 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-300 after:absolute after:bg-neutral-50 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]",
        className,
      )}
    >
      <span>{children}</span>
    </Link>
  );
}
