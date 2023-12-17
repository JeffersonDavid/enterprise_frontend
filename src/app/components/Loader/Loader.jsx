
export default function Loading() {
  
    console.log('componente ejecutado loader')
    return(

        <div className='product-box secure-container flex justify-center items-center' > 
            <div className="mbfetcher">   
                <div className="flex justify-center items-center mt-10">
                    <div className="mbfetcher animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
                    <span className="absolute"> Cargando...</span>
                </div>
            </div>
        </div>
          );

}
