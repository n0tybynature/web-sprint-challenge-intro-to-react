import React from "react"
import styled from "styled-components"



 export default function Character(props){

    const { data } = props;

    return (

        <div className= "characterbox">
            <div className="characterborder">
                <h3>{data.name}</h3>
                <img className="charimg" src={data.image}/>
                 <p className="charstat">{data.status}</p>
                 <p className="charloc">{data.location.name}</p>
                 <p className="charspec">{data.species}</p>

              

            </div>
        </div>


    )


    
}
