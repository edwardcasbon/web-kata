import React, { Component } from 'react'

class FilterForm extends Component {
    render() {
        return (
            <form onChange={this.props.onChange}>
                <label htmlFor="filter" name="filter">Filter: </label>
                <input type="text" name="filter"/>
            </form>
        )
    }
}

export default FilterForm