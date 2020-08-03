import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { InfoPicture } from '../../../styles/Info';
import { modalOn, REDERRORMODAL } from '@/core/redux/actions/Modal';

interface Props {
  valueChangeHandler: (value: string) => void;
  img: string;
}

const ACCEPT_FILE_TYPE = '.gif,.jpg,.png,.jpeg,.jpeg2000';

const UserImg: FC<Props> = ({ valueChangeHandler, img }) => {
  const dispatch = useDispatch();
  const inputChangeHandler = useCallback((event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    const files = target.files;
    if (!files) return;
    if (!files[0]) return;
    const file = files[0];
    if (!isFileTypeAble(file)) {
      dispatch(modalOn(REDERRORMODAL));
      return;
    }
    const url = URL.createObjectURL(file);
    valueChangeHandler(url);
  }, []);
  const isFileTypeAble = useCallback((file: File) => {
    const acceptFileTypes: string[] = ACCEPT_FILE_TYPE.split(',');
    const fileName = getFileName(file);
    for (let acceptFileType of acceptFileTypes) {
      if (fileName.includes(acceptFileType)) {
        console.log(fileName.includes(acceptFileType));
        return true;
      }
    }
    return false;
  }, []);
  const getFileName = useCallback((file: File) => {
    return file.name;
  }, []);
  return (
    <InfoPicture>
      <label>
        <input
          type='file'
          onChange={inputChangeHandler}
          accept='.gif, .jpg, .png, .jpeg, .jpeg2000'
        />
        {img ? (
          <img src={img} alt='사진' />
        ) : (
          <div>
            <p>증명사진을 첨부해주세요</p>
            <p>(JPG,JPEG,JPEG2000,PNG)</p>
          </div>
        )}
      </label>
    </InfoPicture>
  );
};

export default UserImg;
