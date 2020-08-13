import styled from 'styled-components';

  

const PageHeader = styled.div `

  display: flex;  
  flex-wrap: nowrap;
  margin: 0px; 
  padding: 0px;
  position: relative;
  align-items:center;
  justify-content:space-between;
  width: 100%;
  max-width: 100%;
  height: 110vh;  
  overflow:hidden;

    .uno{
        position:absolute;
        height: 120%;
        top:-10%;
        left: 87%;

    }
    .svg{
        position:absolute;
        right: 0%;
    }

    .info{
        cursor: pointer;
        top: 30%;
        right: 0%;
        position:absolute;
        background: white;
        height: 4em;
        width: ${(props) => props.verdadero ? '35%' : '3%'} ;
        color: black;
        padding:10px;
        -webkit-box-shadow: -5px 5px 19px -2px rgba(0,0,0,0.75);
        -moz-box-shadow: -5px 5px 19px -2px rgba(0,0,0,0.75);
        box-shadow: -5px 5px 19px -2px rgba(0,0,0,0.75);
        :hover{
            background: rgba(230,230,230);
        }
    }
    
    i{
        font-size: ${(props) => props.verdadero ? '0.9em' : '1.8em'};
    }

    a{  
        display: ${(props) => props.verdadero ? '' : 'none'};
        color: black;
        width: 30%;
        text-decoration: none;
        :hover{
            color:grey;
        }
    }
    .contenedor{
        text-align: left;
        position: relative;
        align-items: space-between;  
        height:25vh;
        padding:2rem;
        padding-top:1rem;
        width:40vw;
        background: rgba(199, 0, 5, 0.8);
        top: -15%;     
    }

    .imagen{
        width: "150";
        align-content:center;
        justify-content: flex-start;
        margin-left: 24px;
        margin-top: 14%;
        z-index: 1;
    }

    span{
        position: absolute;
        top:34vh;
        margin-left:40%;
    }
    .button{
        position: relative;
        text-align: center;
        background-color: transparent;
        border: 2px solid black;
        padding: 4px;
        border-radius: 0px;
        text-decoration: none;
        color: black;
        height: 1rem;
        left: 40%;
        width: 16vw;
        font-size: 1em;
        margin-top: 10px;
        letter-spacing: 1;
        cursor:pointer;
            :hover{
                background: black;
                border: 2px solid black;
                color: white;
                }
        font-family: 'Roboto', sans-serif;
    }

    .buttonNovedades{
        position:relative;
        display: ${(props) => props.verdadero ? 'block' : 'none'};
        background-color: transparent;
        border: 2px solid black;
        color: black;
        height: 2rem;
        width: 13vw;
        font-size: 1em;
        margin: 2px 2px;
        letter-spacing:1;
        cursor:pointer;
            :hover{
                background: black;
                border: 2px solid black;
                color: white;
                }
        font-family: 'Roboto', sans-serif;
    }

    .descripcion{
        position:absolute;
        background: rgba(255, 255, 255, 0.5);
        height: 12vh;
        top: 70vh;
        width:100%;
    }

    h3{
        
        font-family: 'Roboto', sans-serif;
        font-size: 1.5rem;
        padding-top:.5rem;
        letter-spacing: 0.5px;
        color: black;
        text-align: center;
        
    }

    h1{
        font-family: 'Neuton', serif;
        font-size: 5rem;
        letter-spacing: 0.5px;
        color: white;
        text-align: left;
        margin-left: 1vw;
        margin-bottom: 15px;
        
    }

    h2{
        margin: 2%;
    }
@media screen and (max-height: 800px) {
    h1{
        font-size:4rem;
        max-width: 100vh;
    }
   
    
}

    h2{
        font-family: 'Roboto', sans-serif;
        font-size:1rem;
        letter-spacing: 1.5px;
        color: black;
        margin-left: 1vw;
    }
    
    @media screen and (max-width: 400px) {
        height: 117vh;      
     }
    
    @media screen and (max-width:1076px) {
     .contenedor{
        width:500px;
        height:100px;
      }
      .button{
            width: 150px;
            
            }
    }
    @media screen and (max-width: 425px) {
        .svg{
            display:none;
        }
        span{
             top:150px;
            left:0x;
            
    }
        img{
            height:150px;
        }
        h1{
        margin-left: 0;
    }

    }

    /* mobil */
     @media screen and (max-width: 500px) {

        .info{
        display:none;
        }

        .contenedor{
        width:350px;
        height:auto;
        padding:3px;
        padding-top:0rem;
        top:-100px;
        }

        .descripcion{
        position:absolute;
        background: rgba(255, 255, 255, 0.5);
        height: 24vh;
        top: 65vh;
        width:100%;
    }

      span{
        position: absolute;
        top:10vh;
        left:-10vw;
    }

    h1{
        padding:3px;
        margin-left: 3px;
        font-size: 2.5rem;
    }

      
    

     .button{
            min-width: 160px;
            background: rgba(199, 0, 5, 0.8);
            left: 40%;
            margin-top: 200px;
            border: 1px solid #000;
        }
    }

    /*tablet*/

    @media screen and (max-height: 320px) {
        height: 150vh; 

    .contenedor{
        top:-65px;
        height: 110px;
    }
    .imagen{
        width: 2vw;
    }

    span{
        position: absolute;
        top:20vh;
        left:27vw;
        max-width:10px;
    }

    .descripcion{
        position:absolute;
        background: rgba(255, 255, 255, 0.5);
        height: 24vh;
        top: 100vh;
        width:100%;
        
    }
    .button{
            min-width: 160px;
            background: rgba(199, 0, 5, 0.8);
            left: 40%;
            margin-top: 100px;
            border: 1px solid #000;
    }}
`;

export default PageHeader;