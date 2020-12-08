import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { removeItem,addQuantity,subtractQuantity} from '../actions/cartActions';
import Recipe from '../partials/Recipe';

class Pay extends Component{
  // Remove the item completely
  handleRemove = (id)=>{
    this.props.removeItem(id);
  }
  // Add the quantity
  handleAddQuantity = (id)=>{
    this.props.addQuantity(id);
  }
  // Substruct from the quantity
  handleSubtractQuantity = (id)=>{
    this.props.subtractQuantity(id);
  }

  render(){
            
    let addedItems = this.props.items.length ?
      (  
        this.props.items.map(item=>{
          return(
            <div className="bg-white border-b w-full px-auto rounded-t-3xl" key={item.id}>
              <div className="relative text-gray-500 px-2 md:px-6 pb-6 mt-6">
                
                  <div className="flex">

                      <div className="p-2 w-16">
                        <img src={item.img} alt={item.img} />
                      </div>

                      <div className="flex-auto text-md">
                          {item.title}
                          <div className="font-bold">
                            {item.desc}
                          </div>
                          <div className="flex flex-row border h-8 w-24 rounded-xl relative">
                              <Link
                                to="/pay"
                                className="font-semibold bg-gray-400 lg:hover:bg-red-400 activate:bg-red-400 text-white border-gray-400 h-full w-20 flex rounded-l focus:outline-none cursor-pointer"
                                onClick={()=>{this.handleSubtractQuantity(item.id)}}
                              >
                                <span className="m-auto">-</span>
                              </Link>

                              <input
                                className="border-gray-400 text-center font-bold bg-white w-10 text-xs md:text-base flex items-center justify-center cursor-default"
                                readOnly
                                name="custom-input-number"
                                value={item.quantity}
                              />

                              <Link
                                to="/pay"
                                className="font-semibold bg-gray-400 lg:hover:bg-blue-400 activate:bg-blue-400 text-white border-gray-400 h-full w-20 flex rounded-r focus:outline-none cursor-pointer"
                                onClick={()=>{this.handleAddQuantity(item.id)}}
                              >
                                <span className="m-auto">+</span>
                              </Link>
                          </div>
                      </div>

                      <div className="flex flex-col w-18 font-medium items-end">
                          <button 
                            className="w-5 h-5 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700"
                            onClick={()=>{this.handleRemove(item.id)}}
                          >
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2 ">
                                  <polyline points="3 6 5 6 21 6"></polyline>
                                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                  <line x1="10" y1="11" x2="10" y2="17"></line>
                                  <line x1="14" y1="11" x2="14" y2="17"></line>
                              </svg>
                          </button>
                          ${item.price}K
                      </div>
                </div>
              </div>
            </div>
          )
        })
      ):

      (
        <div className="flex h-screen justify-center items-center">
          <div className="text-center text-gray-300">
            <p className="block h-8 text-7xl leading-8 text-center align-middle">
              <i className="mdi mdi-cart-outline"></i>
            </p>
            <p className="block text-sm m-6 leading-none text-center align-middle">Empty</p>
          </div>
        </div>
      )
    return(
      <div className="container">
        <div className="cart">
          <ul className="collection">
            {addedItems}
          </ul>
          {this.props.items.length > 0 &&
          <Recipe />}
        </div>  
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return{
      items: state.addedItems
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    removeItem: (id)=>{dispatch(removeItem(id))},
    addQuantity: (id)=>{dispatch(addQuantity(id))},
    subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pay)