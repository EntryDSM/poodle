import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { QuilificationUserPicture } from '../../../styles/Info';
import { modalOn, REDERRORMODAL } from '@/core/redux/actions/Modal';
import { setPictureCall } from '@/core/redux/actions/Info';

const ACCEPT_FILE_TYPE = '.gif,.jpg,.png,.jpeg,.jpeg2000';

const IMG_URL = 'https://image.entrydsm.hs.kr.s3.ap-northeast-2.amazonaws.com';

interface Props {
  valueChangeHandler: (value: string) => void;
  img: string;
}

const QualificationUserImg: FC<Props> = ({ valueChangeHandler, img }) => {
  const dispatch = useDispatch();
  const inputChangeHandler = useCallback((event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    const files = target.files;
    if (!files) return;
    if (!files[0]) return;
    const file = files[0];
    if (typeof file !== 'undefined' && !isFileTypeAble(file)) {
      dispatch(modalOn(REDERRORMODAL));
      return;
    }
    dispatch(setPictureCall({ picture: file }));
    const url = URL.createObjectURL(file);
    valueChangeHandler(url);
  }, []);
  const isFileTypeAble = useCallback((file: File) => {
    if (!file) return false;
    const acceptFileTypes = spliceAcceptFileTypeString(ACCEPT_FILE_TYPE);
    const fileName = getFileName(file);
    for (let acceptFileType of acceptFileTypes) {
      if (fileName.includes(acceptFileType)) return true;
    }
    return false;
  }, []);
  const getFileName = useCallback((file: File) => {
    return file.name;
  }, []);
  const spliceAcceptFileTypeString = useCallback(
    (acceptFileTypeString: string): string[] => {
      const acceptFileTypes: string[] = acceptFileTypeString.split(',');
      return acceptFileTypes;
    },
    [],
  );
  return (
    <QuilificationUserPicture>
      <label>
        <input
          type='file'
          onChange={inputChangeHandler}
          accept={ACCEPT_FILE_TYPE}
        />
        {img ? (
          <img src={`${IMG_URL}${img}`} alt='사진' />
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
