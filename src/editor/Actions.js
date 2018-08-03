import * as ActionType from  './ActionTypes';

export const inputStart = () => ({
    type : ActionType.inputStart
});

export const inputSuccess = (result) => ({
    type : ActionType.inputSuccess,
    result
});

export const inputFailure = (error) => ({
    type : ActionType.inputFailure,
    error
});

export const inputUpdating = (content) => ({
    type : ActionType.inputUpdating,
    content
});
