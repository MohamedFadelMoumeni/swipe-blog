import { getAllPosts } from "../lib/api"
import { useRouter } from "next/dist/client/router";
import styled from "styled-components"
import Image from "next/image"
import Spinner from "../components/spinner/spinner.component";
import Header from "../components/header/header.component";
import moment from "moment";

export const getStaticProps = async (context) => {
    const allPosts = await getAllPosts();
    const {params} = context;
    const singlePost = allPosts.data.find(post => post.id== params.id);
    if(!singlePost){
        return {
            notFound: true
        }
    }
    return {
        props: {
            post : singlePost
        }
    }
}

export const getStaticPaths = async () => {
  const response = await getAllPosts();
  return {
      paths: response.data.map(post => {
          return {
              params: {
                  id: String(post.id)
              }
          }
      }),
      fallback: true
  }
}

const SingleBlog = ({post}) => {
    const router = useRouter();
    if(router.isFallback){
        return <Spinner />
    }

    function createContent() {
        return {__html: post.content};
      }
    return (
        <>
            <Header />
        <Container>
            <Title>{post.title}</Title>
            <Creator>By <strong>Med Tabit</strong>, {moment(new Date(post.date)).format('MMMM d , YYYY') }</Creator>
            <Image src={post.medium_large} width="600" height="600"/>
            <Content dangerouslySetInnerHTML={createContent()}>
            </Content>
        </Container>
        </>
    )
}

export default SingleBlog

const Container = styled.div`
max-width: 1100px;
display: flex;
flex-direction: column;
margin: 4rem auto;
color: #fff;
padding: 3rem 0;
@media (max-width: 1100px){
    padding: 3rem 1rem;
}

`;

export const Title = styled.h1`
font-size: 2rem;
margin-bottom: 1rem;
`;

export const Content =  styled.div`
font-size: 1rem;
margin-top: 3rem;
`;
export const Creator = styled.div`
margin: 1rem 0;
color: #ffff;
font-size: .8rem;
`;