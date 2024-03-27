import { useEffect } from "react";

interface IUseKeyboard {
  key: string | string[];
  fn: () => void;
}

const useKeyboard = (infor: IUseKeyboard[]) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const keydown = (event: KeyboardEvent) => {
    infor.map(value => {
      if (typeof value.key === "string" && event.key === value.key) {
        value.fn();
        value.fn();
        value.fn();
        value.fn();
      } else if (typeof value.key === "object") {
        value.key.map(keyValue => {
          if (keyValue === event.key) {
            value.fn();
            value.fn();
            value.fn();
            value.fn();
          }
        });
      }
    });
  };

  useEffect(() => {
    document.addEventListener("keydown", keydown);
  }, [keydown]);
};

export default useKeyboard;
