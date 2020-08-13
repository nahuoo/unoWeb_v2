import styled from 'styled-components'

const StyledFooter = styled.footer`
  position: relative;
  height:50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: #273441;
  padding: 7.5vh 0;
  color: #bab6b6;
  border-bottom: 3px solid #701602;

  ul {
    height: 18vh;
  }
  
  ul li{
    padding: 0 0 0.5rem;
    margin:0 0 0.5rem;
    font-weight: normal;
    font-size: 9.5px;
    font-family: 'Archivo', sans-serif;
    letter-spacing: 0.5pt;
    text-align: center;
  }
  ul li a {
    color: inherit;
    text-decoration: none;
  }
  ul li a:hover {
    color: #b30000;
  }
  .copyright {
    font-size: 8px;
    position: absolute;
    bottom: 10%;
  }
  .icon {
    display: none;
  }
  .direction {
    line-height: 1.5; 
  }
  .titulo{
    color:white;
    font-size:10px;
  }

  @media (min-width: 630px) {
    padding: 10vh;
    flex-direction: row;

    ul{
      padding: 5px
    }
    ul li{
      font-size: 10px;
      letter-spacing: 1pt;
    }
    .copyright{
      font-size: 9px;
      bottom: 5px;
      letter-spacing: 0.5pt;
    }
    .icon{
      display: initial;
    }
  }

  @media (min-width: 1000px) {
    padding: 5vh;

    ul li{
      font-size: 15px;
      letter-spacing: 1.5pt;
      margin-bottom: 1em;
    }
    .copyright {
      font-size: 12px;
      bottom: 5%;
      letter-spacing: 1.5pt;
    }

    .titulo{
    color:white;
    font-size:20px;
  }
  }
 
`

export default StyledFooter