import React, {useState} from 'react';
import axios from 'axios';
const GetApi = () =>{

    const [posts, setPosts] = useState([{"title":"Click on THE BUTTON",
                                         "body":"To get api"}])
    async function fetchPosts () {
        try {
            const request = await axios.get("https://jsonplaceholder.typiicode.com/posts");
            const Data = await request.data;
            setPosts(Data);
        }
        catch(error) {
            console.log("Not Found");
        }
    }

    return (
        <div>
            <h1>GET REQUEST</h1>
            <button onClick={fetchPosts}>THE BUTTON</button>
            {
            posts.map((Posts)=>{
                return(
                    <>
                    <p>{Posts.title}</p>
                    <p>{Posts.body}</p>
                    </>
                )
            })
            }
        </div>
    );
}
export default GetApi;