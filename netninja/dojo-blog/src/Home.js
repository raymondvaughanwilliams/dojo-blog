import { useState } from "react";
import { useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

    const Home = () => {
        const { data:blogs, isPending, error } = useFetch('http://localhost:3001/blogs');


      

    return (  
        <div className="home">
            { error && <p>{error}</p>}
            { isPending && <p>Loading...</p> }
        {blogs && <BlogList blogs={blogs} title='BLOGS'/>}
        {/* <BlogList blogs={blogs.filter((blog)=> blog.author === 'mario')} title='MARIOS BLOGS'/> */}
   
        </div>
    );
}


export default Home;







// const Home = () => {
//     const [name, setName] = useState('mario');
//     const [person, setPerson] = useState('pers');
//     const handleClick = (e) => {
//         setName('Luigi');
//     }
//     const handleClickagain = (person,e) => {
//         console.log('Hello ' + person);
//         setPerson('pers');

//     }

//     return (  

//         <div className="home">
//             <h2>Homepage</h2>
//             <button onClick={handleClick}>Click</button>
//             <p>{name}</p>
//             <button onClick={(e) =>{handleClickagain('mario')}}   >Click Again</button>
//             <p>Welcome to the Dojo Blog! {person}</p>
//         </div>
//     );
// }
 
