import styled, {keyframes} from "styled-components";


const Spinner = () => {
    return (
        <Container>
            <div className="loader"></div>
        </Container>

    )
}

export default Spinner;



const load1 = keyframes`
0%,
80%,
100% {
  box-shadow: 0 0;
  height: 4em;
}
40% {
  box-shadow: 0 -2em;
  height: 5em;
}
`
  
  

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: row;
align-items:center;
justify-content:center;


.loader,
.loader:before,
.loader:after {
  background: #ffffff;
  -webkit-animation: ${load1} 1s infinite ease-in-out;
  animation: ${load1} 1s infinite ease-in-out;
  width: 1em;
  height: 4em;
}
.loader {
  color: #ffffff;
  text-indent: -9999em;
  margin: 88px auto;
  position: relative;
  font-size: 11px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.loader:before,
.loader:after {
  position: absolute;
  top: 0;
  content: '';
}
.loader:before {
  left: -1.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
`;