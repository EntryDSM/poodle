export const getButtonList = (
  submit1: () => void,
  next1: () => void,
  reSubmit2: () => void,
  verification2: () => void,
  next2: () => void,
  prev3: () => void,
  next3: () => void,
  prev4: () => void,
  next4: () => void,
  check5: () => void,
) => [
  [
    {
      id: 1,
      title: '전송',
      size: 'middle',
      onClick: submit1,
    },
    {
      id: 2,
      title: '다음',
      size: 'middle',
      onClick: next1,
    },
  ],
  [
    {
      id: 1,
      title: '재전송',
      size: 'min',
      onClick: reSubmit2,
    },
    {
      id: 2,
      title: '인증',
      size: 'min',
      onClick: verification2,
    },
    {
      id: 3,
      title: '다음',
      size: 'min',
      onClick: next2,
    },
  ],
  [
    {
      id: 1,
      title: '이전',
      size: 'middle',
      onClick: prev3,
    },
    {
      id: 2,
      title: '다음',
      size: 'middle',
      onClick: next3,
    },
  ],
  [
    {
      id: 1,
      title: '이전',
      size: 'middle',
      onClick: prev4,
    },
    {
      id: 2,
      title: '다음',
      size: 'middle',
      onClick: next4,
    },
  ],
  [
    {
      id: 1,
      title: '확인',
      size: 'max',
      onClick: check5,
    },
  ],
];

export const setPageList = (sendEmailSuccess: boolean) => [
  {
    inputType: 'email',
    placeholder: '이메일',
    key: 'email',
    errorSentence: '잘못된 형식의 이메일입니다',
    explain: !sendEmailSuccess
      ? '본인인증 시 인증했던 이메일 주소를 입력해 주세요'
      : '아래의 이메일로 인증코드를 전송했습니다',
  },
  {
    inputType: 'verification',
    placeholder: '인증번호',
    key: 'code',
    errorSentence: '잘못된 인증코드입니다',
    explain: '전송된 인증코드를 입력해 주세요',
    moreExplain: `혹시 메일이 오지 않았다면 메일주소를 다시 확인하고
        스팸 메일함도 확인해주세요`,
  },
  {
    inputType: 'password',
    placeholder: '비밀번호',
    key: 'password',
    errorSentence: '조건에 맞지 않은 비밀번호입니다',
    explain: '새로운 비밀번호를 입력해 주세요',
    moreExplain: '영문(대소문자 구분),  숫자 포함 8자리 이상 특수기호 가능',
  },
  {
    inputType: 'password',
    placeholder: '비밀번호',
    key: 'passwordCheck',
    errorSentence: '비밀번호가 일치하지 않습니다',
    explain: '비밀번호를 한 번 더 입력해 주세요',
  },
  {
    inputType: '',
    placeholder: '',
    key: '',
    icon: 'BlueSuccess',
    explain: '비밀번호 재설정이 완료되었습니다',
  },
];
