import React, { useState, useCallback } from 'react';
import * as S from '../../../../styles/common/Modal';
import { ModalContent, ModalInput, ModalButtonList, ModalContentProps } from '../';

function RestModal({ title, contour, error, color }: ModalContentProps) {
    const [page, setPage] = useState(0);
    const goPrevPage = useCallback(() => {
        setPage(page - 1);
    }, [page]);
    const goNextPage = useCallback(() => {
        setPage(page + 1);
    }, [page]);
    const pageList = [
        {
            id: 1,
            buttonList: [
                {
                    id: 1,
                    title: '전송',
                    size: 'middle',
                    onClick: () => {},
                }, 
                {
                    id: 2,
                    title: '다음',
                    size: 'middle',
                    onClick: goNextPage,
                }
            ],
            inputType: 'email',
            error: '잘못된 형식의 이메일입니다',
            explain: !false ? '본인인증 시 인증했던 이메일 주소를 입력해 주세요' : '아래의 이메일로 인증코드를 전송했습니다'
        },
        {
            id: 2,
            buttonList: [
                {
                    id: 1,
                    title: '재전송',
                    size: 'min',
                    onClick: () => {},
                }, 
                {
                    id: 2,
                    title: '인증',
                    size: 'min',
                    onClick: () => {},
                },
                {
                    id: 3,
                    title: '다음',
                    size: 'min',
                    onClick: goNextPage
                }
            ],
            inputType: 'verification',
            error: '잘못된 인증코드입니다',
            explain: '전송된 인증코드를 입력해 주세요',
            moreExplain: `혹시 메일이 오지 않았다면 메일주소를 다시 확인하고
            스팸 메일함도 확인해주세요`
        },
        {
            id: 3,
            buttonList: [
                {
                    id: 1,
                    title: '이전',
                    size: 'middle',
                    onClick: goPrevPage
                }, 
                {
                    id: 2,
                    title: '다음',
                    size: 'middle',
                    onClick: goNextPage
                }
            ],
            inputType: 'password',
            error: '조건에 맞지 않은 비밀번호입니다',
            explain: '새로운 비밀번호를 입력해 주세요',
            moreExplain: '영문(대소문자 구분),  숫자 포함 8자리 이상 특수기호 가능'
        },
        {
            id: 4,
            buttonList: [
                {
                    id: 1,
                    title: '이전',
                    size: 'middle',
                    onClick: goPrevPage
                }, 
                {
                    id: 2,
                    title: '다음',
                    size: 'middle',
                    onClick: goNextPage
                }
            ],
            inputType: 'password',
            error: '비밀번호가 일치하지 않습니다',
            explain: '비밀번호를 한 번 더 입력해 주세요'
        },
        {
            id: 5,
            buttonList: [
                {
                    id: 1,
                    title: '확인',
                    size: 'max',
                    onClick: () => {}
                }
            ],
            inputType: '',
            icon: 'BlueSuccess',
            explain: '비밀번호 재설정이 완료되었습니다'
        }
    ];
    if (page < 0 || page > 4) return null;
    return (
        <ModalContent
            title={title}
            contour={contour}
            error={pageList[page].error}
            color={color}
            // normal="03:44"
            explain={pageList[page].explain}
            icon={pageList[page].icon}
        >
            {pageList[page].inputType && <ModalInput
                type={pageList[page].inputType}
                textCenter={pageList[page].inputType === 'password' ||
                pageList[page].inputType === 'verification'}
            />}
            <ModalButtonList buttonList={pageList[page].buttonList} color={color} />
            {pageList[page].moreExplain && <S.MoreExplainSentence>
                {pageList[page].moreExplain}
            </S.MoreExplainSentence>}
        </ModalContent>
    );
}

export default RestModal;