import React, { memo, useRef, useEffect } from 'react'

const Word = (props) => {
    const { text, active, correct } = props
    const rerender = useRef(0)

    if(correct === true) {
        return <span className="word color correct">{text + ' '} </span>
    }
    if(correct === false) {
        return <span className="word color incorrect">{text + ' '} </span>
    }
    if(active) {
        return <span className="word active">{text + ' '} </span>
    }
  return (
    <span className="word">{text + ' '}</span>
  )
}

export default memo(Word)