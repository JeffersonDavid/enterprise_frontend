
'use client'

import React from 'react';

import Image from 'next/image';

import productData from '../../data/data';

import dataset from './data'

import ComunincationIcon from "../../../../public/images/com.png"

import { useState, useEffect } from 'react';


export default function Product(initialType) {
  const d = dataset();


  let type_ = initialType.type
  const [productType, setType] = useState(type_);
  const [product_data, setProduct_data] = useState( productType != 'blanco' ? d.integral : d.blanco );
  const selectedData = productType != 'blanco' ? d.integral : d.blanco;

  useEffect(() => {
    setProduct_data(selectedData);
      console.log(selectedData)
  }, [productType]);


return (


<div className='m-auto w-[100%]'>

<div className='secure-container flex justify-center items-center'>

  <div className="flex product_desc_width_he border border-gray-300 rounded p-2 w-[70%] h-[60%]">
    <div className="w-1/10 p-1 border border-gray-100 rounded m-auto mr-3">
      <div className='p-1'>
        <Image src={selectedData.features.generic.img} alt="Imagen 1" width={120} height={120} className='border-b border-gray-300 rounded min_pr_image' />
        <br></br>
        <Image src={selectedData.features.generic.img} alt="Imagen 2" width={120} height={120} className='min_pr_image' />
        <br></br>
        <Image src={selectedData.features.generic.img} alt="Imagen 3" width={120} height={120} className='min_pr_image' />
      </div>
    </div>

    <div className="col2img w-3/10 p-1 flex flex-col justify-between m-auto h-full mr-2">
      <Image src={selectedData.features.generic.img} alt="Imagen 4" width={500} height={500} className='border border-gray-200 rounded med_pr_image object-cover' />
    </div>

    <div className="w-[80%] md:w-[90%] p-2 border border-gray-100 rounded descbox">
      <div className="h-[auto] bg-gray-50 p-3 flex flex-col justify-between">


      
          <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">

            {
                  selectedData.features.bag.map((item, index) =>
                   (
                      <li  key={index} className="">
                        <div className="flex items-center space-x-1 mt-1 mb-1">
                          <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                {item.key}
                              </p>
                              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                              {item.value}
                              </p>
                          </div>
                          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"> 
                          ?
                          </div>
                        </div>
                    </li>
                  ))
            }
             
          </ul>

      </div>
    </div>
  </div>

</div>
</div>



)}