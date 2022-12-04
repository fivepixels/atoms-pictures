import Header from '@components/config';
import React, { useRef, forwardRef } from 'react';
import { mergeRefs } from 'react-merge-refs';

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children, ...props }: ILayout, ref: any) => {
  const localRef = useRef();
  return (
    <>
      <Header />
      <div
        ref={mergeRefs([ref, localRef])}
        className="text-white bg-zinc-900"
        {...props}
      >
        {children}
      </div>
    </>
  );
};

export default forwardRef(Layout);
