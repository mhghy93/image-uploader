import {
  UPLOAD_IMAGE,
  VIEW_IMAGE,
  VIEW_ALL_IMAGES,
  IMAGE_ERROR,
} from './types';
import axios from 'axios';

export const uploadImage = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/image/upload');

    dispatch({
      type: UPLOAD_IMAGE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: IMAGE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const showAllImages = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/image/all');

    dispatch({
      type: VIEW_ALL_IMAGES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: IMAGE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const showImage = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/image/${id}`);

    dispatch({
      type: VIEW_IMAGE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: IMAGE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
