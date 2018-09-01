import React from 'react'
import PropTypes from 'prop-types'
import {Container , ListGroup , ListGroupItem , Button,Modal,ModalHeader,ModalBody,Form,FormGroup,Label,Input} from 'reactstrap';
import {connect} from 'react-redux';
import {addItem} from '../actions/itemActions';
import uuid from 'uuid'
class ItemModel extends React.Component{
  state = {
  modal:false,
  name:''

}

onChange = (e)=>{
  this.setState({
    [e.target.name]:e.target.value
  });
}
onSubmit = e=>{
  e.preventDefault();
  const newItem={
    id:uuid(),
    name:this.state.name
  }
  this.props.addItem(newItem);
  this.toggle();
}

  toggle = ()=>{this.setState({modal:!this.state.modal});}
  render () {
    return (
<div>
<Button color="dark" onClick={this.toggle}>
Add Item
</Button>
<Modal isOpen={this.state.modal} toggle={this.toggle}>
<ModalHeader toggle={this.toggle}>Add to ShoppingList</ModalHeader>
<ModalBody>
<Form onSubmit={this.onSubmit}>
<FormGroup>
<Label>item</Label>
<Input type="text" name="name" id="item" placeholder="Add Shopping Item" onChange={this.onChange}/>
</FormGroup>
</Form>
</ModalBody>
</Modal>
</div>
    )
  }
}

const mapStateToProps = (state)=>({
  item:state.item
})

export default connect(mapStateToProps,{addItem})(ItemModel)
