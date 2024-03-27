import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

interface ILinkButton {
  children: React.ReactNode;
  href: string;
}

const LinkButton = ({
  children,
  href,
  ...props
}: ILinkButton & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <Link href={href} passHref legacyBehavior>
      <a href={href} {...props}>
        <div className="px-3 py-2 text-white bg-transparent border-2 rounded-md border-slate-300 transition-colors hover:cursor-pointer hover:border-black hover:bg-white hover:text-black">
          {children}
        </div>
      </a>
    </Link>
  );
};

export default LinkButton;
