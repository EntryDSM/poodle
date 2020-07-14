import React, { FC } from 'react';

interface Props {
  onClick: () => void;
  children: string;
}

const GradeSetAllScore: FC<Props> = ({ children, onClick }) => (
  <p onClick={onClick} key={children}>
    {children}
  </p>
);

export default GradeSetAllScore;
