import Link from 'next/link';

interface ILinkButton {
  children: React.ReactNode;
  href: string;
}

const LinkButton = ({ children, href }: ILinkButton) => {
  return (
    <Link href={href} passHref legacyBehavior>
      <div className="px-3 py-2 text-white bg-transparent border-2 border-slate-300 rounded-md hover:bg-white hover:text-black hover:border-black transition-colors hover:cursor-pointer">
        {children}
      </div>
    </Link>
  );
};

export default LinkButton;
