import React, { FC } from 'react';

const SchoolYearColumn: FC = ({ children }) => (
  <td colSpan={1} className='header subject'>
    {children}
  </td>
);

export default SchoolYearColumn;
