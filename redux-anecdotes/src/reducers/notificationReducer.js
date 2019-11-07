const initialMessage = 'This is notification';

const initialState = {
    message: initialMessage,
    show: false
}

const notificationReducer = (state = initialState, action) => {
    console.log('Notification reducer got action: ',action)
    switch (action.type) {
        case 'SHOW':
            return {
                message: action.data.message,
                show: true
            }
        case 'HIDE':
            return {
                message: action.data.message,
                show: false
            }
        default:
            return state;
    }
}

export const showNotification = (message) => {
    return {
        type: 'SHOW',
        data:
        {
            message: message,
            show: true
        }
    }
}

export const hideNotification = () => {
    return {
        type:'HIDE',
        data: {
            message: '',
            show:false
        }
    }
}

export const setNotification = (message, time) => {
    return async dispatch => {
        dispatch({
            type:'SHOW',
            data: {
                message:message,
                show: true
            }
        })
        setTimeout(() => {
            dispatch({
                type:'HIDE',
                data:{
                    message:'',
                    show:false
                }
            })
        },time*1000)
    }
}

export default notificationReducer