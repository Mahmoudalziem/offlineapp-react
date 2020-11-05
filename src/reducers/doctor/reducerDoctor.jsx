const INITIAL_STATE = {
    doctor: {}
}

const reducerDoctor = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GETDOCTOR':
            return {
                ...state,
                doctor: action.payload.data
            }
        default:
            return state
    }
}

export default reducerDoctor;