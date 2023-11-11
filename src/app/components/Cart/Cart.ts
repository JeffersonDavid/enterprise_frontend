
import React from "react"
import { CartContract } from './Contracts'
import { validateAndFetchObjectProps, checkLocalStorage } from './CartUtils'


export default function CartComponent( props: CartContract) {

    checkLocalStorage(props);

    const html = validateAndFetchObjectProps( props );

    
    return html;
}

