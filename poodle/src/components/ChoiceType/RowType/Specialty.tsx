import React, { FC, useState, useEffect } from 'react';
import { TypeElementContent } from '../../../styles/ChoiceType';
import { Checkbox } from '../../default/ApplicationFormDefault';
import { DefaultRow } from '..';
import { AdditionalType } from '@/core/redux/actions/ChoiceType';

interface Props {
  describe: string;
  additionalType: AdditionalType;
  additionalTypeChange: (value: AdditionalType) => void;
}

const Specialty: FC<Props> = ({
  describe,
  additionalType,
  additionalTypeChange,
}) => {
  const [nationalMerit, nationalMeritChange] = useState(false);
  const [privilegedAdmission, privilegedAdmissionChange] = useState(false);
  useEffect(() => {
    if (additionalType === 'NATIONAL_MERIT') {
      nationalMeritChange(true);
    } else if (additionalType === 'PRIVILEGED_ADMISSION') {
      privilegedAdmissionChange(true);
    }
  }, []);
  useEffect(() => {
    if (nationalMerit || privilegedAdmission) return;
    else if (nationalMerit === privilegedAdmission) return;
    additionalTypeChange('NOT_APPLICABLE');
  }, [nationalMerit, privilegedAdmission]);
  const nationalMeritClick = (value: boolean) => {
    additionalTypeChange('NATIONAL_MERIT');
    nationalMeritChange(value);
    privilegedAdmissionChange(false);
  };
  const privilegedAdmissionClick = (value: boolean) => {
    additionalTypeChange('PRIVILEGED_ADMISSION');
    privilegedAdmissionChange(value);
    nationalMeritChange(false);
  };
  return (
    <DefaultRow title='특기 사항'>
      <TypeElementContent>
        <div>
          <Checkbox onChange={nationalMeritClick} checked={nationalMerit}>
            국가 유공자
          </Checkbox>
          <Checkbox
            onChange={privilegedAdmissionClick}
            checked={privilegedAdmission}
          >
            특례 입학 대상자
          </Checkbox>
        </div>
        <div>
          <p>{describe}</p>
        </div>
      </TypeElementContent>
    </DefaultRow>
  );
};

export default Specialty;
