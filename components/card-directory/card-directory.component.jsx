import {Directory} from "./card-directory.styles"
import Container from "../container/container.component"
import CardHero from "../card-hero/card-hero.component"

const DirectoryCard = () => {
    return (
        <Container>
            <Directory>
                <CardHero rgba="rgba(127, 17, 224, .5)" backImg="/assets/related-post-03.jpg"/>
                <CardHero rgba="rgba(83, 100, 181, .5)" backImg="/assets/related-post-04.jpg"/>
                <CardHero rgba="rgba(186, 83, 134, .5)" backImg="/assets/related-post-05.jpg"/>
                <CardHero rgba="rgba(57, 186, 181, .5)" backImg="/assets/related-post-06.jpg"/>
            </Directory>
        </Container>

    )
}

export default DirectoryCard;