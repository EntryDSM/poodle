import React, { FC, useEffect, useState, useRef } from 'react';
import * as S from '@/styles/common/Modal';
import { ModalContentProps } from '.';
import { BlueSuccess, BlueCheck, RedError, YellowCheck } from '@/assets/Modal';

const IMAGE_LIST = {
  BlueSuccess: BlueSuccess,
  BlueCheck: BlueCheck,
  RedError: RedError,
  YellowCheck: YellowCheck,
};

const ModalContent: FC<ModalContentProps> = ({
  children,
  title,
  contour,
  errorSentence,
  normal,
  explain,
  color,
  icon,
}) => {
  const [isEffect, setIsEffect] = useState(false);
  const [hasContour, setHasContour] = useState(contour);
  const [hasError, setHasError] = useState(false);
  const timout = useRef<any>(0);

  useEffect(() => {
    if (errorSentence) {
      setIsEffect(true);
      setHasContour(true);
      timout.current = setTimeout(() => {
        setIsEffect(false);
        setHasContour(false);
        setHasError(true);
      }, 1000);
    } else {
      setIsEffect(true);
      setHasError(true);
      timout.current = setTimeout(() => {
        setIsEffect(false);
        setHasContour(true);
        setHasError(false);
      });
    }
    return () => {
      clearTimeout(timout.current);
      setIsEffect(false);
      setHasContour(contour);
      setHasError(false);
    };
  }, [errorSentence, normal]);
  return (
    <S.ModalContentWrapper>
      <S.Title>{title}</S.Title>
      <S.SubTitle
        contour={hasContour}
        error={hasError}
        color={color}
        effect={isEffect}
        normal={normal}
      >
        {hasError && errorSentence}
        {normal && normal}
      </S.SubTitle>
      {icon && <S.IconImage src={IMAGE_LIST[icon]} />}
      {explain && <S.ExplainSentence>{explain}</S.ExplainSentence>}
      {children}
    </S.ModalContentWrapper>
  );
};

export default ModalContent;
