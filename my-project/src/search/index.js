'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import './search.less';
import pic from './images/pic.png';

class Search extends React.Component{
    render(){
        return <div className="search-text">
        test watch for HostModuleReplacementPlugin
        <img src= {pic}/>
        </div>
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
);