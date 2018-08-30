import React, { Component } from 'react';

class CreateItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            photo_url: '',
            description:'',
            dimensions:'',
            weight:'',
            price:'',
        }
    }
    updateItem = (e) => {
        this.setState({[e.currentTarget.name]: e.currentTarget.value});
    }

    render() {
        console.log(this.props, ' this is props');

        return (
          <div>
            <form onSubmit={this.props.addItem.bind(this, this.state)}>
             <h1>Enter your new item</h1>
                <label>
                    Name:
                    <input type="text" name="name"  onChange={this.updateItem}/>
                </label>
                <br/>
                <label>
                    Photo_url:
                    <input name="photo_url" onChange={this.updateItem}/>
                </label>
                <br/>
                <label>
                   Description:
                  <input type="text" name="description" onChange={this.updateItem}/>
                </label>
                <label>
                    Dimensions:
                    <input name="dimensions" onChange={this.updateItem}/>
                </label>
                <br/>
                <label>
                    Weight:
                    <input name="weight" placeholder='lbs only' onChange={this.updateItem}/>
                </label>
                <br/>
                <label>
                  Price:
                    <input name="price" onChange={this.updateItem}/>
                </label>
                <br/>
                <label>
                   Category:
                    <input name="category" onChange={this.updateItem}/>
                </label>
                <input type="submit"/>
            </form>
          </div>
        )
    }
}

export default CreateItem;
