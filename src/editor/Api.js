import axios from 'axios';

export const uploadContent = (content) => {
    return new Promise(function (resolve, reject) {
        axios.post('/uploadContent', {
            content: content,
        }).then(function (res) {
            // 正确返回信息 将返回信息传回
            resolve(res);
        }).catch(function (error) {
            // 打印错误信息
            console.log(error);
            reject();
        });
    });
};