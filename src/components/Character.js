import React from "react"
import styled from "styled-components"

const CharName = styled.h3`
color: black;
margin: 20px;
&:hover {
    color:rgb(245, 86, 205);
}

   



`;

const Status = styled.p`

font-size:13pt;

color:${(pr) => pr.satan}


`






 export default function Character(props){

    const { data } = props;

    const getStatus = (info) => {
        if ( info === "Alive" ) {
            return "green";
        } else if( info === "Dead" ){
            return "red"
        } else {
            return "yellow"
        }
    }


    return (

        <div className= "characterbox"> 
            <div className="characterborder"> 
                <CharName>{data.name}</CharName>
                <img className="charimg" src={data.image}/>
                <h3><Status satan={getStatus(data.status)}>{data.status}</Status></h3>
                 <p className="charloc">{data.location.name}</p>
                 <p className="charspec">{data.species}</p>

              

            </div>
        </div>


    )


    
}
