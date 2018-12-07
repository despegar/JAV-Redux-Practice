import React, { Component } from 'react';
import store from '../store';

class Items extends Component {
    render() {
        return(
            <div className="itemsContainer">
                <button onClick={ () => this.addToList({name: 'new Item', description: 'Description'})}>Add New Item</button>
            </div>
        )
    }

    addToList(item) {
        store.dispatch({
            type: 'ADD_TO_LIST',
            item
        });
    }
}

export default Items;