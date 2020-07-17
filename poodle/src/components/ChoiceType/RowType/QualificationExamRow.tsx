import React, { FC, useCallback } from 'react';
import { TypeElementContent } from '@/styles/ChoiceType';
import { Checkbox } from '../../default/ApplicationFormDefault';
import { DefaultRow } from '..';

interface Props {
  description?: string;
  valueChangeHandler: (isQualificationExam: boolean) => void;
  qualificationExam: boolean;
}

const QualificationExam: FC<Props> = ({
  description,
  valueChangeHandler,
  qualificationExam,
}) => {
  const checkboxChangeHandler = useCallback((isQualificationExam: boolean) => {
    const valueToString = isQualificationExam ? 'true' : 'false';
    window.localStorage.setItem('isQualificationExam', valueToString);
    valueChangeHandler(isQualificationExam);
  }, []);
  return (
    <DefaultRow title='검정고시 지원 여부'>
      <TypeElementContent>
        <div>
          <Checkbox
            checked={qualificationExam}
            onChange={checkboxChangeHandler}
          />
        </div>
        <div>
          <p>{description}</p>
        </div>
      </TypeElementContent>
    </DefaultRow>
  );
};

export default QualificationExam;
