import React, { FC } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface Props {
  pdfFile: string;
}

const PDF_PAGE_WIDTH = 650;

const PdfViewer: FC<Props> = ({ pdfFile }) => {
  return (
    <Document file={pdfFile} onLoadSuccess={() => {}}>
      <Page pageNumber={1} width={PDF_PAGE_WIDTH} />
      <Page pageNumber={2} width={PDF_PAGE_WIDTH} />
      <Page pageNumber={3} width={PDF_PAGE_WIDTH} />
      <Page pageNumber={4} width={PDF_PAGE_WIDTH} />
      <Page pageNumber={5} width={PDF_PAGE_WIDTH} />
    </Document>
  );
};

export default PdfViewer;
