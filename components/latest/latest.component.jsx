import styled from "styled-components"
import Container from "../container/container.component";
import Image from "next/image"
import {IoIosArrowDown} from "react-icons/io"
import Fade from "react-reveal"
import { useRouter } from "next/router";
import moment from "moment";


const Latest = ({posts}) => {

    const router = useRouter()
    return (
        <Wrapper>
        <Container>
            <LatestContainer>
                <Title>Lastest Blog</Title>
                <Directory>
                   {
                       posts?.length > 0 && posts?.map(post => (
                        <Fade key={post.id} top>
                        <Card onClick={() => router.push(`/${post.id}`)}>
                            <Image src={post.medium_small ? post.medium_small : "/assets/news-01.jpg"} width="300" height="300" />
                            <CardTitle>{post.title}</CardTitle>
                            <CardDesc>
                                {post.content.slice(0, 50).replace(/(<([^>]+)>)/gi, "")+ "..."}
                            </CardDesc>
                            <Creator>
                            <Text>By <strong>Med Tabit ,  </strong>{moment(new Date(post.date)).format('MMMM d , YYYY') }</Text>
                        </Creator>
    
                        </Card>
                        </Fade>
                       ))
                   }
                    
                 


                </Directory>


            </LatestContainer>
            <MoreDiv>
            <More>Load More <IoIosArrowDown style={{margin: "0 5px"}}/></More>
            </MoreDiv>

        </Container>
        </Wrapper>

    )
}

export default Latest;

const LatestContainer = styled.div`
padding: 4rem 0;


`;
const Title = styled.h1`
color: #fff;
font-size: 2rem;

`;
const Directory = styled.div`
padding: 2rem 0;
width: 100%;
display: grid;
column-gap: 1.5rem;
row-gap: 1.5rem;
@media (max-width: 640px){
    grid-template-columns: repeat(1, minmax(0, 1fr));
}
@media (min-width: 640px){
    grid-template-columns: repeat(3, minmax(0, 1fr));
}
@media  (min-width: 900px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    
}
`;
export const Card = styled.div`
display: flex;
flex-direction: column;
cursor: pointer;
img{
    object-fit: fill;
}
`;
const CardTitle = styled.h3`
color: #fff;
font-size: 1.4rem;
font-weight: bold;
padding: .6rem 0;
`;
export const CardDesc = styled.p`
font-size: .8rem;
color: rgb(162 162 168/.7);
`;
export const MoreDiv = styled.div`
width: 100%;
display: flex;
flex-durection: row;
align-items:center;
justify-content:center;
`;
export const More = styled.button`
padding: .7rem 2rem;
color: #fff;
background: #39bab4;
margin: auto;
border: 0;
font-size: 1rem;
display: flex;
flex-direction: row;
align-items:center;
cursor: pointer;
`;
export const Wrapper = styled.div`
width: 100%;
background-color: #002e26;

padding-bottom: 1rem;
`;

export const Creator = styled.div`
display: flex;
flex-direction: row;
align-items:center;
margin-top: 1.5rem;

`;
export const Text = styled.span`
color: #fff;
margin-left: .6rem;
font-weight: light;
font-size : .7rem;

`;