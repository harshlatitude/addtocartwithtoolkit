import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { FaTrash,FaCartArrowDown } from "react-icons/fa";
import { addToCart, removeSingleIteam, removeToCart } from '../features/cartSlice';

const CardsDetails = () => {
    const cartData = useSelector((state) => state.allCart);
  
    const [price,setPrice] = useState(0);
    const dispatch = useDispatch();

    // addtocart
    const handleIncrement = (e)=>{
        dispatch(addToCart(e));
    }

    // remove to cart
    const handleDecrement = (e)=>{
        dispatch(removeToCart(e))
    }

    // remove single cart
    const handlesingleDecrement = (e)=>{
        dispatch(removeSingleIteam(e))
    }

    const total = ()=>{
        let price = 0;
        cartData.carts.map((ele,k)=>{
            price = ele.price * ele.qnty + price
        });
        setPrice(price);
    };

    useEffect(()=>{
        total();
    },[total])


    return (
        <>
            <div className='container'>
                <div className='innercomponents d-flex justify-content-between mt-5'>
                    <Card className='shadow col-lg-8'>
                        <h2>Cart Details</h2>
                        {
                            cartData.carts?.length > 0 ? cartData?.carts?.map((element, index) => {
                                return (
                                    <>
                                        <Card.Body className='d-flex justify-content-between'>
                                            <div className='d-flex justify-content-between col-lg-6'>
                                                <img src={element.imgdata} className='col-lg-4' style={{ width: "110px" }} alt="" />
                                                <div className='col-lg-4 mt-2'>
                                                    <p>{element.rname}</p>
                                                    <p> {element.qnty} * {element.price} = ₹{element.qnty*element.price}</p>
                                                    <FaTrash onClick={()=>handleDecrement(element.id)} />
                                                </div>
                                            </div>
                                            <div className='d-flex mt-3 justify-content-between col-lg-3'>
                                                <Button variant="primary" style={{ height: "40px", paddingTop: "1px" }} onClick={element.qnty <=1 ? ()=>handleDecrement(element.id) : ()=>handlesingleDecrement(element)}>-</Button>
                                                <p className='mt-2'> {element.qnty}</p>
                                                <Button variant="primary" style={{ height: "40px", paddingTop: "1px" }} onClick={()=>handleIncrement(element)}>+</Button>
                                            </div>
                                        </Card.Body>
                                        <hr />
                                    </>
                                )
                            }) :<div>
                                Your Cart Is Empty <img src='/cart.gif' style={{width:"100px"}} />
                            </div> 
                        }

                       
                    </Card>
                    <Card style={{height:"200px",width:"300px"}} className='shadow'>
                        <Card.Body>
                            <h2>Summary</h2>
                            <div className='d-flex justify-content-between mt-4'>
                                <p>Total Amount</p>
                                <p>₹ {price}</p>
                            </div>
                            <Button variant="primary">Go To CheckOut</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default CardsDetails