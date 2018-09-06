import React, { Component } from "react";
import ProductItem from './Components/ProductItem'
import AddItem from './Components/AddItem';
const products = [
    {name: 'Be a Full Stack Developer',
price: 'Pending'},
{name: 'Learn React',
price: 'Done'}
];

localStorage.setItem('products', JSON.stringify(products))
class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            products: JSON.parse(localStorage.getItem('products')),
            
        };
        this.onDelete = this.onDelete.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);
    }
    componentWillMount() {
        const products = this.getProducts()
        this.setState({products: products})
    }
    getProducts(){
        return this.state.products;
    }
    onDelete(name){
        const products = this.getProducts();
        const filteredProducts = products.filter(product => {
            return product.name !== name
        })
        this.setState({products: filteredProducts})
    }
    onAdd(name, price){
        const products = this.getProducts();

        products.push({
            name: name,
            price: price
        })
        this.setState({products: products})
    }
    onEditSubmit(name, price, originalName){
        let products = this.getProducts();
        products = products.map(product => {
            if(product.name === originalName){
                product.name = name;
                product.price = price;
            }
            return product;
        })
        this.setState({
           products: products
        })
        
    }
    render(){
        const {products} = this.state;
        return(
            <div className="container">
                <h1>Todo Manager</h1>
                <AddItem onAdd={this.onAdd}  />
                <hr/>
                {products.map((product, i) => {
                    return (
                   <ProductItem key={i} {...product} onDelete={this.onDelete} onEditSubmit={this.onEditSubmit}/>
                    )
                })}
            </div>
        )
    }
}

export default App;