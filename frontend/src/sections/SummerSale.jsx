import React from 'react'
const SummerSale = () => {
  return (
    <section className='my-12 flex justify-between items-center p-12 bg-gradient-to-r from-slate-100 via-slate-200 to-slate-300 gap-6'> 
        <div className='w-3/5 '>
            <h4 className='font-bold text-5xl'>Summer Sale 50% !!!</h4>
            <p className='uppercase font-bold mt-8 mb-6'>Men's Leather Formal Wear Shoes</p>
            <button className='bg-gray-900 text-white py-2 px-6 text-md rounded-[20px]'>Go to store</button>
        </div>
        <div className='w-2/5 hidden sm:flex'>
            <img className='min-w-0.5' src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/90c3be6f7da944acb62f979c335ce45f_9366/SL_72_OG_Shoes_Green_IF1938_01_standard.jpg" width={250} alt="" />
            <img className='min-w-0.5' src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0dd1a9f8b16a4502aa2daf4e01822ecc_9366/Gazelle_Bold_Shoes_Black_HQ6912_01_01_hover_standard.jpg" width={250} alt="" />
        </div>
    </section>
  )
}

export default SummerSale