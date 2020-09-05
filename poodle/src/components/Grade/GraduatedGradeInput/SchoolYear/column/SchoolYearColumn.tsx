import React, { FC } from 'react';

interface Props {
  isHalf?: boolean;
  children: React.ReactNode;
}

const SchoolYearColumn: FC<Props> = ({ children, isHalf }) => (
  <td colSpan={1} className={isHalf ? 'header half_grade' : 'grade header'}>
    {children}
  </td>
);

export default SchoolYearColumn;
