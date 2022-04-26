import {HeroContainer, Wrapper, Title, Subltitle, Creator, Text} from "./hero.styles"
import Container from "../container/container.component";
import Header from "../header/header.component";
import DirectoryCard from "../card-directory/card-directory.component";
import Fade from 'react-reveal/Fade';

import Image from "next/image"

const Hero = () => {
    return (
        <HeroContainer>
            <Container>
                <Wrapper>
                    <Header />
                    <Fade top>
                    <Title>SwipInv Agency</Title>
                    <Subltitle>
                    Agence de marketing digitale créative, qui donne la force <br /> à votre réussite.
                    </Subltitle>
                  
                    </Fade>
              
                </Wrapper>
               
            </Container>

        </HeroContainer>

    )
}

export default Hero;
