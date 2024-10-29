import React from 'react'

const Newsletter = () => {
  return (
    <section className='text-center my-16'>
        <h4 className='font-bold text-3xl'>Get Exclusive Offers On Your Email !</h4>
        <p className='uppercase font-bold mt-8 mb-6'>Subscribe On Our Newsletter and stay update</p>
        <div className='ring-1 ring-slate-900/10 hover:ring-slate-900/15 w-fit bg-gray-100 mx-auto rounded-[20px]'>
            <input className='px-6 py-2 text-md rounded-xl bg-transparent outline-none' type="text" placeholder='Your email adress'/>
            <button className='bg-gray-900 text-white py-2 px-6 text-md rounded-[20px]'>Subscribe</button>
        </div>
    </section>
  )
}

export default Newsletter