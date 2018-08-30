import React, { Component } from 'react';


const EditCategory = (props) =>  {

  return (
    <div>
      <h4> Edit </h4>
      <form onSubmit={props.categoryCloseAndEdit}>
        <label>
          <input type="text" name="name" onChange={props.categoryHandleFormChange} value={props.categoryToEdit.name}/>
        </label>

        <label>
          <input type="text" name="photo_url" onChange={props.categoryHandleFormChange} value={props.categoryToEdit.photo_url}/>
        </label>
        <input type='Submit'/>
      </form>
    </div>

    )
  }

export default EditCategory;
