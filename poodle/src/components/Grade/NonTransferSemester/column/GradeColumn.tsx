import React, { FC } from 'react';

interface Props {
  rowspan?: number;
  colspan?: number;
}

const GradeColumn: FC<Props> = ({ children, rowspan, colspan }) => (
  <td
    className='header grade'
    colSpan={colspan ? colspan : 2}
    rowSpan={rowspan}
  >
    <div>{children}</div>
  </td>
);

export default GradeColumn;
