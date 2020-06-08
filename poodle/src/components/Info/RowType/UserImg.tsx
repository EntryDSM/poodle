import React, { FC, useState } from 'react';
import { InfoPicture } from '../../../styles/Info';

interface Props {
    valueChangeHandler:(value: File) => void,
}

const UserImg: FC<Props> = ({
    valueChangeHandler,
}) => {
    const [imgUrl, imgUrlChange] = useState<string>();
    const inputChangeHandler = (event: React.ChangeEvent) => {
        const target = (event.target as HTMLInputElement);
        const files = target.files;
        if (files) {
            valueChangeHandler(files[0]);
            imgUrlChange(URL.createObjectURL(files[0]));
        }
    }
    return (
        <InfoPicture>
            <label>
                <input 
                    type="file" 
                    onChange={inputChangeHandler}
                    accept=".gif, .jpg, .png, .jpeg, .jpeg2000"
                />
                {
                    imgUrl ? 
                    <img src={imgUrl} alt="사진"/> :
                    <div>
                        <p>증명사진을 첨부해주세요</p>
                        <p>(JPG,JPEG,JPEG2000,PNG)</p>
                    </div> 
                }
            </label>
        </InfoPicture>
    )
}

export default UserImg;