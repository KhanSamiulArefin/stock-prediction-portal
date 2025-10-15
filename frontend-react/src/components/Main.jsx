import React from 'react'
import Button from './Button'
import Footer from './Footer'
import Dashboard from './dashboard/Dashboard'

const Main = () => {
  return (
    <>
  
    <div className='container'>
        <div className='p-5 text-center bg-light-dark rounded'>
            <h1 className='text-light'>This is the stock prediction portal</h1>
            <p className='text-light'>The application utilizes machine learning models to predict stock market.</p>
            <Button text='Explore Now' class='btn-info' url="/dashboard"/>

        </div>
    </div>
    
   
    </>
    
  )
}

export default Main