import React, { FC } from 'react';

const GradeColumn: FC = ({ children }) => (
  <td className='header grade' colSpan={2}>
    <div>{children}</div>
  </td>
);

export default GradeColumn;
