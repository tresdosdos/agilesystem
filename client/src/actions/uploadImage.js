import {store} from '../App';
import requestAPI from '../services/requestAPI';

export const uploadImage = (e) => (dispatch) => {
    const fileName = e.target.files[0].name;
    const fileFormat = e.target.files[0].name.slice(fileName.length-3, fileName.length);
    console.log(fileFormat);
    const formats  = ['JPG', 'jpg', 'png', 'bmp', 'pcx', 'jpeg', 'JPEG', 'gif'];
    let checker = 0;;
    formats.forEach((element) => {
        if (fileFormat === element) checker=checker + 1;
    });
    if (checker !== 1)
        return;
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