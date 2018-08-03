import React from 'react';
import { connect } from 'react-redux';
import * as Status from '../Status';
import MDReactComponent from 'markdown-react-js';
import h2m from 'h2m';

//傻瓜组件 status是显示状态，result是内容
const Output = ({status,result}) => {
    switch (status){
        case Status.Loading :{
            return <div>解析并载入中</div>;
        }
        case Status.Success:{
            const md = h2m(result);
            return (
                md
            )
        }
        case Status.Failure :{
            return <div>载入失败</div>
        }
        default:{
            throw new Error('unexcepted status '+status);
        }
    }
};


// props绑定state
const mapStateToProps = (state) => {
    return {
        status: state.status,
        result: state.result
    }
};

export default connect(mapStateToProps)(Output);