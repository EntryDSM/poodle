import client from './client';
import { Schedule } from '@/core/redux/actions/Main';

export const getSchedules = () => client.get<Schedule[]>('/schedules');
