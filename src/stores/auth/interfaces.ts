export interface authStoreInterface {
  userData: object;
  authError: string;
  setUserData: () => {};
  setAuthError: () => {};
}

export interface User {
  email: string;
  firstname: string;
  lastname: string;
}

export interface Error {
  error: string;
}
