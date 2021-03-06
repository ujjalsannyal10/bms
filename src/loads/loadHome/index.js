import axios from 'axios';
import types from '../../action_types';

export default loadHome => dispatch => {
  dispatch({ type: types.LOAD_HOME_REQUEST, payload: {} });

  async function getUser() {
    try {
      const response = await axios.get('http://localhost:8080/studios/getStudioService/1');
      dispatch({
        type: types.LOAD_HOME_SUCCESS,
        payload: { data: { ...response.data, loadHome } },
      });
    } catch (error) {
      dispatch({
        type: types.LOAD_HOME_FAIL,
        payload: 'Error fetching message: ',
      });
    }
  }

  getUser();
};
