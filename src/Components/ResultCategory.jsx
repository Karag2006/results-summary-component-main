import React from 'react'

const ResultCategory = ({data}) => {
  return (
    <div className={'summary--category ' + data.category}>
      <div className='summary--category-identifier'>
        <span>{data.category}</span>
      </div>
      <div className='summary--category-score'>
        <span>{data.score}</span>
        <span> / 100</span>
      </div>
    </div>
  )
}

export default ResultCategory