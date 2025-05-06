import { BaseQueryApi } from "@reduxjs/toolkit/query";

export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const genders = ["Male", "Female", "Other"];

export const bloogGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export const monthOptions = monthNames.map((item) => ({
  value: item,
  label: item,
}));

export const genderOptions = genders.map((item) => ({
  value: item.toLowerCase(),
  label: item,
}));

export const bloodGroupOptions = bloogGroups.map((item) => ({
  value: item,
  label: item,
}));

export type TError = {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
};
export type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
};
export type TRessponse<T> = {
  data?: T;
  error?: TError;
  meta?: TMeta;
  success: boolean;
  message: string;
};
export type TRessponseRedux<T> = TRessponse<T> & BaseQueryApi;
export type TQueryParams = {
  name: string;
  value: boolean | React.Key;
};
