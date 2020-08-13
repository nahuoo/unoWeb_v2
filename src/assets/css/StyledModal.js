import Styled from 'styled-components'

const StyledModal = Styled.div`
 
    height: 20vh;
    min-width: 250px; /* Set a default minimum width */
    margin-left: -125px; /* Divide value of min-width by 2 */
    background-color: #ddd;
    z-index:10; /* Black background color */
    color: #000; /* White text color */
    text-align: center; /* Centered text */
    border-radius: 10px; /* Rounded borders */
    padding: 16px; /* Padding */
    position: fixed; /* Sit on top of the screen *//* Add a z-index if needed */
    left: 45%; /* Center the snackbar */
    bottom: 30px; /* 30px from the bottom */
    opacity: ${(props) => props.visible ? 1 : 0};
    transform: ${(props) => props.visible ?  'none' : 'translateY(20vh)'};
    visibility: ${(props) => props.visible ?  'visible' : 'hidden'} ;
    transition: opacity 1.5s ease-in, transform .5s ease-out;
    will-change: opacity, visibility;
    button{
      font-size: 1.5em
      margin-top: 15px;
      background:transparent;
      border: 2px solid black;
      :hover{
        background: black;
        color:white;
      }
    }
  `
  export default StyledModal