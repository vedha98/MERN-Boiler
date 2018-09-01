import React from 'react';
import {Container , ListGroup , ListGroupItem , Button} from 'reactstrap';
import{CSSTransition , TransitionGroup} from 'react-transition-group';
import uuid from 'uuid';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import {getItems,deleteItem} from '../actions/itemActions'
class ShoppingList extends React.Component {
deletebtnClick(id){
  this.props.deleteItem(id);
}

componentDidMount() {
  this.props.getItems();
}

  render () {
const {items} = this.props.item;
return (
<Container>


<ListGroup>
<TransitionGroup className="Shopping-List">
{items.map(({_id,name})=>(
<CSSTransition key={_id} timeout={500} classNames="fade">
  <ListGroupItem><Button className="remove-btn" color="danger" size="sm" onClick={this.deletebtnClick.bind(this,_id)}>&times;</Button>{name}</ListGroupItem>

</CSSTransition>

))}
</TransitionGroup>
</ListGroup>
</Container>


);


  }
}
ShoppingList.propTypes = {
  getItems:propTypes.func.isRequired,
  deleteItem:propTypes.func.isRequired,
  item:propTypes.object.isRequired
}

const mapStateToProps = (state)=>({
  item:state.item
})
export default connect(mapStateToProps,{getItems,deleteItem})(ShoppingList);
