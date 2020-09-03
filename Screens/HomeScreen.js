import React from 'react';
import Data from '../Data';
import {Link} from "react-router-dom";

function HomeScreen(props){
    return(
        <div>
                 <ul className="products">
                  {
                    Data.products.map(product =>
                      <li>
                          <div className="product">
                          <Link to={"/product/"+product._id}>
                          <img className="product-image" src={product.image} alt="pic.jpg"/>
                          </Link>
                              <div className="product-name">
                                  <Link to={"/product/"+product._id}>{product.name}</Link>
                              </div>
                              <div className="product-category">{product.category}</div>
                              <div className="product-brand">{product.brand}</div>
                              <div className="product-price">${product.price}</div>
                              <div className="product-rating">{product.ratings} Stars {product.numReviews}</div>
                          </div>
                          </li>)
                  }
                 </ul>

        </div>
    )
}
export default HomeScreen;