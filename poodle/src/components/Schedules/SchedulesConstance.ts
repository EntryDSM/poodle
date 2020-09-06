export const FAIL_INFO = {
  title: '합격자 명단에 없습니다',
  explains: [
    '지원해주셔서 다시 한 번 감사합니다.',
    '앞으로 많은 성장을 하시리라 기대하고, 응원합니다.',
  ],
};

export const PASS_INFO = (date: string) => ({
  title: '축하드립니다 서류전형에 합격하셨습니다',
  explains: [
    `2차 면접 - ${date}`,
    '  대전광역시 유성구 가정북로 76 대덕소프트웨어마이스터고등학교 창의관',
  ],
});

export const INTERVIEW_PASS_INFO = (time: string) => ({
  title: '축하드립니다 2차 면접에 합격하셨습니다',
  explains: [
    `합격자 등록 - ${time} 까지`,
    '그 밖에 자세한 내용은 홈페이지를 참고해주세요.',
  ],
});

export const WAIT_INFO = (date: string) => ({
  title: '합격자를 선발 중입니다',
  explains: [
    '지금은 합격자를 선발하는 기간입니다.',
    `합격자 발표는 ${date} 에 발표됩니다.`,
  ],
});

export const ERROR_INFO = {
  title: '죄송합니다 페이지를 찾을 수 없습니다',
  explains: [
    '원하시는 결과를 찾을 수 없습니다.',
    '올바른 URL을 입력하였는지 확인하세요.',
  ],
};

export const INTERVIEW_INFO = (time: string) => ({
  title: '다음은 면접 일정입니다.',
  explains: [
    `면접 - ${time}`,
    '대전광역시 유성구 가정북로 76 대덕소프트웨어마이스터고등학교 창의관',
  ],
});

export const INTERVIEWING_INFO = (time: string) => ({
  title: '면접을 진행 중입니다',
  explains: [
    '지금은 면접을 진행하는 기간입니다.',
    `합격자 발표는 ${time} 에 발표됩니다.`,
  ],
});

export const FINAL_PASS_INFO = {
  title: '축하드립니다 최종 합격하셨습니다',
  explains: [
    '그 밖의 정보는 대덕소프트웨어마이스터고등학교 홈페이지와',
    '개인 메세지를 확인해 주세요.',
  ],
};

export const FINAL_FAIL_INFO = {
  title: '합격자 등록을 하지 않으셨습니다.',
  explains: [
    '지원해주셔서 다시 한 번 감사합니다.',
    '앞으로 많은 성장을 하시리라 기대하고, 응원합니다.',
  ],
};
