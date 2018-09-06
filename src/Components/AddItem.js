import React, {Component} from 'react';

class AddItem extends Component {
    constructor(props){
        super(props);
       
    this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(event){
        event.preventDefault();
       this.props.onAdd(this.nameInput.value, this.priceInput.value)
       this.nameInput.value = '';
       this.priceInput.value = ''
    }
    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <h3>Add Todo</h3>
                <input type="text" required placeholder="Enter a Todo" ref={nameInput => this.nameInput = nameInput} />
                <input type="text" required placeholder="Enter Todo Status" ref={priceInput => this.priceInput = priceInput}/>
                <button >Add</button>
               
            </form>
        )
    }
}

export default AddItem;