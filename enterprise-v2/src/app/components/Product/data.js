



import pitablanco_img from '../../../../public/images/pitablanco.webp'

import pitaint_img from '../../../../public/images/pan-integral.webp'

export default function dataset(){

const product_data = {

    integral : {

        

        features : 
        {
            bag : [
                

                { key : 'Bolsas en caja', value : 10 },
                { key : 'Duracion', value : 10 },
                { key : 'Almacenamiento', value : 10 },
                { key : 'Dimension bolsa', value : 10 },
                { key : 'Dimension caja ', value : 10 },
                { key : 'Pitas en bolsa ', value : 10 },
            ],
            generic:{
                long_desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero ut ultrices. Sed dapibus sapien at libero vehicula, in venenatis ligula suscipit.',
                img:pitaint_img
            }
           
        }
        



    },
   
}


return product_data;

}