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
                    <Title>Appy launches new <br /> thmetic solutions</Title>
                    <Subltitle>
                    Curious about how your favorite product was created? Hear from the team about how it was built, and how continued improvements are made.
                    </Subltitle>
                    <Creator>
                        <Image src="/assets/avatar.jfif" width="50px" height="50px" style={{borderRadius: "50%"}}/>
                        <Text>By <strong>Micheal Osman </strong>· Nov 2, 2022</Text>
                    </Creator>
                    </Fade>
              
                </Wrapper>
               
            </Container>

        </HeroContainer>

    )
}

export default Hero;
