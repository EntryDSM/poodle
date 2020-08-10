type ErrorType = {
  message: string;
  response: {
    status: number;
  };
};

export default ErrorType;

export const errorInitialState = {
  message: '',
  response: {
    status: 0,
  },
};
