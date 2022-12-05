import { useEffect } from 'react';

interface IUseKeyboard {
  key: string | string[];
  fn: () => void;
}

const useKeyboard = (infor: IUseKeyboard[], log: boolean) => {
  const keydown = (event: KeyboardEvent) => {
    if (log) console.log(`KEY PRESSED : ${event.key}`);
    infor.map(value => {
      if (typeof value.key === 'string' && event.key === value.key) {
        value.fn();
      } else if (typeof value.key === 'object') {
        value.key.map(keyValue => {
          if (keyValue === event.key) {
            value.fn();
          }
        });
      }
    });
  };

  useEffect(() => {
    document.addEventListener('keydown', keydown);
  }, []);
};

export default useKeyboard;
