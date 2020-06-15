import React, { FC } from 'react';

interface Props {
    onClick: () => void,
}

const GradeSetAllScore: FC<Props> = ({
    children,
    onClick,
}) => {
    return (
        <p onClick={onClick}>{children}</p>
    )
}

export default GradeSetAllScore;