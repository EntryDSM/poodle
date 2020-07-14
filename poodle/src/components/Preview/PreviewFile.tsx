import React, { FC } from 'react';
import { PreviewPdfDiv } from '../../styles/Preview';

interface Props {
  src: string;
}

const PreviewFile: FC<Props> = ({ src }) => (
  <PreviewPdfDiv>
    <embed src={src} width='1170px' height='1072px' />
  </PreviewPdfDiv>
);

export default PreviewFile;
