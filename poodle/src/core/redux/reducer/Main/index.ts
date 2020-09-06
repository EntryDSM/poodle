import {
  SCHEDULES_SUCCESS,
  SCHEDULES_FAILURE,
  Schedule,
  MainAction,
} from '../../actions/Main';
import ErrorType, { errorInitialState } from '@/lib/utils/type';

type MainState = {
  schedules: Schedule[];
  error: ErrorType;
};

const initialState: MainState = {
  schedules: [],
  error: errorInitialState,
};

export default function main(
  state: MainState = initialState,
  action: MainAction,
) {
  switch (action.type) {
    case SCHEDULES_SUCCESS:
      const newSortedSchedules: Schedule[] = [];
      action.payload.forEach(schedule => {
        switch (schedule.id) {
          case 'application':
            newSortedSchedules[0] = schedule;
            break;
          case 'first_apply':
            newSortedSchedules[1] = schedule;
            break;
          case 'interview':
            newSortedSchedules[2] = schedule;
            break;
          case 'notice':
            newSortedSchedules[3] = schedule;
            break;
        }
      });
      return {
        ...state,
        schedules: newSortedSchedules,
      };
    case SCHEDULES_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
