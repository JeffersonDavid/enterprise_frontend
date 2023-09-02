

import Image from 'next/image';
import pitablanco_img from '../../../public/images/pitablanco.webp'
import pitaint_img from '../../../public/images/pan-integral.webp'
import baclava_img from '../../../public/images/baclava.jpg'
import Link from 'next/link';
import Carton from '../../../public/images/carton.png'

export default function productData_(){

    let products = { 

        carton_img: <Image src={Carton} alt="Caja de pan pita" />, 
        ports:'2/3',
        storage:'Apto para congelar ( hasta 6 meses congelado )',
        pita_blanco:{
            src_img:pitablanco_img,
            df_image: <Image src={pitablanco_img} alt="Pan pita blanco bolsa"/>, 
            image: <Image src={pitablanco_img} width={200} height={200} alt="Pan pita blanco bolsa" className="rounded-t-lg m-auto product_img" />, 
            title:'Pan pita blanco',
            shortdesc:' Con ingredientes de alta calidad, ligero, versátil, delicioso, equilibrado en nutrientes y fácil de usar, el  pita blanco hará de tus comidas una experiencia extraordinaria...',
            source_page:'/blanco',
            bag:{
                quantity:6,
                weight : 300
            },
            box:{
                quantity:30,
                price:0.90,
                weight : 10
            },
            duration:20,
    
        },
        pita_integral:{
            src_img:pitaint_img,
            df_image: <Image src={pitaint_img} alt="Pan pita integral bolsa"/>, 
            image: <Image src={pitaint_img} width={200} height={200} alt="Picture of the author" className="rounded-t-lg m-auto product_img" />, 
            title:'Pan pita integral',
            shortdesc:'Rico en fibra y nutrientes, su textura suave y ligeramente crujiente, es perfecto para sándwiches, wraps y snacks saludables, encuéntralo en nuestra panadería + info...',
            source_page : '/integral',
            bag:{
                quantity:6,
                weight : 300
            },
            box:{
                quantity:30,
                price:0.90,
                weight : 10
            },
            duration:20,
        },
        
        baclava:{
            image: <Image src={baclava_img} width={250} height={250} alt="Picture of the author" className="rounded-t-lg m-auto" />, 
            title:'Dulces arabes',
            shortdesc:'test',
            source_page : ''
        },
    }

    return (products);
}
