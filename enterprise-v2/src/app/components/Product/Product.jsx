
'use client'

import React from 'react';

import Image from 'next/image';

import productData from '../../data/data';

export default function Product(type) {
type = type.type

let prd = productData();

let src_img = type === 'blanco' ? prd.pita_blanco.src_img : prd.pita_integral.src_img

let title = type === 'blanco' ? prd.pita_blanco.title : prd.pita_integral.title

let desc = type === 'blanco' ? prd.pita_blanco.shortdesc : prd.pita_integral.shortdesc

let quantity = type === 'blanco' ? prd.pita_blanco.box.quantit : prd.pita_integral.box.quantit

let duration = type === 'blanco'? prd.pita_blanco.duration : prd.pita_integral.duration

let storage = prd.storage

let dimnension_bolsa = type === 'blanco' ? prd.pita_blanco.box.weight : prd.pita_integral.box.weight
 
return ( 


<div className='secure-container flex justify-center items-center'>

  <a href="#" className="cardlink secure-card bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
    <div className="secure-image">

        <Image id='pr_image' src={src_img} alt='Pita blanco'></Image>
     
    </div>
    <div className="secure-content p-4">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{title}</h5>
      <p className="mb-3 font-normal text-gray-700">
        {desc}

        <br></br>

        <span className="fspan inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">- Bolsas en caja : {quantity}</span>

        <br></br>

        
        <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">- Panes en bolsa : {quantity}</span>
        <br></br>

        <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">- Duración : {duration}</span>
        <br></br>

        <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
        - Almacenamiento : {storage}</span>
        <br></br>

        <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
        - Dimension bolsa : {dimnension_bolsa}</span>

      </p>
    </div>
  </a>


</div>



)


}
  