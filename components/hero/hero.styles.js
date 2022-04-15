import styled from "styled-components"

export const HeroContainer = styled.div`
width: 100%;
height: 100vh;
background-color: #330000;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cdefs%3E%3CradialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23000000'/%3E%3Cstop offset='1' stop-color='%23330000'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'%3E%3Cstop offset='0' stop-color='%2300A48E' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%2300A48E' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='400'/%3E%3Cg fill-opacity='0.4'%3E%3Ccircle fill='url(%23b)' cx='267.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='532.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='400' cy='30' r='300'/%3E%3C/g%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;
color: #fff;
`;
export const Wrapper = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content:center;
padding-top: 1rem;
position: relative;

`;
export const Title = styled.h1`
color: #fff;
font-size: 3.5rem;
@media (max-width: 500px){
    text-align:center;
    padding-top: 1rem;
    font-size: 3rem;
}
`;
export const Subltitle = styled.p`
color: #fff;
font-size: 1rem;
width: 60%;
padding-top: .5rem;
@media (max-width: 500px){
    width: 100%;
    text-align:center;
}
`;