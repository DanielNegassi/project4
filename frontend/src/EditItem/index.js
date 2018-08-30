import React, { Component } from 'react';


const EditItem = (props) =>  {

  return (
    <div>
      <h4> Edit </h4>
      <form onSubmit={props.closeAndEditItem}>
        <label>
          <input type="text" name="name" onChange={props.handleFormChange} value={props.itemToEdit.name}/>
        </label>
        <br/>
        <label>
          <input type="text" name="photo_url" onChange={props.handleFormChange} value={props.itemToEdit.photo_url}/>
        </label>
        <br/>
        <label>
          <input type="text" name="description" onChange={props.handleFormChange}
          value={props.itemToEdit.description}/>
        </label>
        <br/>
        <label>
          <input type="text" name="dimension" onChange={props.handleFormChange}
          value={props.itemToEdit.dimension}/>
        </label>
        <br/>
        <label>
          <input type="text" name="weight" onChange={props.handleFormChange}
          value={props.itemToEdit.weight}/>
        </label>
        <br/>
        <label>
          <input type="text" name="price" onChange={props.handleFormChange}
          value={props.itemToEdit.price}/>
        </label>
        <label>
          <input type="text" name="category" onChange={props.handleFormChange}
          value={props.itemToEdit.category}/>
          </label>
        <input type='Submit'/>
      </form>
    </div>

    )
  }

export default EditItem;
