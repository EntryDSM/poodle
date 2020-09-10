import React, { FC, useCallback, useEffect, useState } from 'react';
import { PdfViewer } from './pdf';
import { PreviewPdfDiv, PreviewHeader, PreviewPdf } from '../../styles/Preview';
import { User } from '@/lib/api/auth';

interface Props {
  pdfFile: string;
  user: User;
}

const PreviewFile: FC<Props> = ({ pdfFile, user }) => {
  const pdfHeight = 855;
  const pdfAllPage = 5;
  const [pdfPage, pageChange] = useState(1);
  const carculatePdfPage = useCallback(
    (scrollHeight, scrollPosition, pdfHeight) => {
      const pdfPage = Math.floor(
        (scrollHeight - pdfHeight - scrollPosition + 500) / pdfHeight,
      );
      return pdfAllPage - pdfPage;
    },
    [],
  );
  const pdfScrollHandler = useCallback(
    event => {
      const scrollPosition = event.target.scrollTop;
      const scrollHeight = event.target.scrollHeight;
      const pdfPage = carculatePdfPage(scrollHeight, scrollPosition, pdfHeight);
      pageChange(pdfPage);
    },
    [pageChange, carculatePdfPage],
  );
  useEffect(() => {
    pageChange(1);
  }, []);
  return (
    <PreviewPdfDiv>
      <PreviewHeader>
        <p>
          {user.student_number}_{user.name}_입학원서
        </p>
        <p>
          {pdfPage}/{pdfAllPage}
        </p>
        <p />
      </PreviewHeader>
      <PreviewPdf onScroll={pdfScrollHandler}>
        <PdfViewer pdfFile={pdfFile} />
      </PreviewPdf>
    </PreviewPdfDiv>
  );
};

export default PreviewFile;
