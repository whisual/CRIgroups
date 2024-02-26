import React from 'react'
import Award from '../assets/1.png'
import Award2 from '../assets/2.png'
import Materials from '../assets/3.png'


const heroic = () => {
  return (
    <div>
      <div className='flex justify-evenly'>
        <div>
           <img src={Award} alt="" className='w-98 h-2/3' />
        </div>
        <div className='m-5'>
            <h3 className='font-bold my-2'>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h3>
            <p>⚫ C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</p>
            <p>⚫ C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</p>
            <img src={Award2} alt="" className='my-3 mx-2' />
            <p>Government of India has awarded the <span className='font-semibold'>"National Energy Conservation Award 2018"</span> . Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
        </div>
    </div>
    <div className='text-center'>
      <h3>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</h3>
    </div>
    <div className='flex justify-center mt-2'>
      <img src={Materials} alt="" className='w-2/3 items-center'/>
    </div>
    <div className='text-center'>
      <p className='text-sm'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
    </div>
    <div className='h-1 bg-red-500 mx-2 my-3'></div>
    <div className='text-center mt-3'>
      <p className='text-sm font-bold'>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
    </div>
    <div className='text-center my-4 mx-2'>
      <p className='text-sm'>CHEMICALS & PROCESS | POWER | WATER & WASTE WATER | OILS & GAS | PHARMA | SUGARS & DISTILLERIES | PAPER & PULP | MARINE & DEFENCE | METAL & MINING | FOOD & BEVERAGE | PETROCHEMICAL & REFINERIES | SOLAR | BUILDING | HVAC | FIRE FIGHTING | AGRICULTURE & RESIDENTIAL</p>
    </div>
    </div>
    
  )
}

export default heroic
