import React, {useState, useEffect} from "react"
import axios from "axios"
import styled from "styled-components"
import Character from "./Character"



export default function CharacterList (props){


    const [info, setInfo] = useState([]);

    useEffect(() => {
    
            axios.get('https://rickandmortyapi.com/api/character')
            .then( (res) => {
                console.log(res)
                setInfo(res.data.results)
            })
            .catch( (err) => {
                console.log(err)
            })
       
        
    },[])

    return (


        <div className="wrapper">

            {
               
                info.map( person => {
                    return <Character data={person}/>
                })

            }


        </div>


    )


}