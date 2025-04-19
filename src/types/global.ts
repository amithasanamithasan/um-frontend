/* eslint-disable @typescript-eslint/no-explicit-any */
export type TError = {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
};
export type TRessponse = {
  data?: any;
  error?: TError;
};
