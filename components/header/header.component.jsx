import { HeaderContainer, MainWebsite } from "./header.styles";
import Image from "next/image";
import Link from "next/link";


const Header = () => {
    return (
        <HeaderContainer >
            <Link href="/">
            <Image src="/Logo-white.png" width={150} height={70} cursor="pointer"/>
            </Link>
            <MainWebsite>Main website</MainWebsite>
        </HeaderContainer>
    )
}

export default Header