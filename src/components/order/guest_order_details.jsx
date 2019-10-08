import React, { Component } from 'react'
import {getGuestOrderDetails} from '../../action/index'
import {connect} from 'react-redux'
import {queryToObject} from '../../helpers/helpers'
import Item from './item.jsx'
import OrderFomat from './orderFomat';


class guestOrderDetails extends Component {

  componentDidMount=()=>{
  const { match, location,getGuestOrderDetails } = this.props;
  const queryLocation = queryToObject(location.search);
  const orderId = match.params.order_id;
  getGuestOrderDetails(queryLocation.email,orderId)
  }

  render() {

    if(!this.props.orderDetail) return <div className="center"><h1>Loading...</h1></div>
    const {orderDetail} = this.props;

    console.log('orderDetail',orderDetail)
   
    return (
      <div>
        <div className="center mb-4 mt-4">
        <h1 className=" mr-2 text-info d-inline">Guest</h1>
        <h1 className=" d-inline">Order Details</h1>
        </div>
        <OrderFomat orderDetail={orderDetail}/>
       
        <div className="col-md-12 mb-4 mt-3">
          <Item item = {orderDetail.items} {...orderDetail}/>
          </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  console.log('mapStateToProps-state',state.order.orderDetail)
  return{
    orderDetail:state.order.orderDetail
  }
}

export default  connect(mapStateToProps,{getGuestOrderDetails})(guestOrderDetails);