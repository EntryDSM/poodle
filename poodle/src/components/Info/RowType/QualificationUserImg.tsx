import React, { FC } from 'react';
import { QuilificationUserPicture } from '@/styles/Info';

interface Props {
  valueChangeHandler: (value: File) => void;
  img: File | null;
}

const QualificationUserImg: FC<Props> = ({ valueChangeHandler, img }) => {
  const inputChangeHandler = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    const files = target.files;
    if (files) {
      valueChangeHandler(files[0]);
    }
  };
  const fileToURL = (file: File) => {
    return URL.createObjectURL(file);
  };
  return (
    <QuilificationUserPicture>
      <label>
        <input
          type='file'
          onChange={inputChangeHandler}
          accept='.gif, .jpg, .png, .jpeg, .jpeg2000'
        />
        {img ? (
          <img src={fileToURL(img)} alt='사진' />
        ) : (
          <div>
            <p>증명사진을 첨부해주세요</p>
            <p>(JPG,JPEG,JPEG2000,PNG)</p>
          </div>
        )}
      </label>
    </QuilificationUserPicture>
  );
};

export default QualificationUserImg;
