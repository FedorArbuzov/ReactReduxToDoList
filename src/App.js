import React, { Component } from 'react';
import List from './List';
import Form from './Form';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            items: []
        };
    }

    onChange = (event) => {
        this.setState({ term: term + 'hello ' });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            term: '',
            items: [...this.state.items, this.state.term]
        });
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.onSubmit} onCange={this.onChange}/>
                <List items={this.state.items} />
            </div>
        );
    }
}
