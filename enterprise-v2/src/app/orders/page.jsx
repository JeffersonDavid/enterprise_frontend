
'use client'

import Product from '../components/Productdesc/Productdesc';
import productData from '../data/data';

export default function ordersPage() {

    return( 
        
            <div className='secure-container flex justify-center items-center' >  
            
                <div class="product-container">

                    <div class="product">
                        <Product data={productData().pita_blanco}/>
                    </div>

                    <div class="product">
                        <Product data={productData().pita_integral}/>
                    </div>

                </div>
             </div>
    )
}