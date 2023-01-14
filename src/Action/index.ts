export type Action<T = any> = {
  type: string;
  payload: T;
};
export type ActionCreater<T = undefined> = (...args: any) => Action;
