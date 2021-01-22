import {
  IMAGE_ERROR,
  UPLOAD_IMAGE,
  VIEW_ALL_IMAGES,
  VIEW_IMAGE,
} from '../actions/types';

const initialState = { image: {}, images: [], error: {}, loading: true };

export default function image(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case UPLOAD_IMAGE:
      return {
        ...state,
        images: [payload, ...state.images],
        image: payload,
        loading: false,
      };
    case VIEW_ALL_IMAGES:
      return {
        ...state,
        images: payload,
        loading: false,
      };
    case VIEW_IMAGE:
      return {
        ...state,
        image: payload,
        loading: false,
      };
    case IMAGE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
