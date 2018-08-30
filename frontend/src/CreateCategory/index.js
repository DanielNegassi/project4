import React, { Component } from 'react';

class CreateCategory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            photo_url: ''
        }
    }
    updateCategory = (e) => {
        this.setState({[e.currentTarget.name]: e.currentTarget.value});
    }

    render() {
        console.log(this.props, ' this is props');

        return (
          <div>
            <form onSubmit={this.props.addCategory.bind(this, this.state)}>
             <h1>Enter your new category</h1>
                <label>
                    Name:
                    <input type="text" name="name"  onChange={this.updateCategory}/>
                </label>
                <br/>
                <label>
                    Photo_url:
                    <input name="photo_url" onChange={this.updateCategory}/>
                </label>
                <input type="submit"/>
            </form>
          </div>
        )
    }
}

export default CreateCategory;
