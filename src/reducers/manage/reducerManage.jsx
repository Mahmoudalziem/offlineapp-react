const INITIAL_STATE = {
    manage: {}
}

const reducerManage = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GETMANAGE':
            return {
                ...state,
                manage: action.payload.data
            }
        default:
            return state
    }
}

export default reducerManage;