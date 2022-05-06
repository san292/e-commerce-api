import { publicRequest } from '../requestmethod';
import { loginFailure, loginStart, loginSucces } from './userRedux';

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post('/auth/login', user);
    // const res = await axios.post('http://localhost:5000/api/auth/login', user);
    console.log('res login-------------->', res.data);
    dispatch(loginSucces(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
