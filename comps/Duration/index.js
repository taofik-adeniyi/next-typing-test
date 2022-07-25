import React from 'react'

const Duration = (props) => {
    const { time, onClick } = props
  return (
    <button onClick={()=>onClick(time)} style={{height: '2rem'}}>{time}</button>
  )
}

export default Duration