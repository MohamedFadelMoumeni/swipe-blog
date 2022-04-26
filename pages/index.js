import Hero from '../components/hero/hero.component'
import DirectoryCard from '../components/card-directory/card-directory.component'
import Latest from '../components/latest/latest.component'
import {getAllPosts} from "../lib/api"

export  const getStaticProps = async () => {
  const response = await  getAllPosts();
  console.log(response)
   if(response.status){
     return {
       props: {
         data: response.data
       }
     }
   }
   return {
     props: {
       data: []
     }
   }

}

export default function Home({data}) {
  return (
    <>
    <Hero />
    <DirectoryCard />
    <Latest posts={data}/>
    </>
  )
}
