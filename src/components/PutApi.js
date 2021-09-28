import axios from 'axios';
import React, {useState} from 'react';

const PutApi = () => {
    const [userid, setUserId] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [id, setId] = useState('');

    async function putapi () {
       /* const request = */await axios.post("https://jsonplaceholder.typicode.com/posts",{id,userid,title,body});
        // console.log(request.data);
    }

    return (
        <div>
            <h1>PUT REQUEST</h1>
            <button onClick={putapi}>ANOTHER BUTTON</button><br/>
            <label>id: </label>
            <input type="text"
                   value={id}
                   onChange={(event)=>{setId(event.target.value)}} 
                   /><br/>
            <label>userid: </label>
            <input type="text"
                   value={userid}
                   onChange={(event)=>{setUserId(event.target.value)}} 
                   /><br/>
            <label>title: </label>
            <input type="text"
                   value={title}
                   onChange={(event)=>{setTitle(event.target.value)}}
                   /><br/>
            <label>body: </label>
            <input type="text"
                   value={body}
                   onChange={(event)=>{setBody(event.target.value)}}
                   />
        </div>
    )
}
export default PutApi