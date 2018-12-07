import React, { Component } from 'react';
import store from '../store';
import moment from 'moment';

class List extends Component {
    constructor() {
        super();
        this.state = {
            list: []
        };
        store.subscribe(() => {
            this.setState({
                list: store.getState().list
            });
        });
    }
    render() {
        const now = new Date();
        const formatted = moment(now).format('LLL');
        const { list } = this.state;
        return(
            <div className="ListContainer">
                <p>{formatted}</p>
                <ul>
                    {
                        list.map((e, i) => {
                            return <li key={`listItem${i}`}>{e.name}</li>
                        })
                    }
                    <li>Items empty list</li>
                </ul>
            </div>
        )
    }
}

export default List;