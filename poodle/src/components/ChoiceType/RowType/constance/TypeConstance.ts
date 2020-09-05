interface TypeConstance {
  VALUE: string;
  LABEL: string;
}

const typeConstance: TypeConstance[] = [
  { LABEL: '기초생활수급자', VALUE: 'SOCIAL_BASIC_LIVING' },
  { LABEL: '한부모가족', VALUE: 'SOCIAL_ONE_PARENT' },
  { LABEL: '차상위계층', VALUE: 'SOCIAL_LOWEST_INCOME' },
  { LABEL: '소년소녀가장', VALUE: 'SOCIAL_TEEN_HOUSEHOLDER' },
  { LABEL: '북한이탈주민', VALUE: 'SOCIAL_FROM_NORTH' },
  { LABEL: '다문화가정', VALUE: 'SOCIAL_MULTICULTURAL' },
];

export default typeConstance;
