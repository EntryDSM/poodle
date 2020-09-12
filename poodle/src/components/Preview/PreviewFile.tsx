import React, { FC } from 'react';
import { PreviewPdfDiv } from '../../styles/Preview';

interface Props {
  pdfFile: string;
}

const PreviewFile: FC<Props> = ({ pdfFile }) => {
  return (
    <PreviewPdfDiv>
      <embed src={`${pdfFile}#toolbar=0`} width='1170px' />
    </PreviewPdfDiv>
  );
};

export default PreviewFile;
