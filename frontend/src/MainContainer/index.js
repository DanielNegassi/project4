import React, {Component} from 'react';
import Categories from '../Categories' ;
import CreateCategory from '../CreateCategory';
import CreateItem  from '../CreateItem';
import EditCategory from '../EditCategory';
import EditItem from '../EditItem';
import Items from '../Items';

class MainContainer extends Component {
  constructor(props) {
    super()
    this.state = {
      categories: [],
      categoryShowEdit: false,
      editCategoryId: null,
      categoryToEdit: {
        'name': '',
        'photo_url':'',
      },
      items:[],
      itemShowEdit: false,
      editItemId: null,
      itemToEdit:{
          'name': '',
          'photo_url':'',
          'description':'',
          'dimensions': '',
          'weight':'',
          'price':'',
      }
    }
  }


  componentDidMount() {
          this.getCategories().then((categories) => {
              this.setState({ categories: categories})
          }).catch((err) => {
              console.log(err);
          });
          this.getItems().then((items) => {
            this.setState({ items: items })
        }).catch((err) => {
            console.log(err);
        })
}

//////////////////////////Category API calls//////////////////////////////////

getCategories = async () => {
        const categories = await fetch('http://localhost:8000/api/categories/');
        const categoriesJson = await categories.json();
        return categoriesJson;
    }

addCategory = async (category, e) => {
            e.preventDefault();
            try {
                const createdCategory = await fetch('http://localhost:8000/api/categories/', {
                    method: 'POST',
                    body: JSON.stringify(category),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                const createdCategoryJson = await createdCategory.json();
                console.log(createdCategoryJson, ' this is createdCategoryJson');
                this.setState({categories: [...this.state.categories, createdCategoryJson]});
            } catch(err) {
                console.log(err);
            }
        }

        deleteCategory = async (id, e) => {
            e.preventDefault();
            console.log('deleteCategory function is being called, this is the id: ', id);
            try {
                const deleteCategory = await fetch('http://localhost:8000/api/categories/' + id, {
                    method: 'DELETE',
                });

                if (deleteCategory.status === 204) {
                    this.setState({ categories: this.state.categories.filter((category, i) => category.id !== id) });
                } else {
                    console.log('error when deleting category');
                }
            } catch (err) {
                console.log(err);
            }
        }

        showCategoryModal = (id, e) => {
            const categoryToEdit = this.state.categories.find((category) => category.id === id)
            this.setState({
                categoryShowEdit: true,
                editCategoryId: id,
                categoryToEdit: categoryToEdit,
            });
        }

        categoryCloseAndEdit = async (e) => {
            e.preventDefault();

            try {
                console.log('categoryCloseAndEdit is calling');
                const categoryEditResponse = await fetch('http://localhost:8000/api/categories/' + this.state.editCategoryId, {
                    method: 'PUT',
                    body: JSON.stringify(this.state.categoryToEdit),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                const categoryEditResponseJson = await categoryEditResponse.json();
                const editedCategoryArray = this.state.categories.map((category) => {

                    if (category.id === this.state.editCategoryId) {
                        category.name = categoryEditResponseJson.name;
                        category.photo_url = categoryEditResponseJson.photo_url;
                    }
                    return category;
                });

                this.setState({
                    categories: editedCategoryArray,
                    categoryShowEdit: false,
                });
            } catch (err) {
                console.log(err);
            }
        }
        categoryHandleFormChange = (e) => {

            this.setState({
                categoryToEdit: { ...this.state.categoryToEdit, [e.target.name]: e.target.value }
            });
        }



/////////////////////////////Item API calls////////////////////////////////////


getItems = async () => {
        const items = await fetch('http://localhost:8000/api/items/');
        const itemsJson = await items.json();
        return itemsJson;
    }

addItem = async (item, e) => {
            e.preventDefault();

            try {
                const createdItem = await fetch('http://localhost:8000/api/items/', {
                    method: 'POST',
                    body: JSON.stringify(item),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                const createdItemJson = await createdItem.json();
                console.log(createdItemJson, ' this is createdItemJson');
                this.setState({items: [...this.state.items, createdItemJson]});
            } catch(err) {
                console.log(err);
            }
        }

        deleteItem = async (id, e) => {
            e.preventDefault();
            console.log('deleteItem function is being called, this is the id: ', id);
            try {
                const deleteItem = await fetch('http://localhost:8000/api/items/' + id, {
                    method: 'DELETE',
                });
                if (deleteItem.status === 204) {
                    this.setState({ items: this.state.items.filter((item, i) => item.id !== id) });
                } else {
                    console.log('error when deleting item');
                }
            } catch (err) {
                console.log(err);
            }
        }

        showItemModal = (id, e) => {
            const itemToEdit = this.state.items.find((item) => item.id === id)
            this.setState({
                itemShowEdit: true,
                editItemId: id,
                itemToEdit: itemToEdit,
            });
        }

        itemCloseAndEdit = async (e) => {
            e.preventDefault();

            try {
                console.log('itemCloseAndEdit is calling');
                const itemEditResponse = await fetch('http://localhost:8000/api/items/' + this.state.editItemId, {
                    method: 'PUT',
                    body: JSON.stringify(this.state.itemToEdit),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                const itemEditResponseJson = await itemEditResponse.json();
                const editedItemArray = this.state.items.map((item) => {

                    if (item.id === this.state.editItemId) {
                        item.name = itemEditResponseJson.name;
                        item.photo_url = itemEditResponseJson.photo_url;
                        item.description = itemEditResponseJson.description;
                        item.dimensions = itemEditResponseJson.dimensions;
                        item.weight = itemEditResponseJson.weight;
                        item.price = itemEditResponseJson.price;
                    }
                    return item;
                });
                this.setState({
                    items: editedItemArray,
                    itemShowEdit: false,
                });
            } catch (err) {
                console.log(err);
            }
        }
        itemHandleFormChange = (e) => {

            this.setState({
                itemToEdit: { ...this.state.itemToEdit, [e.target.name]: e.target.value }
            });
        }

  render() {
  console.log(this.state, 'this is state');
  return (
    <div>
      <Categories
        categories={this.state.categories}
        deleteCategory={this.deleteCategory}
        showCategoryModal={this.showCategoryModal}
        addItem={this.addItem}
      />
      <CreateCategory addCategory={this.addCategory} />
      {this.state.categoryShowEdit ? <EditCategory categoryCloseAndEdit={this.categoryCloseAndEdit} categoryHandleFormChange={this.categoryHandleFormChange} categoryToEdit={this.state.categoryToEdit}/> : null}

      <Items
        items={this.state.items}
        deleteItem={this.deleteItem}
        showItemModal={this.showItemModal}
      />
      {this.state.itemShowEdit ? <EditItem itemCloseAndEdit={this.itemCloseAndEdit} itemHandleFormChange={this.itemHandleFormChange} itemToEdit={this.state.itemToEdit}/> : null}
    </div>
  )}
}
export default MainContainer;
