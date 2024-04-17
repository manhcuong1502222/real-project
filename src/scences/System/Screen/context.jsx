import React, { Component, createContext } from 'react';
import { Data } from './appData';

const ProductContext = createContext();

export default class ContextProvider extends Component {
    state = {
        data: Data
    }

    render() {
        return (
            <ProductContext.Provider value={this.state.data}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

export { ProductContext };
