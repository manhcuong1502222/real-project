import React, { Component } from 'react';
import { Data } from './appData';


const ProductContext = React.createContext();

export default class context extends Component {

    state = {
        data: Data
    }

    render() {
        console.log(this.state.data);
        return (
            <div>

            </div>
        );
    }
}

