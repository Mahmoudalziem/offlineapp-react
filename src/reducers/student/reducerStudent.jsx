const INITIAL_STATE = {
    
}

const reducerStudent = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GETSTUDENT':
            return action.payload
        default:
            return state
    }
}

export default reducerStudent;