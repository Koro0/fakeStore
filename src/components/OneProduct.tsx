import React, { useEffect, useState } from 'react';
import { Product } from './types/ProductInterface';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {ProductIdRoute} from './types/ProductInterface';

export default function OneProduct() {
    const [item, setItem] = useState<Product>();
    const productId = useParams<ProductIdRoute>();
    console.log(productId +'string');
    useEffect(()=> {
        const fetchOneProduct = async () => {
            await axios.get('https://fakestoreapi.com/products/'+productId.id
                ).then((res)=> {
                    const prodoctData = res.data as Product;// Convert response data to Product type
                    setItem(prodoctData);
                }).catch((err)=> console.error(err));
        }
        fetchOneProduct()
    },[productId]);

  return (
    <section className='item'>
        {item && 
            <article className='item_box'>
                <div className="item_left">
                    <img src={item.image} alt="" />
                </div>
                <div className='item_right'>
                    <div className='item_right1'>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                    <div className="item_right2">
                        <p className='item_price'>{item.price} $</p>
                    </div>
                </div>
                <button className="item_addCard"> Add Card</button>
            </article>
        }
    </section>
  )
}
