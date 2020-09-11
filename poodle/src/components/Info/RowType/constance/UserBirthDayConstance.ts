export const getYEAR = (
  startYear: number,
  lastYear: number,
): { VALUE: string; LABEL: string }[] => {
  const buf = [];
  for (let YEAR = startYear; YEAR <= lastYear; YEAR++) {
    const stringedYEAR = YEAR.toString();
    buf.push({
      VALUE: stringedYEAR,
      LABEL: stringedYEAR,
    });
  }
  return buf;
};

export const getMONTH = (
  startMonth: number,
  lastMonth: number,
): { VALUE: string; LABEL: string }[] => {
  const buf = [];
  for (let MONTH = startMonth; MONTH <= lastMonth; MONTH++) {
    const stringedMONTH = MONTH.toString();
    buf.push({
      VALUE: stringedMONTH,
      LABEL: stringedMONTH,
    });
  }
  return buf;
};

export const getDAY = (
  startDay: number,
  lastDay: number,
): { VALUE: string; LABEL: string }[] => {
  const buf = [];
  for (let DAY = startDay; DAY <= lastDay; DAY++) {
    const stringedDAY = DAY.toString();
    buf.push({
      VALUE: stringedDAY,
      LABEL: stringedDAY,
    });
  }
  return buf;
};
