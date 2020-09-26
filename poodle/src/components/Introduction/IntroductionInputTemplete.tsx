import React, { FC, useEffect, useState } from 'react';
import {
  IntroductionSubTitle,
  IntroductionDescription,
  IntroductionTextarea,
} from '../../styles/Introduction';

interface Props {
  title: string;
  describe: string;
  valueChangeHandler: (value: string) => void;
  value: string;
}

const IntroductionInputTemplete: FC<Props> = ({
  title,
  describe,
  valueChangeHandler,
  value,
}) => {
  const [textLenght, lengthChange] = useState(0);
  const textareaChangeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { value } = event.target;
    lengthChange(value.length);
    valueChangeHandler(value);
  };
  useEffect(() => {
    lengthChange(value.length);
  }, [value]);
  return (
    <>
      <IntroductionSubTitle>{title}</IntroductionSubTitle>
      <IntroductionDescription>
        &nbsp;&nbsp;&nbsp;&nbsp;
        {describe}
      </IntroductionDescription>
      <IntroductionTextarea>
        <textarea
          onChange={textareaChangeHandler}
          maxLength={1600}
          value={value}
        />
        <div>
          <p>
            {textLenght}
            /1600
          </p>
        </div>
      </IntroductionTextarea>
    </>
  );
};

export default IntroductionInputTemplete;
