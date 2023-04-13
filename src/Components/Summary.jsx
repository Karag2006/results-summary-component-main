import React from 'react'
import { ResultCategory } from './'
import data from '../assets/data.json'

const Summary = () => {
    return (
        <section className='summary'>
            <h2 className="summary--headline">Summary</h2>
            <div className="summary--categories">
                {data.map(category => (<ResultCategory data={category} key={category.category} />))}
            </div>
            <button className="continue">Continue</button>
        </section> 
  )
}

export default Summary