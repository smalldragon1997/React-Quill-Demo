import * as Status from './Status';
import * as ActionTypes from './ActionTypes';

const initState = {
    result:'', //初始化的文本内容为空
    status: Status.Success // ouutput的初始状态为载入成功状态
};

//初始化status为载入状态
export default (state = initState, action) => {
    switch (action.type) {
        case ActionTypes.inputStart: {
            //开始转换
            return {status: Status.Loading};
        }
        case ActionTypes.inputSuccess: {
            //转换并读取成功
            return { ...state, status: Status.Success, result:action.result};
        }
        case ActionTypes.inputFailure: {
            //转换失败
            return { ...state, status: Status.Failure, error: action.error};
        }
        default: return state;
    }
}