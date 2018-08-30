import React, {Component} from 'react';

class Items extends Component {

  render() {
    return (
      <div>
      {
        this.props.Items.map(item => (
          <div key={item.id}>
          <h1>{item.name}</h1>
          <img src={item.photo_url} alt=""/>
          <h4>Description: {item.description}</h4>
          <h4>Dimensions: {item.dimensions}</h4>
          <h4>Weight:{item.weight}</h4>
          <h4>Price:{item.price}</h4>
          <h4>Category:{item.category}</h4>
          <button onClick={props.deleteItem.bind(null, item._id)}>Delete</button>
          <button onClick={props.showItemModal.bind(null, item._id)}>Edit</button>
        </div>))
      }
    </div>
   )
  }
}

export default Items;
