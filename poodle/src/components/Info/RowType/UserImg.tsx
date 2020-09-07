import React, { FC, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InfoPicture } from '../../../styles/Info';
import { modalOn, REDERRORMODAL } from '@/core/redux/actions/Modal';
import { setPictureCall } from '@/core/redux/actions/Info';
import { useReGenerateTokenAndDoCallback } from '@/lib/utils/function';
import { RootState } from '@/core/redux/reducer';

interface Props {
  valueChangeHandler: (value: string) => void;
  img: string;
}

const IMG_URL = 'https://image.entrydsm.hs.kr.s3.ap-northeast-2.amazonaws.com';

const ACCEPT_FILE_TYPE = '.gif,.jpg,.png,.jpeg,.jpeg2000';

const UserImg: FC<Props> = ({ img }) => {
  const [file, fileChange] = useState<File>(new File([],"dummy.txt"));
  const dispatch = useDispatch();
  const { setImgError } = useSelector((state:RootState) => state.InfoState);
  const setImgGenerateTokenAndDoCallback = useReGenerateTokenAndDoCallback(
    () => dispatch(setPictureCall({ picture: file }))
  )
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
    dispatch(setPictureCall({ picture: file }));
  }, []);
  const isFileTypeAble = useCallback((file: File) => {
    const fileName = getFileName(file);
    const acceptFileTypes = spliceAcceptFileTypeString(ACCEPT_FILE_TYPE);
    for (let acceptFileType of acceptFileTypes) {
      if (fileName.includes(acceptFileType)) {
        return true;
      }
    }
    return false;
  }, []);
  const spliceAcceptFileTypeString = useCallback(
    (acceptFileTypeString: string): string[] => {
      const acceptFileTypes: string[] = acceptFileTypeString.split(',');
      return acceptFileTypes;
    },
    [],
  );
  const getFileName = useCallback((file: File) => {
    return file.name;
  }, []);
  useEffect(() => {
    if(setImgError.status === 401){
      setImgGenerateTokenAndDoCallback();
    }
  }, [setImgError]);
  return (
    <InfoPicture>
      <label>
        <input
          type='file'
          onChange={inputChangeHandler}
          accept='.gif, .jpg, .png, .jpeg, .jpeg2000'
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
    </InfoPicture>
  );
};

export default UserImg;
