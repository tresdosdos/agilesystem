import {store} from '../App';
import requestAPI from '../services/requestAPI';

export const uploadImage = (e) => (dispatch) => {
    const formData = new FormData();
    formData.append('photo', e.target.files[0]);
    formData.append('userName', store.getState().auth.name);
    requestAPI.formPost('/avatar', formData)
        .then((response) => response.json())
        .then((res) => {
            dispatch({
                type: 'CHANGE_AVATAR',
                img: res.img
            });
        });
};