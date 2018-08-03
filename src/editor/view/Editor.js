import React from 'react';
import Input from './Input';
import Output from './Output';
import OutputHtml from './OutputHtml';
import {Row,Col } from 'antd';

export default ()=>(
    <div>
        <Row type="flex" justify="center">
            <Col span={5}>
                <div><h1>React-Quill Markdown</h1></div>
                <Input/>
            </Col>
            <Col span={5}>
                <div><h1>html预览窗口</h1></div>
                <Output/>
            </Col>
            <Col span={5}>
                <div><h1>md预览窗口</h1></div>
                <OutputHtml/>
            </Col>
        </Row>
    </div>
)