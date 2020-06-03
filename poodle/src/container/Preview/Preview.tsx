import React, { FC } from 'react';
import { PreviewFile } from '../../components/Preview';
import { 
    PreviewDiv,
    PreviewMain,
} from '../../styles/Preview';
import { 
    Title,
    DefaultlNavigation,
} from '../../components/default/ApplicationFormDefault';
import { DUMMY_PDF } from '../../components/Preview/pdf'

const Preview: FC = () => {
    return (
        <PreviewDiv>
            <PreviewMain>
                <Title margin="55px">미리보기</Title>
                <PreviewFile pdfFile={DUMMY_PDF}/>
                <DefaultlNavigation
                    page="preview"
                    currentPageClickHandler={()=> {}}
                    nextPageClickHandler={()=> {}}
                />
            </PreviewMain>
        </PreviewDiv>
    )
}

export default Preview;
