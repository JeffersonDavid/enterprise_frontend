
'use client'

import React from 'react';
import Image from 'next/image';
import dataset from './data'
import CartComponent from '../Cart/Cart';
import { useState, useEffect } from 'react';
import PopUp from './../PopUps/information/info'

import { pushProductToCart,fetchCartProducts } from '../Cart/CartUtils'

export default function Product(initialType) {

  
  


  const d = dataset();

  let type_ = initialType.type
  const [productType, setType] = useState(type_);
  const [product_data, setProduct_data] = useState( productType != 'blanco' ? d.integral : d.blanco );
  const selectedData = productType != 'blanco' ? d.integral : d.blanco;
  const [sliderImg, setSilderImg ] =   useState(selectedData.img) 
  const [shoppingCart, setShoppingCart ] =   useState([]) 
 

  const filter = (fetchCartProducts()).filter(_type_ => _type_ !== selectedData.type);

  const [popupInfo, setPopupInfo] = useState({
    status: false,
    title: '',
    content: '',
  });


  useEffect(() => {
    
    setProduct_data(selectedData);
    setSilderImg(selectedData.img)

  }, [productType,shoppingCart]);


  const handleImg = (simage) => { setSilderImg(simage)};

  const addTocart = () =>{

    if(!filter.length){

            setPopupInfo({
              status: true,
              title: 'Mensaje informativo',
              content: 'El producto ya ha sido añadido al carrito, puede consultar su pedido desde este....',
            });

      }else{

            setPopupInfo({
              status: true,
              title: 'Mensaje informativo',
              content: 'El producto ha añadido correctamente al pedido',
            });

      }


    pushProductToCart(selectedData.type)

  }
 

return (

  

<div className='m-auto w-[100%]'>



<PopUp data={popupInfo} />



<div className='secure-container flex justify-center items-center'>
{

  <div className="flex product_desc_width_he border border-gray-300 rounded p-2 w-[70%] h-[65%]">
    <div className="w-1/10 p-1 border border-gray-100 rounded m-auto mr-3">

        <div className='p-1'>

          <button onClick={() => handleImg(selectedData.box_img)}>
            <div className='image-container'>
              <Image src={selectedData.box_img} alt="Imagen 1" className='border border-gray-300 rounded min_pr_image' />
            </div>
          </button>
          <br></br>
          <button onClick={() => handleImg(selectedData.img)}>
            <div className='image-container'>
              <Image src={selectedData.img} alt="Imagen 2" className='min_pr_image border border-gray-300 rounded' />
            </div>
          </button>
          <br></br>
          <button onClick={() => handleImg(selectedData.singe_pita_img)}>
            <div className='image-container'>
              <Image src={selectedData.singe_pita_img} alt="Imagen 3" className='min_pr_image border border-gray-300 rounded'  style={{ width: '140px', height: '140px' }}/>
            </div>
          </button>

       </div>



    </div>

    <div className="col2img w-3/10 p-1 flex flex-col justify-between m-auto h-full mr-2">
      <Image src={sliderImg} alt="Imagen 4" width={500} height={500} className='m-auto med_pr_image object-cover'/>
     <div>
        <button className="btnbcolor inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300" type="button" onClick={e => addTocart(e)}>
          <p className='mr-1'>Añadir al pedido </p>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-auto">
            <circle cx="9" cy="21" r="1"/>
            <circle cx="20" cy="21" r="1"/>
            <path d="M21 15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8l2 5h5a2 2 0 0 1 2 2z"/>
          </svg>
        </button>

             <CartComponent data={{ type_component: 'simpleLink', products_added: [] }}/>

     </div>

    </div>

    <div className="w-[80%] md:w-[90%] p-2 border border-gray-100 rounded descbox">
      <div className="h-[auto] bg-gray-50 p-3 flex flex-col justify-between mt-7">

          <ul className="max-w-lg divide-y divide-gray-100 gray:divide-gray-700">

            {selectedData.features.generic.map((item, index) => (
              <li key={index} className="border-none">
                <div className="flex items-center space-x-4 mt-4 mb-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-black">
                      {item.key}
                    </p>
                    <p className="text-xs text-gray-500 truncate dark:text-gray-400">
                      {item.value}
                    </p>
                  </div>
                </div>
              </li>
            ))}

            {selectedData.features.bag.map((item, index) => (
              <li key={index} className="mt-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-black">
                      {item.key}
                    </p>
                    <p className="text-xs text-gray-500 truncate dark:text-gray-400">
                      {item.value}
                    </p>
                  </div>
                  {item.price && (
                    <div className="inline-flex">
                      <span className="bg-blue-700 text-white px-2 py-1 rounded text-xs">
                        {item.total}
                      </span>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
          
      </div>
    </div>
  </div>


}

</div>
</div>



)}