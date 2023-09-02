



import pitablanco_img from '../../../../public/images/pitablanco.webp'

import pitaint_img from '../../../../public/images/pan-integral.webp'

export default function dataset(){

const product_data = {

    integral : { 
        features : 
        {
                bag : [
                    { key : ' Cantidad (caja) ', value : `Cada caja contiene ${30} bolsas en cada caja.` },
                    { key : ' Cantidad (bolsa) ', value : `Cada bolsa contiene ${6} pitas en cada bolsa.` },
                    { key : ' Medidas ( pita ) ', value : `Cada pita mide 20 cm.` },
                    { key : ' Precio ( bolsa ) ', value : `El precio de cada bolsa es de `, price: true , total: '1€'},
                    { key : ' Precio ( bolsa ) ', value : `El precio de cada caja es de `, price: true , total: '26 €'},
                ],
                generic:[
                    { key : ' Duracion ', value : 'En temperatura ambiente: 15 días. Congelado hasta 3 meses.' },
                    { key : ' Almacenamiento ( pita ) ', value : `Es apto para congelar.` },
                ]
            
        },
        img:pitaint_img

    },

    blanco : { 
        features : 
        {
                bag : [
                    { key : ' Cantidad (caja) ', value : `Cada caja contiene ${30} bolsas en cada caja.` },
                    { key : ' Cantidad (bolsa) ', value : `Cada bolsa contiene ${6} pitas en cada bolsa.` },
                    { key : ' Medidas ( pita ) ', value : `Cada pita mide 20 cm.` },
                    { key : ' Precio ( bolsa ) ', value : `El precio de cada bolsa es de `, price: true , total: '1€'},
                    { key : ' Precio ( bolsa ) ', value : `El precio de cada caja es de `, price: true , total: '26 €'},
                ],
                generic:[
                    { key : ' Duracion ', value : 'En temperatura ambiente: 15 días. Congelado hasta 3 meses.' },
                    { key : ' Almacenamiento ( pita ) ', value : `Es apto para congelar.` },
                ]
            
        },

        img:pitablanco_img
    }
   
}


return product_data;

}