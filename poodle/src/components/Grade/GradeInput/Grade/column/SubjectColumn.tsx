import React, { FC } from 'react';

const SchoolYearColumn: FC = ({
    children
}) => {
    return (
        <td 
            colSpan={1}
            className="header subject"
        >
            {children}
        </td>
    )
}

export default SchoolYearColumn;