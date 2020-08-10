type ErrorType = {
  message: string;
  response: {
    status: Number;
  };
};

export default ErrorType;

export const errorInitialState = {
  message: '',
  response: {
    status: 0,
  },
};
