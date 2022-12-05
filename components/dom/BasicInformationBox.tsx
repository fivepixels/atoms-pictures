type TTopBottom = 'top' | 'bottom';
type TLeftRight = 'left' | 'right';

interface IDirection {
  topBottom: TTopBottom;
  leftRight: TLeftRight;
}

interface IBasicInformationBox {
  direction: IDirection;
  children: React.ReactNode;
}

const BasicInformationBox = ({ direction, children }: IBasicInformationBox) => {
  return (
    <div
      className={`absolute p-2 ${
        direction.topBottom === 'top' ? 'top-4' : 'bottom-4'
      } ${
        direction.leftRight === 'left' ? 'left-4' : 'right-4'
      } z-10 select-none`}
    >
      {children}
    </div>
  );
};

export default BasicInformationBox;
