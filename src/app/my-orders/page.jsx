
'use client'

import CartComponent from "../components/Cart/Cart"

export default function MyOrdersPage() {

return(  
         <div classNameName='secure-container flex justify-center items-center' > 
            <CartComponent data={{ type_component: 'page', products_added: [] }} />  
         </div>
    )
}