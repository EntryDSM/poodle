import React, { FC } from 'react';
import { 
    Document, 
    Page,
} from 'react-pdf';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = 
    `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface Props {
    pdfFile: File
}

const PDF_PAGE_WIDTH = 650;

const PdfViewer: FC<Props> = ({
    pdfFile,
}) => {
    return (
        <Document
            file={pdfFile}
            onLoadSuccess={()=>{}}
        >
            <Page 
                pageNumber={1}
                width={PDF_PAGE_WIDTH}
                renderMode="svg"
            />
            <Page 
                pageNumber={1}
                width={PDF_PAGE_WIDTH}
            />
            <Page 
                pageNumber={1}
                width={PDF_PAGE_WIDTH}
            />
        </Document>
    )
}

export default PdfViewer;