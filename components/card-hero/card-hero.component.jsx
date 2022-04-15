import styled from "styled-components"

const CardHero = ({rgba}) => {
    return (
        <Container rgba={rgba}>
            <Title>Lorem ipsum dolor sit amet consectetur.</Title>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing.</Desc>
        </Container>

    )
}

export default CardHero;

const Container = styled.div`
display: flex;
flex-direction: column;
align-items:center;
justify-content:center;
height: 150px;
background-image:linear-gradient(${props => props.rgba}, ${props => props.rgba}), url(./assets/related-post-03.jpg);
background-position: center;
background-size: cover;
padding: 1rem;
color: #fff;
cursor:pointer;
transition: background 2s;
&:hover{
    background-image:linear-gradient(rgba(49, 149, 147, .4), rgba(49, 149, 147, .4)), url(./assets/related-post-03.jpg);
}
`;
const Title = styled.h3`
font-size: 1rem;
font-weight: bold;
text-align:center;
`;
export const Desc = styled.p`
margin-top: .5rem;
color: #fff;
font-size: .8rem;
text-align:center;
`;