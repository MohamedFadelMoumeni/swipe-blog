import { HeaderContainer, MainWebsite } from "./header.styles";
import Image from "next/image";


const Header = () => {
    return (
        <HeaderContainer >
            <Image src="/Logo-white.png" width={150} height={70}/>
            <MainWebsite>Main website</MainWebsite>
        </HeaderContainer>
    )
}

export default Header