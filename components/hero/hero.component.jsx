import {HeroContainer, Wrapper, Title, Subltitle} from "./hero.styles"
import Container from "../container/container.component";
import Header from "../header/header.component";

const Hero = () => {
    return (
        <HeroContainer>
            <Container>
                <Wrapper>
                    <Header >fff</Header>
                    <Title>Appy launches new <br /> thmetic solutions</Title>
                    <Subltitle>
                    Curious about how your favorite product was created? Hear from the team about how it was built, and how continued improvements are made.
                    </Subltitle>
                </Wrapper>
            </Container>

        </HeroContainer>

    )
}

export default Hero;
