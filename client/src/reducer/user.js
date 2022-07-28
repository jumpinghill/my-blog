import produce from "immer";
// immer의 좋은점은 자동으로 state의 불변성을 지켜준다.
const initialState = {
  info: null,
  loginLoading: false,
  loginDone: false,
  loginError: null,

  logoutLoading: false,
  logoutDone: false,
  logoutError: null,

  signinLoading: false,
  signinDone: false,
  signinError: null,
};

export const dummyUser = (data) => ({
  ...data,
  nickname: "주형님",
  id: 1,
  Posts: [{ id: 1 }],
});

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

export const SIGN_IN_REQUEST = "SIGN_IN_REQUEST";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_FAILURE = "SIGN_IN_FAILURE";

export const SIGN_IN_DONE_REQUEST = "SIGN_IN_DONE_REQUEST";

// return과 관련이 있음.
// return이 생략되어있는거임(그래서 return이 없어도 반환이 되는거임 실제로).
// return을 쓰려면 중괄호를 해줘야함.
const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOG_IN_REQUEST:
        draft.loginLoading = true;
        draft.loginDone = false;
        draft.loginError = null;
        break;
      case LOG_IN_SUCCESS:
        draft.loginLoading = false;
        draft.loginDone = true;
        draft.info = action.data;
        break;
      case LOG_IN_FAILURE:
        draft.loginLoading = false;
        draft.loginError = action.error;
        break;

      case LOG_OUT_REQUEST:
        draft.logoutLoading = true;
        draft.logoutDone = false;
        draft.logoutError = null;
        break;
      case LOG_OUT_SUCCESS:
        draft.logoutLoading = false;
        draft.logoutDone = true;
        draft.info = null;
        break;
      case LOG_OUT_FAILURE:
        draft.logoutLoading = false;
        draft.logoutError = action.error;
        break;

      case SIGN_IN_REQUEST:
        draft.signinLoading = true;
        draft.signinDone = false;
        draft.signinError = null;
        break;
      case SIGN_IN_SUCCESS:
        draft.signinLoading = false;
        draft.signinDone = true;
        draft.info = null;
        break;
      case SIGN_IN_FAILURE:
        draft.signinLoading = false;
        draft.signinError = action.error;
        break;

      default:
        return state;
    }
  });
// const fn1 = (msg) => console.log(msg);

export default reducer;
