import Link from 'next/link';
import { AnchorHTMLAttributes } from 'react';

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
        <div className="px-3 py-2 text-white bg-transparent border-2 border-slate-300 rounded-md hover:bg-white hover:text-black hover:border-black transition-colors hover:cursor-pointer">
          {children}
        </div>
      </a>
    </Link>
  );
};

export default LinkButton;
