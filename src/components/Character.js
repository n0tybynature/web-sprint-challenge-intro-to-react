import React from "react"
import styled from "styled-components"

const CharName = styled.h3`
color: black;
margin: 20px;
&:hover {
    color:rgb(245, 86, 205);
}

   



`;

 export default function Character(props){

    const { data } = props;

    return (

        <div className= "characterbox"> 
            <div className="characterborder"> 
                <CharName>{data.name}</CharName>
                <img className="charimg" src={data.image}/>
                 <p className="charstat">{data.status}</p>
                 <p className="charloc">{data.location.name}</p>
                 <p className="charspec">{data.species}</p>

              

            </div>
        </div>


    )


    
}
