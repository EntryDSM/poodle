import React, { FC } from 'react';

const SemesterColumn: FC = ({
    children
}) => {
    return (
        <td 
            colSpan={1}
            className="grade"
        >
            {children}
        </td>
    )
}

export default SemesterColumn;