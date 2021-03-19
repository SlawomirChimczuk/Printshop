import {DISPLAY_FORM} from './types'

export const showFormHandle = () => {
    return (dispatch) => {
        console.log('działa')
        dispatch({
            type: DISPLAY_FORM
        })
    }
} 