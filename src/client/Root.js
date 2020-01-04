import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'shared/App';

// 리덕스 사용시 Provider를 통해 프로젝트에 리덕스 연결
const Root = () => (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)

export default Root;