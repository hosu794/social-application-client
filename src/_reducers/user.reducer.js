import { userConstants, authConstants } from "../_constants";
import { userService } from "../_services";

const initialState = {
  stats: {
    lovesOnCreatedStory: null,
    storiesCreated: null,
    storiesLiked: null,
  },
  loadingUser: false,
  loadingStats: false,
  user: {
    id: null,
    username: null,
    name: null,
    avatarDownloadUri: null,
  },
};

export function user(state = {}, action) {
  switch (action.type) {
    case userConstants.GET_CURRENT_USER_REQUEST:
      return {
        loadingUser: true,
      };
    case userConstants.GET_CURRENT_USER_SUCCESS:
      return {
        loadedUser: true,
        user: action.user,
      };
    case userConstants.GET_CURRENT_USER_FAILURE:
      return {};
    case userConstants.CHECK_USER_AVAIBILITY_REQUEST:
      return {
        ...state,
        checkingUsername: true,
      };
    case userConstants.CHECK_USER_AVAIBILITY_SUCCESS:
      return {
        ...state,
        checkingUsername: false,
        checkedUsername: true,
        isUsernameAvailable: action.response,
      };
    case userConstants.CHECK_USER_AVAIBILITY_FAILURE:
      return {
        ...state,
        checkingUsername: false,
      };
    case userConstants.CHECK_EMAIL_AVAIBILITY_FAILURE:
      return {
        ...state,
        checkingEmail: false,
      };
    case userConstants.CHECK_EMAIL_AVAIBILTY_REQUEST:
      return {
        ...state,
        checkingEmail: true,
      };
    case userConstants.CHECK_EMAIL_AVAIBILITY_SUCCESS:
      return {
        ...state,
        checkingEmail: false,
        checkedEmail: true,
        isEmailAvailable: action.response,
      };
    case userConstants.CHECK_LOVE_AVAIBILITY_REQUEST: {
      return {
        ...state,
        checkingLove: true,
      };
    }
    case userConstants.CHECK_LOVE_AVAIBILITY_SUCCESS: {
      return {
        ...state,
        checkingLove: false,
        isUserLovedStory: action.response,
      };
    }
    case userConstants.CHECK_LOVE_AVAIBILITY_FAILURE: {
      return {
        ...state,
        checkingLove: false,
      };
    }
    case userConstants.GET_USER_STATS_REQUEST: {
      return {
        ...state,
        loadingStats: true,
      };
    }
    case userConstants.GET_USER_STATS_SUCCESS: {
      return {
        ...state,
        loadingStats: false,
        loadedStats: true,
        stats: action.response,
      };
    }
    case userConstants.GET_USER_STATS_FAILURE: {
      return {
        ...state,
        loadingStats: false,
        loadedStats: false,
        stats: action.response,
      };
    }
    default:
      return state;
  }
}
