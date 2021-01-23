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

color:${(pr) => pr.satan};



text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px ${(pr) => pr.satan}, 0 0 40px ${(pr) => pr.satan}, 0 0 50px ${(pr) => pr.satan}, 0 0 60px ${(pr) => pr.satan}, 0 0 70px ${(pr) => pr.satan};



`
const Loc = styled.span`

font-size: 9pt;
color:gray;


`









 export default function Character(props){

    const { data } = props;

    const getStatus = (info) => {
        if ( info === "Alive" ) {
            return "green";
        } else if( info === "Dead" ){
            return "red"
        } else {
            return "orange"
        }
    }


    return (

        <div className= "characterbox"> 
            <div className="characterborder"> 
                <CharName>{data.name}</CharName>
                <img className="charimg" src={data.image}/>
                <h3><Status satan={getStatus(data.status)}>{data.status === "unknown" ? 'Unknown' : data.status}</Status></h3>
                
                <p className="charspec"><b>Species: </b>{data.species}</p>
                <Loc>Last known Location:</Loc>
                 <p className="charloc">{data.location.name}</p>

              

            </div>
        </div>


    )


    
}
