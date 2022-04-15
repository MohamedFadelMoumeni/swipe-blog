import { HeaderContainer, MainWebsite } from "./header.styles";
import Image from "next/image";


const Header = () => {
    return (
        <HeaderContainer >
            <div>Logo</div>
            <MainWebsite>Main website</MainWebsite>
        </HeaderContainer>
    )
}

export default Header