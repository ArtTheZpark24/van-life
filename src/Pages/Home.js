import React from 'react'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='home-container'>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3kWCmviI2CnHkIUafvJOK-5Lzzwn8iRhZug&usqp=CAU" alt=""
    
    className='van'
    />

    <h1 className='h1-van'>Don't squeeze in sedan when you could relax in a van</h1>
    <p className='p-van'>
    Our mission is to envilven  your road trip with the perfect travel van rental. 
    Our vans are recertified before each trip to ensure your travel plans can go off  without hitch
    (hitch  cost extra)


 
    </p>
    
    <p>
    
    Our team is full of vanlife enthuasiasts  who know firsthand the magic of touring the world on 4 wheels.
    </p>
    <div className='distination'>
    <h2>
    Your destination is waiting.
    Your van is ready.
    </h2>
    <button className='btn-explore'>
    Explore our vans
    </button>
    </div>
    <Footer/>
    </div>
  )
}

export default Home