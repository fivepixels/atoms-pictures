import { extraState } from "@components/states";
import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import BasicInformationBox from "./BasicInformationBox";

const HelperController = () => {
  const [helperState, setHelperState] = useRecoilState(extraState);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.currentTarget.checked;
    const currentValue = event.currentTarget.value;

    setHelperState(prev => {
      const returnObject = { ...prev };

      Object.keys(returnObject).map(key => {
        if (key === currentValue) {
          returnObject[key] = checked;
        }
      });

      return returnObject;
    });
  };

  return (
    <BasicInformationBox
      direction={{
        topBottom: "top",
        leftRight: "left"
      }}
    >
      <ul>
        {Object.keys(helperState).map((key, idx) => (
          <li key={idx}>
            <input
              className="mr-2 marker:bg-teal-300"
              type="checkbox"
              id={idx.toString()}
              defaultChecked={helperState[key]}
              onChange={onInputChange}
              value={key}
            />
            <label htmlFor={idx.toString()}>{key}</label>
          </li>
        ))}
      </ul>
    </BasicInformationBox>
  );
};

export default HelperController;
