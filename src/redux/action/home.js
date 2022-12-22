/* eslint-disable handle-callback-err */
/* eslint-disable prettier/prettier */
import Axios from 'axios';
import {API_HOST} from '../../config';
import {showMessage} from '../../utils';
import {setLoading} from './global';

export const getProduct = () => dispatch => {
  dispatch(setLoading(true));
    Axios.get(`${API_HOST.url}/product`)
      .then(res => {
        dispatch({type: 'SET_PRODUCT', value: res.data});
        dispatch(setLoading(false));
      })
      .catch(err => {
          showMessage(`${err?.response?.data}`);
          dispatch(setLoading(false));
      });
};

export const deleteProduct = (id) => dispatch => {
  console.log('id', id)
  dispatch(setLoading(true));
  Axios.delete(`${API_HOST.url}/product/${id}`)
    .then(res => {
      dispatch({type: 'IS_DELETE', value: res.data});
      showMessage('Produk berhasil dihapus', 'success');
      dispatch(setLoading(false));
    })
    .catch(err => {
        showMessage(`${err?.response?.data}`);
        dispatch(setLoading(false));
      });
};

export const addProduct = (params, navigation) => dispact => {
  dispact(setLoading(true));
    Axios.post(`${API_HOST.url}/product`, params,)
      .then(res => {
        dispact(setLoading(false));
        dispact({type: 'IS_SAVE', value: res.data});
        showMessage('Tambah Produk Berhasil', 'success');
        navigation.goBack();
      })
      .catch(err => {
        dispact(setLoading(false));
        showMessage('Tambah Produk Gagal', 'failed');
      });
}


export const editProduct = (id, params, navigation) => dispact => {
  dispact(setLoading(true));
    Axios.put(`${API_HOST.url}/product/${id}`, params,)
      .then(res => {
        dispact(setLoading(false));
        dispact({type: 'IS_UPDATE', value: res.data});
        showMessage('Tambah Produk Diubah', 'success');
        navigation.goBack();
      })
      .catch(err => {
        dispact(setLoading(false));
        showMessage('Ubah Produk Gagal', 'failed');
      });
}
