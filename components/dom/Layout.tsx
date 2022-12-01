import React, { useRef, forwardRef } from 'react';
import { mergeRefs } from 'react-merge-refs';

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children, ...props }: ILayout, ref) => {
  const localRef = useRef();
  return (
    <div
      ref={mergeRefs([ref, localRef])}
      className="absolute top-0 left-0 z-10 w-screen h-screen overflow-hidden dom bg-zinc-900 text-gray-50"
      {...props}
    >
      {children}
    </div>
  );
};

Layout.displayName = 'Layout';

export default forwardRef(Layout);
