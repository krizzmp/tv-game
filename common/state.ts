import * as _ from 'lodash'

function f<T extends { [a: string]: (state: State, payload: any) => State }>(
  o: T
): {
  actions: {
    [K in keyof T]: (
      p: Parameters<T[K]>[1]
    ) => { type: K; payload: Parameters<T[K]>[1] }
  };
  reducers: { [K in keyof T]: T[K] };
} {
  return {
    actions: _.mapValues(o, (v, k) => (p: any) => ({
      type: k,
      payload: p
    })) as any,
    reducers: o
  };
}

export interface State {
  test: string;
}
export const actionReducers = f({
  g(state, d: number) {
    return { ...state, test: state.test + d.toString() };
  }
});
export const initialState = { test: "init" }
export type action = ReturnType<typeof actionReducers.actions[keyof typeof actionReducers.actions]>;
