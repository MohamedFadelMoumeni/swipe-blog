import {Directory} from "./card-directory.styles"
import Container from "../container/container.component"
import CardHero from "../card-hero/card-hero.component"

const DirectoryCard = () => {
    return (
        <Container>
            <Directory>
                <CardHero rgba="rgba(127, 17, 224, .5)"/>
                <CardHero rgba="rgba(83, 100, 181, .5)"/>
                <CardHero rgba="rgba(186, 83, 134, .5)"/>
                <CardHero rgba="rgba(57, 186, 181, .5)"/>
            </Directory>
        </Container>

    )
}

export default DirectoryCard;