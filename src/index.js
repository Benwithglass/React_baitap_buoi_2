import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './BaiTapGlasses/Header';
import Body from './BaiTapGlasses/Body';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Header/>
    <Body/>
  </React.StrictMode>
);

