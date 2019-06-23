'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import './search.less';
import pic from './images/pic.png';
import {a} from './tree-shaking';

class Search extends React.Component{

    constructor(){
        super(...arguments);

        this.state={
            Text:null
        };
    }

    loadComponent() {
        import ('./text.js').then((Text)=>{
            this.setState({
                Text:Text.default
            });
        })
    }

    render(){
        const { Text } = this.state;
        return <div className="search-text">
            {
                Text ? <Text /> : null
            }
            test watch for HostModuleReplacementPlugin
        <img src= {pic} onClick={this.loadComponent.bind(this)}/>
        </div>
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
);