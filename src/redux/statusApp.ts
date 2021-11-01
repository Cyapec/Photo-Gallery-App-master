export type StatusApp = {
    isLoading: boolean;
  };
  
  export type ActionStatusApp = ReturnType<typeof setStatus>;
  
  const initialState: StatusApp = {
    isLoading: false,
  };
  
  export const setStatus = (isLoad: boolean) =>
    ({ type: "SET-LOADING", isLoad } as const);
  
  export const statusAppRedcer = (
    state = initialState,
    action: ActionStatusApp
  ): StatusApp => {
    switch (action.type) {
      case "SET-LOADING": {
        return { ...state, isLoading: action.isLoad };
      }
      default:
        return state;
    }
  };
  