
'use client';

import Sl1 from '../../../../public/images/sl1.jpg';
import Sl2 from '../../../../public/images/sl2.jpg';
import rarrow from '../../../../public/images/right-arrow.png';
import larrow from '../../../../public/images/left-arrow.png';
import {useEffect} from 'react'
import Image from 'next/image';
import React from 'react'

export default function MyCarousel()  {

    useEffect(() =>{
        console.clear();
        console.log(Sl1.src)
    })

const [position, setPosition] = React.useState(0);
const [img_style, setStyle]= React.useState({'width':'100% !important'});
const [car_style, setCarStyle]= React.useState({'display':'block !important','margin':'auto !important'});
const [status, setStatus]= React.useState('block');

let array = [
    { title:'Slide 1', img:Sl1.src , content:'test.......................'},
    { title:'Slide 2', img:Sl2 , content:'test.......................'},   
]

async function fadeout(){
   setStatus('none')
   setStyle({'-webkit-transition': 'opacity 3s ease-in-out','opacity': 0});
   await new Promise(resolve => setTimeout(resolve, 3000));
}

async function fadeIn(){
        setStyle({'-webkit-transition': 'opacity 1s ease-in-out','opacity':1});
        setStatus('block')
}

async function prev(){
    if(!(position <= 0)){
        if( position >= 0 && position < ((array.length))){
            await fadeout();
            setPosition( position - 1)
            await fadeIn();
            
        }
    }
}

async function next(){
    if( position >= 0 && position < ((array.length)-1)){
        await fadeout();
        setPosition( position + 1)
        await fadeIn();
    }
}

return(<div className='secure-container flex justify-center items-center'> 


<div className='inline-block'>
<div class="max-w-sm rounded overflow-hidden shadow-lg">
 
<Image src={Sl1} alt='Pita blanco'></Image>

  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>


<div className="flex justify-center mt-4 sliderbtn"> {/* Usamos justify-center para centrar los botones horizontalmente */}
      <button className="slb-l bg-gray-300 hover:bg-gray-200 text-gray-500 font-bold py-1 px-1 rounded-l">
      <Image height={40} width={40} src={larrow}/>
      </button>
      <button className="slb-r bg-gray-300 hover:bg-gray-200 text-gray-500 font-bold py-1 px-1 rounded-r">
         <Image height={40} width={40} src={rarrow}/>
      </button>
    </div>

</div>
      
</div>)}