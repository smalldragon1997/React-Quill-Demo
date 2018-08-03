import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css';
import React from 'react';
import {connect} from 'react-redux';
import * as Actions from '../Actions';


const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
];
const modules = {
    toolbar: [
        [{'header': [1, 2, 3,false]}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
        ['clean']
    ],
};

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: ''}; // 初始化组件
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value,delta) {
        this.props.onTextChange(value); // 在action传递新的text的值
    }

    render() {
        return (
            <div>
                <ReactQuill value={this.state.text}
                            onChange={this.handleChange}
                            modules={modules}
                            formats={formats}
                            placeholder="Please Input"/>
            </div>
        )
    }
}

// props绑定dispatch
const mapDispatchToProps = (dispatch) => {
    return {
        onTextChange: (content) => {
            dispatch(Actions.inputUpdating(content));
        }
    }
};


export default connect(null, mapDispatchToProps)(Input);