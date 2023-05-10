import axios from 'axios';
import {useState, useEffect} from 'react';

interface Product {
    id:number,
    title:string,
    price:number,
    category:string,
    description:string,
    image:string
}
const ProductsList =  () => {
    const [products, setProducts] = useState<Product[]>()
    useEffect(()=> {
        const fethItems = async () => {
          await axios.get('https://fakestoreapi.com/products'
            ).then(({data})=> {
                setProducts(data);
            }).catch(()=> console.error());
        };
        fethItems();
      })

      return(
        <section>
            <ul>
                {products && products.map((data)=>{
                    return(
                        <li className='product' key={data.id}>
                            <a href="/">
                                <div className="product_header">
                                    <img src={data.image} alt="" />
                                </div>
                                <div className="product_body">
                                    <h4 className='product_title'>{data.title}</h4>
                                    <p className='product_price'>{data.price}</p>
                                    <p className='product_description'>{data.description}</p>
                                </div>
                            </a>
                        </li>
                    )
                })}
            </ul>

        </section>
      )
}

export default ProductsList;