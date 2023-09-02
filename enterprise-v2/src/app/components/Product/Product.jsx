
'use client'

import React from 'react';
import Image from 'next/image';
import dataset from './data'
import { useState, useEffect } from 'react';


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

return (


<div className='m-auto w-[100%]'>

<div className='secure-container flex justify-center items-center'>

  <div className="flex product_desc_width_he border border-gray-300 rounded p-2 w-[70%] h-[65%]">
    <div className="w-1/10 p-1 border border-gray-100 rounded m-auto mr-3">
      <div className='p-1'>

        <button onClick={() => handleImg(selectedData.box_img)}>
        <Image src={selectedData.box_img} alt="Imagen 1" width={140} height={140} className='border border-gray-300 rounded min_pr_image' />
        </button>
        <br></br>
        <button onClick={() => handleImg(selectedData.img)}>
        <Image src={selectedData.img} alt="Imagen 2" width={140} height={140} className='min_pr_image border border-gray-300 rounded' />
        </button>
        <br></br>
        <button onClick={() => handleImg(selectedData.singe_pita_img)}>
        <Image src={selectedData.singe_pita_img} alt="Imagen 3" width={140} height={140} className='min_pr_image border border-gray-300 rounded' />
        </button>

      </div>
    </div>

    <div className="col2img w-3/10 p-1 flex flex-col justify-between m-auto h-full mr-2">
      <Image src={sliderImg} alt="Imagen 4" width={500} height={500} className='m-auto med_pr_image object-cover'/>
      <button className="btnbcolor inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300" type="button" onClick={e => SendData(e)}>
        <p>Pídelo ahora</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="ml-auto">
          <circle cx="9" cy="21" r="1"/>
          <circle cx="20" cy="21" r="1"/>
          <path d="M21 15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8l2 5h5a2 2 0 0 1 2 2z"/>
        </svg>
      </button>

    </div>

    <div className="w-[80%] md:w-[90%] p-2 border border-gray-100 rounded descbox">
      <div className="h-[auto] bg-gray-50 p-3 flex flex-col justify-between">


      
          <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
                
                 {
                      selectedData.features.generic.map((item, index) =>
                      (
                          <li  key={index} className="">
                            <div className="flex items-center space-x-1 mt-1 mb-1">
                              <div className="flex-1 min-w-0">
                                  <p className="text-xs font-medium text-gray-900 truncate dark:text-white">
                                    {item.key}
                                  </p>
                                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                  {item.value}
                                  </p>
                              </div>
                              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">  
                              </div>
                            </div>
                        </li>
                      ))

                  }

                  {
                      selectedData.features.bag.map((item, index) =>
                      (
                          <li  key={index} className="">
                            <div className="flex items-center space-x-1 mt-1 mb-1">
                              <div className="flex-1 min-w-0">
                                  <p className="text-xs font-medium text-gray-900 truncate dark:text-white">
                                    {item.key}
                                  </p>
                                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                  {item.value}
                                  </p>
                              </div>
                              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"> 
                              {
                                item.price ?
                                <span class="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">{item.total} </span> 
                                  :
                                  ''
                              }
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