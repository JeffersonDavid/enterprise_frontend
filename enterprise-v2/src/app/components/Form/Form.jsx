'use client'

import { Input } from 'postcss';
import React, { useState,useEffect,useRef } from 'react';

const submit_id = 'submit_input'

export default function CustomForm(inputs) {
    let inputs_ = inputs.data

    const defineInputType = (item) => {
        let type = item.type
        let input_class = 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
      
        switch (type) {
            case 'number':
              return (
                <input
                  className={input_class}
                  name={item.name}
                  type={item.type}
                  placeholder={item.label}
                />
              );
            case 'select':
              return (
                <select className={input_class}>
                  { item.options.map((item, index) =>(
                    <option value={item} selected>{item}</option>
                  ))}
                </select>
              );
            case submit_id:
              return (
                <button
                    name={item.name}
                    type={item.type}
                  className="btnbcolor inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >{item.label}</button>
              );
            default:
              return (
                <input
                  className={input_class}
                  name={item.name}
                  type={item.type}
                  placeholder={item.label}
                />
              );
          }
    };
 
    return (
    <form className="mwcustom bg-white w-full shadow-md rounded px-8 pt-2 pb-2 mb-1">
            <p className='m-3 block text-gray font-bold'> Realiza un pedido </p>
            {
                    inputs_.form_fields.map((item, index) =>(

                    <div class="mb-2 flex">
                        { item.type != submit_id ?  <label class="clabel block text-gray-700 text-sm font-bold mb-2" for="username">{item.label}</label> : null }
                        {defineInputType(item)}
                    </div>

            ))}  
    </form>
)}


