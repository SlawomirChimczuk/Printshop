import {DISPLAY_FORM} from './types'

export const showFormHandle = () => {
    return (dispatch) => {
        dispatch({
            type: DISPLAY_FORM
        })
    }
} 