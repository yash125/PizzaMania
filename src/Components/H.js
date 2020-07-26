import React from 'react'

const H =(props)=>{
    return(
        <button onClick={()=>props.hk(props.value)}>
            {props.value}
        </button>
    )
}
export default H;