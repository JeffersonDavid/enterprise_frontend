
'use client'

import React from 'react';
import Image from 'next/image';
import dataset from './data'
import { useState, useEffect } from 'react';

import CustomForm from '../../components/Form/Form'

export default function Product(initialType) {

  const d = dataset();

  let type_ = initialType.type
  const [productType, setType] = useState(type_);

  const [product_data, setProduct_data] = useState( productType != 'blanco' ? d.integral : d.blanco );

  const selectedData = productType != 'blanco' ? d.integral : d.blanco;

  const [sliderImg, setSilderImg ] =   useState(selectedData.img) 
 

  useEffect(() => {
    setProduct_data(selectedData);
    setSilderImg(selectedData.img)

  }, [productType]);


  const handleImg = (simage) => {
    setSilderImg(simage)
  };


let fields={

    form_fields:
      [
        { label:'Nombre', type:'text',  name:'name', required: true},
        { label:'email', type:'text',name:'email',required: true },
        { label:'telefono', type:'text', required: true },
        { label:'cantidad', type:'number',name:'quantity',  required: true }, 
        { label:'Direccion de entrega', type:'text',name:'address', required: true },
        { label:'tipo de pedido', type:'select', name:'type', options : ['Al por mayor'], required: true },
      ],

    form_title:'Realiza un pedido',

    form_target:'http://127.0.0.1:8000/api/v1/orders',
    form_method:'POST'
 
} 
 


return (


<div className='m-auto w-[100%]'>
  <div className='secure-container flex justify-center items-center'>
      <CustomForm data={fields} />
  </div>
</div>



)}