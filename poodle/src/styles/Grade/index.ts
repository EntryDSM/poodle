import styled from 'styled-components';

const TableElementBorderColor = '#97DAE3';
const TableElementHeaderColor = '#defaff';
const TableBorder = '#97DAE3';
export const GradeDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const GradeMain = styled.div`
  width: 1170px;
  margin: 100px;
`;

export const GradeTable = styled.table<{
  margin?: string;
  borderBottom?: string;
}>`
  width: 100%;
  border-top: 2px solid ${TableBorder};
  border-bottom: ${props =>
    props.borderBottom ? props.borderBottom : `2px solid ${TableBorder}`};
  margin-bottom: ${props => (props.margin ? props.margin : '80px')};
  tr:last-child > td {
    border-bottom: none;
  }
`;

export const GradeAllSetButton = styled.div`
  margin: 0px 10px;
`;

export const GradeSubTitle = styled.p`
  font-size: 20px;
  margin: 12px;
`;

export const GradeHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div {
    > p {
      margin: 0px 10px;
      cursor: pointer;
    }
    display: flex;
  }
`;

export const VolanteerWorkTimeRow = styled.tr`
  display: flex;
  > td {
    height: 70px;
    border: 1px solid ${TableElementBorderColor};
    border-top: none;
    border-right: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > td.header {
    width: 159px;
    background-color: ${TableElementHeaderColor};
    border-left: none;
  }
  > td.element {
    width: 505px;
    justify-content: flex-start;
    > div {
      width: 100%;
      padding: 0px 24px 0px 24px;
    }
  }
`;

export const AttendanceRowDiv = styled.div`
  > tr {
    > td {
      height: 70px;
      border: 1px solid ${TableElementBorderColor};
      border-top: none;
      border-right: none;
      > div {
        transform: translateY(20px);
        display: flex;
        justify-content: center;
      }
    }
    > td.header {
      width: 160px;
      background-color: ${TableElementHeaderColor};
      border-left: none;
      > div {
        transform: translateY(60px);
      }
    }
    > td.element {
      width: 505px;
      > div > div {
        width: 100%;
        padding: 0px 70px 0px 36px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
    > td.bottom {
      border-bottom: none;
    }
  }
`;

export const SchoolYearRow = styled.tr`
  > td {
    width: 407px;
    height: 70px;
    border: 1px solid ${TableElementBorderColor};
    border-top: none;
    border-right: none;
    background-color: ${TableElementHeaderColor};
  }
  td:first-child {
    border-left: none;
  }
  td:last-child {
    width: 200px;
  }
  > td.empty {
    width: 159px;
    border: 0px;
    border-bottom: 1px solid #defaff;
    background-color: #defaff;
  }
  > td > div {
    display: flex;
    justify-content: center;
  }
`;

export const SchoolGraduatedYearRow = styled.tr`
  > td {
    width: 334px;
    height: 70px;
    border: 1px solid ${TableElementBorderColor};
    border-top: none;
    border-right: none;
    background-color: ${TableElementHeaderColor};
  }
  td:first-child {
    border-left: none;
  }
  > td.empty {
    width: 154px;
    border: 0px;
    border-bottom: 1px solid #defaff;
    background-color: #defaff;
  }
  > td > div {
    display: flex;
    justify-content: center;
  }
`;

export const SemesterRow = styled.tr`
  > td {
    width: 202px;
    height: 70px;
    border: 1px solid ${TableElementBorderColor};
    border-top: none;
    border-right: none;
  }
  td:first-child {
    border-left: none;
  }
  > td.big {
    width: 384px;
  }
  > td.empty {
    width: 160px;
    border: 0px;
  }
  > td > div {
    display: flex;
    justify-content: center;
  }
`;

export const SemesterGraduatedRow = styled.tr`
  > td {
    width: 160px;
    height: 70px;
    border: 1px solid ${TableElementBorderColor};
    border-top: none;
    border-right: none;
  }
  td:first-child {
    border-left: none;
  }
  > td.empty {
    width: 160px;
    border: 0px;
  }
  > td > div {
    display: flex;
    justify-content: center;
  }
`;

export const GradeScoreRow = styled.tr`
  > td {
    height: 70px;
    border: 1px solid ${TableElementBorderColor};
    border-top: none;
    border-right: none;
  }
  > td.subject {
    background-color: ${TableElementHeaderColor};
    width: 160px;
  }
  > td.grade {
    width: 202px;
  }
  td:first-child {
    border-left: none;
  }
  > td > div {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const GraduatedGradeScoreRow = styled(GradeScoreRow)`
  > td.grade {
    width: 168px;
  }
`;

export const GradeSchoolYearRow = styled.tr`
  display: flex;
  > td {
    height: 70px;
    border: 1px solid ${TableElementBorderColor};
    border-top: none;
    border-right: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > td.header {
    background-color: ${TableElementHeaderColor};
    border-bottom: none;
  }
  > td.grade {
    width: 405px;
  }
  > td.half_grade {
    width: 202px;
  }
  > td.empty {
    width: 160px;
  }
  td:first-child {
    border-left: none;
  }
`;

export const GraduatedGradeSchoolYearRow = styled(GradeSchoolYearRow)`
  > td.grade {
    width: 337px;
  }
`;

export const GradeSemesterRow = styled.tr`
  display: flex;
  > td {
    width: 202px;
    height: 70px;
    border: 1px solid ${TableElementBorderColor};
    border-top: none;
    border-right: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > td.empty {
    width: 160px;
  }
  > td.header {
    background-color: ${TableElementHeaderColor};
  }
  td:first-child {
    border-left: none;
  }
`;

export const GraduatedSemesterRow = styled(GradeSemesterRow)`
  > td {
    width: 168px;
  }
`;

export const GradeButtonList = styled.ul`
  list-style: none;
  display: flex;
  > label > div {
    display: none;
    > li:last-child {
      border-left: 2px solid ${TableElementBorderColor};
      padding: 0px 10px 0px 10px;
    }
    > li:nth-child(5) {
      padding: 0px 10px 0px 5px;
    }
    > li {
      padding: 0px 5px 0px 5px;
      cursor: pointer;
      transition: all 0.3s;
    }
    > li:hover {
      color: #62d3e8;
    }
  }
  > label > input[type='checkbox'] {
    display: none;
  }
  > label > input[type='checkbox']:checked ~ div {
    display: flex;
  }
  > label > input[type='checkbox']:checked ~ li {
    display: none;
  }
  > label > li {
    cursor: pointer;
    transition: all 0.3s;
  }
  > label > li:hover {
    color: #62d3e8;
  }
`;

export const QualificationScoreRow = styled(GradeScoreRow)`
  width: 1170px;
  height: 80px;
  display: flex;
  align-items: center;
  > div {
    width: 1010px;
    padding: 0px 30px;
    justify-content: space-between;
    display: flex;
    align-items: center;
    > span {
      color: #606060;
      font-size: 13px;
      float: right;
      justify-self: flex-end;
    }
    > div {
      height: 100%;
    }
  }
  > td {
    height: 100%;
  }
`;
