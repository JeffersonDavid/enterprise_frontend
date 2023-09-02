'use client'

import { Input } from 'postcss';
import React, { useState,useEffect,useRef } from 'react'; 



export default function CustomForm(inputs) {

    const submit_id = 'submit_input'
    let inputs_ = inputs.data
    console.log('inputs passed')
    console.log(inputs_)

    const defineInputType = (item) => {

        let type = item.type

        let input_class = 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
      

       if(type === 'number'){

            return  <input class={input_class} id="username" type="number" placeholder={item.label}/>
        
       }

       if(type === 'select'){

            return <select class={input_class}>
                <option value="1" selected>Al por mayor </option>
            </select>
            
        }

        
        if(type === submit_id){

            return <input type="submit" value="Enviar" class="btnbcolor inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300" /> 
        }

        return <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder={item.label}/>
        

      
    };
 
return(
    <form className="mwcustom bg-white w-full shadow-md rounded px-8 pt-2 pb-2 mb-1">

    {
        inputs_.map((item, index) =>(

       <div class="mb-2 flex">
            { item.type != submit_id ?  <label class="clabel block text-gray-700 text-sm font-bold mb-2" for="username">{item.label}</label> : null }
            {defineInputType(item)}
        </div>

    ))}  
       
    </form>
)


}


