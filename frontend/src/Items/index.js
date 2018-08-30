import React from 'react';


const Items = (props) => {
  let itemsList;
 if(props.items === undefined) {

 } else {
console.log('this is props for Categories',props)
itemsList = props.items.map((item,i) => {
 console.log('this is props for Items',props)
    return (
      <div>
          <div key={item.id}>
          <h1>{item.name}</h1>
          <img src={item.photo_url} alt=""/>
          <h4>Description: {item.description}</h4>
          <h4>Dimensions: {item.dimensions}</h4>
          <h4>Weight:{item.weight}</h4>
          <h4>Price:{item.price}</h4>
          <button onClick={props.deleteItem.bind(null, item.id)}>Delete</button>
          <button onClick={props.showItemModal.bind(null, item.id)}>Edit</button>
          </div>
        </div>)
      })
   };
  console.log(itemsList);
  return (
  <ul>
  {itemsList}
  </ul>
  )
}

export default Items;
