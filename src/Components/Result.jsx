import React from 'react'
import { Circle } from './'

const Result = () => {
    return (
        <section className='result'>
            <h2>Your Result</h2>
            <Circle />
            <h2 className='result--gratulation'>Great</h2>
            <p>You scored hoght than 65% of the people who have taken these tests.</p>
        </section>
    )
}
export default Result