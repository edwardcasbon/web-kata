import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            description: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.onSubmit(this.state);
    }

    render() {
        return (<form onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <input type="text" name="description" value={this.state.description} onChange={this.handleChange}/>
            </div>
            <input type="submit" value="Submit"/>
        </form>)
    }
}

export default Form