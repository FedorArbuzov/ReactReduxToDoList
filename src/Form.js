import React, {Component} from 'react'

const Form = props => (
    <form onSubmit={props.onSubmit}>
        <input onChange={props.onChange} />
        <button>Submit</button>
    </form>
);

export default Form;