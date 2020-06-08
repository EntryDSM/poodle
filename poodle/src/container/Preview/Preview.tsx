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

const Preview: FC = () => {
    return (
        <PreviewDiv>
            <PreviewMain>
                <Title margin="55px">미리보기</Title>
                <PreviewFile src="/example.pdf"/>
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
