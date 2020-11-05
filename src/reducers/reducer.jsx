import { combineReducers } from 'redux'
import reducerStudent from './student/reducerStudent'
import reducerDoctor from './doctor/reducerDoctor'
import reducerInitial from './initial/initial';
import reducerManage from './manage/reducerManage';
import reducerLecture from './lecture/reducerLecture';

export default combineReducers({
    authorization:reducerInitial,
    student: reducerStudent,
    doctor: reducerDoctor,
    manage: reducerManage,
    lecture:reducerLecture
});