import React from 'react'
import { ResultCategory } from './'
import data from '../assets/data.json'

const Summary = () => {
    return (
        <section className='summary'>
            <h2 className="summary--headline">Summary</h2>
            {data.map(category => (<ResultCategory data={category} key={category.category} />))}
            <button className="continue">Continue</button>
        </section> 
  )
}

export default Summary