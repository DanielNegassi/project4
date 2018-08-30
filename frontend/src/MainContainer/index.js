import React, {Component} from 'react';
import Categories from '../Categories' ;
import CreateCategory from '../CreateCategory';
// import CreateItem  from '../CreateItem';
import EditCategory from '../EditCategory';
// import EditItem from '../EditItem';
// import Items from '../Items';

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
      }
      // items:[],
      // itemShowEdit: false,
      // editItemId: null,
      // itemToEdit:{
      //     'name': '',
      //     'photo_url':'',
      //     'description':'',
      //     'dimensions' = '',
      //     'weight' = '',
      //     'price' = '',
      // }
    }
  }


  componentDidMount() {
          this.getCategories().then((categories) => {
              this.setState({ categories: categories})
          }).catch((err) => {
              console.log(err);
          });
}

//////////////////////Category API calls///////////////////////////

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

  render() {
  console.log(this.state, 'this is state');
  return (
    <div>
      <Categories
        categories={this.state.categories}
        deleteCategory={this.deleteCategory}
        showCategoryModal={this.showCategoryModal}
      />
      <CreateCategory addCategory={this.addCategory} />
                {this.state.categoryShowEdit ? <EditCategory categoryCloseAndEdit={this.categoryCloseAndEdit} categoryHandleFormChange={this.categoryHandleFormChange} categoryToEdit={this.state.categoryToEdit}/> : null}
    </div>
  )}
}
export default MainContainer;
