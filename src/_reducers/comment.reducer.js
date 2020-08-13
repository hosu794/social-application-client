import { commentConstants } from "../_constants";
import FormItemInput from "antd/lib/form/FormItemInput";

const initialState = {
  page: 0,
  loading: false,
  currentComment: {
    body: "",
    id: null,
    createdBy: {},
  },
  content: [],
  size: 0,
  totalPages: 0,
  error: null,
  updating: false,
  creating: false,
  loaded: false,
};

export function comment(state = initialState, action) {
  switch (action.type) {
    case commentConstants.GET_ALL_COMMENTS_REQUEST:
    case commentConstants.GET_COMMENTS_BY_CREATED_BY_REQUEST:
    case commentConstants.GET_COMMENTS_BY_USER_ID_REQUEST:
    case commentConstants.GET_COMMENTS_BY_STORY_ID_REQUEST:
    case commentConstants.GET_COMMENT_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case commentConstants.GET_ALL_COMMENTS_SUCCESS:
    case commentConstants.GET_COMMENTS_BY_CREATED_BY_SUCCESS:
    case commentConstants.GET_COMMENTS_BY_STORY_ID_SUCCESS:
    case commentConstants.GET_COMMENTS_BY_USER_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        page: action.response.page,
        content: action.response.content,
        size: action.response.size,
        totalPages: action.response.totalPages,
        loaded: true,
      };
    case commentConstants.GET_ALL_COMMENTS_FAILURE:
    case commentConstants.GET_COMMENTS_BY_CREATED_BY_FAILURE:
    case commentConstants.GET_COMMENTS_BY_STORY_ID_FAILURE:
    case commentConstants.GET_COMMENTS_BY_USER_ID_FAILURE:
    case commentConstants.GET_COMMENT_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        loaded: false,
      };
    case commentConstants.GET_COMMENT_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        currentComment: action.response,
        loaded: true,
      };
    case commentConstants.CREATE_COMMENT_REQUEST:
      return {
        ...state,
        creating: true,
      };
    case commentConstants.CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        content: [...state.content, action.response],
        creating: false,
      };
    case commentConstants.CREATE_COMMENT_FAILURE:
      return {
        ...state,
        creating: false,
      };
    case commentConstants.UPDATE_COMMENT_REQUEST:
      return {
        ...state,
        updating: true,
      };
    case commentConstants.UPDATE_COMMENT_SUCCESS:
      return {
        ...state,
        updating: false,
        content: state.content.map((item) =>
          item.id !== action.response.id ? item : action.response
        ),
      };
    case commentConstants.UPDATE_COMMENT_FAILURE:
      return {
        ...state,
        updating: false,
        error: action.error,
      };
    case commentConstants.DELETE_COMMENT_REQUEST:
      return {
        ...state,
        deleting: true,
      };
    case commentConstants.DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        deleting: false,
        content: state.content.filter((item) => item.id !== action.response),
      };
    case commentConstants.DELETE_COMMENT_FAILURE:
      return {
        ...state,
        deleting: false,
        error: action.error,
      };
    case commentConstants.CLEAR_COMMENTS:
      return {
        ...state,
        content: [],
      };
    default:
      return state;
  }
}
