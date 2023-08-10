
'use client';

import Sl1 from '../../../../public/images/sl1.jpg';
import Sl2 from '../../../../public/images/sl2.jpg';
import rarrow from '../../../../public/images/right-arrow.png';
import larrow from '../../../../public/images/left-arrow.png';
import {useEffect} from 'react'
import Image from 'next/image';
import React from 'react'

export default function Slider()  {


    let sliderData = [

        {
            title:'Descubre nuevas fronteras culinarias con nuestro pita', img:Sl1 , content:'Descubre cómo transformar nuestro pita en auténticas obras maestras culinarias. Desde exquisitas opciones llenas de sabor hasta platos sorprendentes y saludables.', tags:['recetas','culinarias','mediterranea']
        }, 

        {
            title:'The Coldest Sunset 2 222', img:Sl2 , content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.', tags:['photography','travel','winter']
        }, 
    ];


    const [position, setPosition] = React.useState(0);
    const top_range = sliderData.length - 1;


    const prev = () => {
        if(position > 0 ){
            setPosition(position - 1)
        }
    }

    const next = () => {
        if(position < top_range){
            setPosition(position + 1)
        }
    }

 
return(<div className='secure-container flex justify-center items-center'> 

    <div className='inline-block'>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <Image src={sliderData[position].img} alt='Pita blanco'></Image>
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{ sliderData[position].title }</div>
            <p className="text-gray-700 text-base">
            { sliderData[position].content }
            </p>
        </div>
        <div className="px-6 pt-4 pb-2">
            {
                sliderData[position].tags.map((item, index) => (
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{item}</span>
                ))
            }
        </div>
    </div>


<div className="flex justify-center mt-4 sliderbtn"> {/* Usamos justify-center para centrar los botones horizontalmente */}
      <button onClick={prev} className="slb-l bg-gray-300 hover:bg-gray-200 text-gray-500 font-bold py-1 px-1 rounded-l">
      <Image height={40} width={40} src={larrow} className='arrowb' />
      </button>
      <button onClick={next} className="slb-r bg-gray-300 hover:bg-gray-200 text-gray-500 font-bold py-1 px-1 rounded-r">
         <Image height={40} width={40} src={rarrow} className='arrowb' />
      </button>
    </div>

</div>
      
</div>)}