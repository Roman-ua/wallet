export interface authStoreInterface {
  userData: object;
  authError: string;
  setUserData: () => never;
  setAuthError: () => never;
}

export interface User {
  email: string;
  firstname: string;
  lastname: string;
}

export interface Error {
  error: string;
}
