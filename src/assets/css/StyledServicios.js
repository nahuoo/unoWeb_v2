import Styled from 'styled-components'

export const ServiciosWrapper = Styled.div `
    height: 70vh;
    display:flex;
    padding: 15vh;
    justify-content: center;
    align-items: flex-start;
    
    @media screen and (max-width: 500px) {
        height: 180vh;
        flex-direction:column;
        padding-top: 20vh;
        align-items: center;
        justify-content: center;
        
    }
    
    
`

export const Card = Styled.div `
    height: 50vh;
    width:17vw;
    padding:5vh;
    margin: 10vh;
    background: rgba(230,230,230,230);
    font-family: 'Archivo', serif;
    font-size:1rem;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    -webkit-box-shadow: 2px 6px 7px -4px rgba(0,0,0,0.75);
    -moz-box-shadow: 2px 6px 7px -4px rgba(0,0,0,0.75);
    box-shadow: 2px 6px 7px -4px rgba(0,0,0,0.75);
    p{
        text-align:center;
    }
    i{
        font-size: 8rem;
        margin-bottom: 20px;
    }

    @media screen and (max-width: 500px) {
        height: auto;
        margin:0;
        padding-top: 10vh;
        width:60%;
        margin-bottom: 10vh;
    }
    
`