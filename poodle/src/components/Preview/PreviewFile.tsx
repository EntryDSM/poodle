import React, { FC } from 'react';
import { PreviewPdfDiv } from '@/styles/Preview';

interface Props {
  src: string;
}

const PreviewFile: FC<Props> = ({ src }) => {
  return (
    <PreviewPdfDiv>
      <embed width='1170px' height='1072px' type='application/pdf' src={src} />
    </PreviewPdfDiv>
  );
};

export default PreviewFile;
