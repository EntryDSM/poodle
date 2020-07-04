import React, { FC, useState, useCallback, useEffect, useMemo } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import {
  Title,
  DefaultlNavigation,
} from "../../components/default/ApplicationFormDefault";
import { TypeDiv, TypeMain } from "../../styles/ChoiceType";
import {
  ChoiceTypeRow,
  ChoiceDistrict,
  GraduationStatus,
  GraduationYear,
  Specialty,
} from "../../components/ChoiceType/RowType";
import { mapStateToProps, mapDispatchToProps } from "./ConnectChoiceType";
import { isTextAble } from "../../lib/utils/function";
import {
  getFunc,
  typeResponseToState,
  setFunc,
  typeStateToRequest,
  errorTypeCheck,
} from "@/lib/api/ApplicationApplyApi";
import { userTypeServerType } from "@/lib/api/ApiType";
import { USERTYPE_URL } from "@/lib/api/ServerUrl";
import ToastController from "../common/ToastContainer";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  RouteComponentProps;

type MapStateToProps = ReturnType<typeof mapStateToProps>;

const TOAST_DIV_ID = "toastDiv";

const ChoiceType: FC<Props> = (props) => {
  const {
    qualifacationExam,
    applyType,
    district,
    graduationStatus,
    graduationYear,
    additionalType,
    setApplyType,
    setDistrict,
    setGraduationStatus,
    setGraduationYear,
    setAdditionalType,
    setAll,
    history,
  } = props;
  const modalController = useMemo(() => {
    return new ToastController(TOAST_DIV_ID);
  }, []);
  const isStateAble = useCallback(
    ({
      qualifacationExam,
      applyType,
      district,
      graduationStatus,
      graduationYear,
    }: MapStateToProps): boolean => {
      if (qualifacationExam) {
        return !(isTextAble(applyType) && isTextAble(district));
      }
      return !(
        isTextAble(graduationStatus) &&
        isTextAble(applyType) &&
        isTextAble(district) &&
        isTextAble(graduationYear)
      );
    },
    [isTextAble]
  );
  const goNextPage = useCallback(
    async (state: MapStateToProps) => {
      const isError = isStateAble(state);
      if (isError) {
        modalController.createNewToast("ERROR");
        return;
      }
      const request = typeStateToRequest(props);
      try {
        const response = await setFunc(USERTYPE_URL, request);
        history.push("/Info");
      } catch (error) {
        errorTypeCheck(error);
      }
    },
    [props, isStateAble]
  );
  const getTypeAndSetState = async () => {
    // const response = await getFunc<userTypeServerType>(USERTYPE_URL);
    const testResponse: userTypeServerType = {
      grade_type: "",
      is_daejeon: false,
      apply_type: "",
      additional_type: "NOT_APPLICABLE",
      graduate_year: "2021",
    };
    const state = typeResponseToState(testResponse);
    setAll(state);
  };
  const graduationStatusChangeHandler = useCallback((status: string) => {
    if (status === "ungraduated") {
      setGraduationYear("2021");
    } else {
      setGraduationYear("2020");
    }
    setGraduationStatus(status);
  }, []);
  useEffect(() => {
    getTypeAndSetState();
  }, []);
  return (
    <TypeDiv>
      <div id={TOAST_DIV_ID}></div>
      <TypeMain>
        <Title margin="80px">전형 구분 선택</Title>
        <li>
          <ChoiceTypeRow
            valueChangeHandler={setApplyType}
            applyType={applyType}
          />
          <ChoiceDistrict
            valueChangeHandler={setDistrict}
            district={district}
          />
          <GraduationStatus
            valueChangeHandler={graduationStatusChangeHandler}
            graduationStatus={graduationStatus}
          />
          {graduationStatus !== "graduated" ? (
            ""
          ) : (
            <>
              <GraduationYear
                describe="*졸업자의 경우 졸업연도를 선택해주세요"
                valueChangeHandler={setGraduationYear}
                graduationYear={graduationYear}
              />
            </>
          )}
          <Specialty
            describe="*해당하는 특기사항에 체크해주세요"
            additionalType={additionalType}
            additionalTypeChange={setAdditionalType}
          />
        </li>
        <DefaultlNavigation
          page="choiceType"
          currentPageClickHandler={() => {
            history.push("/");
          }}
          nextPageClickHandler={() => {
            goNextPage({
              qualifacationExam,
              applyType,
              district,
              graduationStatus,
              graduationYear,
              additionalType,
            });
          }}
        />
      </TypeMain>
    </TypeDiv>
  );
};

export default withRouter(ChoiceType);
