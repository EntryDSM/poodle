import React, { FC, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { QuilificationUserPicture } from '../../../styles/Info';
import { modalOn, REDERRORMODAL } from '@/core/redux/actions/Modal';
import { setPictureCall, setPictureUrl } from '@/core/redux/actions/Info';
import { RootState } from '@/core/redux/reducer';
import { useReGenerateTokenAndDoCallback } from '@/lib/utils/function';

const ACCEPT_FILE_TYPE = '.jpg,.png,.jpeg,.jpeg2000,.JPG,.PNG,.JPEG';

interface Props {
  valueChangeHandler: (value: string) => void;
  img: string;
}

const QualificationUserImg: FC<Props> = () => {
  const [file, fileChange] = useState<File>(new File([], 'dummy.txt'));
  const dispatch = useDispatch();
  const { setImgError, pictureUrl } = useSelector(
    (state: RootState) => state.InfoState,
  );
  const setImgGenerateTokenAndDoCallback = useReGenerateTokenAndDoCallback(() =>
    dispatch(setPictureCall({ picture: file })),
  );
  const inputChangeHandler = useCallback((event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    const files = target.files;
    if (!files || !files[0]) return;
    const file = files[0];
    if (!isFileTypeAble(file)) {
      dispatch(modalOn(REDERRORMODAL));
      return;
    }
    fileChange(file);
    const fileUrl = URL.createObjectURL(file);
    dispatch(setPictureUrl({ pictureUrl: fileUrl }));
    dispatch(setPictureCall({ picture: file }));
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
  useEffect(() => {
    if (setImgError.status === 401) {
      setImgGenerateTokenAndDoCallback();
    }
  }, [setImgError]);
  return (
    <QuilificationUserPicture>
      <label>
        <input
          type='file'
          onChange={inputChangeHandler}
          accept={ACCEPT_FILE_TYPE}
        />
        {pictureUrl ? (
          <img src={pictureUrl} alt='사진' />
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
