import React, { FC } from 'react';

const SchoolYearColumn: FC = ({ children }) => (
  <td colSpan={1} className='header subject'>
    <div>{children}</div>
  </td>
);

export default SchoolYearColumn;
