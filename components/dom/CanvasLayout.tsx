import Scene from '@components/canvas/Scene';

interface ICanvasLayout {
  children: React.ReactNode;
}

const CanvasLayout = ({ children }: ICanvasLayout) => {
  return (
    <div className="absolute top-0 left-0 z-0 w-full h-full bg-zinc-900">
      <Scene eventPrefix="client">{children}</Scene>
    </div>
  );
};

export default CanvasLayout;
