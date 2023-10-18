import { BaseResponse } from '../../../common';
import { managerError } from '../../../utils';
import { IUserResponse } from '../types';

export const RegisterAdapter = (
  resp: BaseResponse<IUserResponse | undefined>,
): BaseResponse<IUserResponse | undefined> => {
  const { data, response } = resp;

  const { code, message, status, success } = response;

  if (!success) {
    return managerError(resp);
  }

  const {
    id,
    age,
    email,
    firstName,
    lastName,
    username,
    isActive,
    isBlocked,
    timeBlocked,
    createdAt,
    deletedAt,
    updatedAt,
  } = data as IUserResponse;

  return {
    data: {
      id,
      email,
      username,
      age,
      firstName,
      lastName,
      isActive,
      isBlocked,
      timeBlocked,
      createdAt,
      deletedAt,
      updatedAt,
    },
    response: {
      status,
      success,
      code,
      message,
    },
  };
};
