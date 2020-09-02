import {
  AdditionalType,
  GraduationStatusType,
} from '@/core/redux/actions/ChoiceType';
import { SchoolType } from '@/core/redux/actions/SearchSchool';

export interface gradeServerType {
  volanteer_time: number | null;
  full_cut_count: number | null;
  period_cut_count: number | null;
  late_count: number | null;
  early_leave_count: number | null;
  korean: string | null;
  social: string | null;
  history: string | null;
  math: string | null;
  science: string | null;
  tech_and_home: string | null;
  english: string | null;
  ged_average_score: number | null;
}

export interface userTypeServerType {
  grade_type: string | null;
  apply_type: string | null;
  is_daejeon: boolean | null;
  additional_type: AdditionalType | null;
  graduated_date: string | null;
  ged_pass_date: string | null;
}

export interface userTypeResponseType {
  grade_type: string | null;
  apply_type: string | null;
  is_daejeon: boolean | null;
  additional_type: AdditionalType | null;
  graduated_date: string | null;
  ged_pass_date: string | null;
}

export interface userInfoServerType {
  name: string | null;
  sex: string | null;
  birth_date: string | null;
  student_number: string | null;
  school_name: string | null;
  parent_name: string | null;
  school_tel: string | null;
  applicant_tel: string | null;
  parent_tel: string | null;
  address: string | null;
  photo: string | null;
  post_code: string | null;
  detail_address: string | null;
}

export interface userInfoResponseType {
  name: string | null;
  sex: string | null;
  birth_date: string | null;
  student_number: string | null;
  school_name: string | null;
  parent_name: string | null;
  school_tel: string | null;
  applicant_tel: string | null;
  parent_tel: string | null;
  address: string | null;
  photo: string | null;
  post_code: string | null;
  detail_address: string | null;
  grade_type: GraduationStatusType | null;
}

export interface selfIntroductionServerType {
  self_introduction: string;
}

export interface selfIntroductionRequestType {
  content: string;
}

export interface studyPlanServerType {
  study_plan: string;
}

export interface studyPlanRequestType {
  content: string;
}

export interface SubjectsType {
  korean: string | null;
  society: string | null;
  history: string | null;
  math: string | null;
  science: string | null;
  tech: string | null;
  english: string | null;
}

export interface gedInfoServerType {
  applicant_tel: string | null;
  parent_tel: string | null;
  address: string | null;
  photo: string | null;
  post_code: string | null;
  parent_name: string | null;
  name: string | null;
  sex: string | null;
  birth_date: string | null;
}

export interface gedGradeServerType {
  ged_average_score: number | null;
}

export interface kakaoSearchedAddressType {
  road_address: {
    region_1depth_name: string;
    region_2depth_name: string;
    region_3depth_name: string;
    address_name: string;
    building_name: string;
    zone_no: string;
  };
  address: {
    address_name: string;
    region_1depth_name: string;
    region_2depth_name: string;
    region_3depth_name: string;
  };
}

export interface searchSchoolResponseType {
  content: SchoolType[];
}

export interface submitType {
  is_final_submit: boolean;
}

export interface previewType {}
