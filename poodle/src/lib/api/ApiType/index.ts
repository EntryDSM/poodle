import { AdditionalType } from '@/core/redux/actions/ChoiceType';
import { SchoolType } from '@/core/redux/actions/SearchSchool';

export interface gradeServerType {
  volanteer_time: number;
  full_cut_count: number;
  period_cut_count: number;
  late_count: number;
  early_leave_count: number;
  korean: string;
  social: string;
  history: string;
  math: string;
  science: string;
  tech_and_home: string;
  english: string;
  ged_average_score: number;
}

export interface userTypeServerType {
  grade_type: string;
  apply_type: string;
  is_daejeon: boolean;
  additional_type: AdditionalType;
  graduated_date: string;
}

export interface gedUserTypeServerType {
  grade_type: string;
  apply_type: string;
  is_daejeon: boolean;
  additional_type: AdditionalType;
  ged_pass_date: string;
}

export interface userTypeResponseType {
  grade_type: string;
  apply_type: string;
  is_daejeon: boolean;
  additional_type: AdditionalType;
  graduated_date: string;
  ged_pass_date: string;
}

export interface userInfoServerType {
  name: string;
  sex: string;
  birth_date: string;
  student_number: string;
  school_name: string;
  parent_name: string;
  school_tel: string;
  applicant_tel: string;
  parent_tel: string;
  address: string;
  photo: string;
  post_code: string;
  detail_address: string;
}

export interface selfIntroductionServerType {
  self_introduction: string;
}

export interface studyPlanServerType {
  study_plan: string;
}

export interface SubjectsType {
  korean: string;
  society: string;
  history: string;
  math: string;
  science: string;
  tech: string;
  english: string;
}

export interface gedInfoServerType {
  applicant_tel: string;
  parent_tel: string;
  address: string;
  photo: string;
  post_code: string;
  parent_name: string;
  name: string;
  sex: string;
  birth_date: string;
}

export interface gedGradeServerType {
  ged_average_score: number;
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
