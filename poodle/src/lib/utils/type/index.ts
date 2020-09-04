type ErrorType = {
  message: string;
  status: number;
};

export default ErrorType;

export const errorInitialState = {
  message: '',
  status: 0,
};
