import React from 'react';
import Data from '../Data';
import { Link } from 'react-router-dom';

function ProductScreen(props){
    console.log(props.match.params.id);
    const product = Data.products.find(x => x._id === props.match.params.id);
    return(
        <div>
            <div className="back-to-result">
                <Link to="/">Back to Home</Link> 
            </div>
            <div className="details">
               <div className="details_image">
                   <img src= {product.image} alt="product"></img>
               </div>
               <div className="details_info">
                   <ul>
                       <li><h4>{product.name}</h4></li>
                       <li>{product.ratings} Stars {product.numReviews}(Reviews)</li>
                       <li>
                          Price: <b> ${product.price} </b>
                       </li>
                       <li>
                           Discription:
                           <div>{product.discription}</div>
                       </li>
                   </ul>
               </div>
               <div className="details_action">
                   <ul>
                     <li>
                          Price:{product.price}
                      </li>
                      <li>
                          Status:{product.status}
                      </li>
                      <li>
                          Qty:<select>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          </select>
                      </li>
                      <li>
                           <button className="button">Add to Cart</button>
                      </li>
                   </ul>
               </div>
            </div>
        </div>
    )
}
export default ProductScreen;