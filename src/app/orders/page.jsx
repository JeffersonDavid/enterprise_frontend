
'use client'

import Product from '../components/Productdesc/Productdesc';
import productData from '../data/data';

export default function ordersPage() {

    return( 
        
            <div classNameName='product-box secure-container flex justify-center items-center' >  
            
                <div className="product-container">

                    <div className="product p-f">
                        <Product data={productData().pita_blanco}/>
                    </div>

                    <div className="product ">
                        <Product data={productData().pita_integral}/>
                    </div>

                </div>
             </div>
    )
}