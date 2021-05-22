import * as api from '../../api';
import { AUTH } from '../constants/actionTypes';

export const signIn = (formData, router) => async (dispatch) => {
	try {
		const {data} = await api.singin(formData)
		dispatch({type: AUTH, data})
		router.push('/');
	} catch (error) {
		console.log(error);
	}
};

export const signUp = (formData, router) => async (dispatch) => {
	try {
		const {data} = await api.singup(formData)
		dispatch({type: AUTH, data})
		router.push('/');
	} catch (error) {
		console.log(error);
	}
};
