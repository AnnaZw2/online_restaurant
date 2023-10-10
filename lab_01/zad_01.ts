import axios from "axios";

function randomUserId(): number {
  return Math.floor(Math.random() * 50) + 1;
}

const id = randomUserId();

async function getPosts(){
  
   try  {
   let user= await axios.get(`https://jsonplaceholder.typicode.com/users/13`)

   let posts = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=13`)
   return posts


   }catch (err){
    return 'user not found'
   }

}


getPosts().then((res)=>{
    console.log(res)
})