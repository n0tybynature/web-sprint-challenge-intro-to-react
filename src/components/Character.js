import React, {useEffect, useState} from "react"
import axios from "axios"
import styled from "styled-components"



export default function Character (props){
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData= () => {
            axios.get('https://rickandmortyapi.com/api/character')
            .get()
        }
    })


}