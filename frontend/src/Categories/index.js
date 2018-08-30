import React from 'react';

const Categories = (props) => {
  let categoriesList;
 if(props.categories === undefined) {

 } else {

 console.log('this is props for Categories',props)
  categoriesList = props.categories.map((category,i) => {
    console.log('this is category in map()',category);
    return (
      <div>
          <div key={category.id}>
          <h1>{category.name}</h1>
          <img src={category.photo_url} alt=""/>
          <button onClick={props.deleteCategory.bind(null, category.id)}>Delete</button>
          <button onClick={props.showCategoryModal.bind(null, category.id)}>Edit</button>
        </div>
        </div>
       )
     });
   }
   console.log(categoriesList);
return (
<ul>
{categoriesList}
</ul>
 )
}

export default Categories;
