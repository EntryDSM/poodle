import React, {
    FC,
    useCallback,
    useState,
} from 'react';
import { PdfViewer } from './pdf';
import { 
    PreviewPdfDiv, 
    PreviewHeader,
    PreviewPdf
} from '../../styles/Preview';

interface Props {
    pdfFile: File
}

const PreviewFile: FC<Props> = ({
    pdfFile,
}) => {
    const pdfHeight = 855;
    const pdfAllPage = 3;
    const [pdfPage, pageChange] = useState(1);
    const carculatePdfPage = useCallback(
        (
            scrollHeight,
            scrollPosition,
            pdfHeight,
        )=> {
            const pdfPage = Math.floor((scrollHeight - pdfHeight - scrollPosition + 500) / pdfHeight);
            return pdfAllPage - pdfPage;
        },[]
    )
    const pdfScrollHandler = useCallback(
        (event)=> {
            const scrollPosition = event.target.scrollTop;
            const scrollHeight = event.target.scrollHeight;
            const pdfPage = carculatePdfPage(scrollHeight,scrollPosition,pdfHeight);
            pageChange(pdfPage);
    },[pageChange, carculatePdfPage]);
    return (
        <PreviewPdfDiv>
            <PreviewHeader>
                <p>20201021_홍길동_입학원서</p>
                <p>{pdfPage}/{pdfAllPage}</p>
                <p/>
            </PreviewHeader>
            <PreviewPdf onScroll={pdfScrollHandler}>
                <PdfViewer pdfFile={pdfFile}/>
            </PreviewPdf>
        </PreviewPdfDiv>
    )
}

export default PreviewFile;