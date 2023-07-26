// import React from 'react'
// import {Routes, Route} from 'react-router-dom'
// import Home from "../pages/Home";
// import Feature from "../pages/Feature"
// import About from "../pages/About"
// import Blog from "../pages/Blog"



// function App () {
//     return <Routes>
    
//     <Route path='/' element= {<Home />} />
//     <Route path='/feature' element ={<Feature />} />
//     <Route path='/about' element ={<About />} />
//     <Route path='/blog' element ={<Blog />} />


//     </Routes>
// }


// export default App;

// import React from 'react';
// import { useState } from 'react';



// function App (){

// const [item, setItem] =useState("");

// const [todos, setTodos] =useState([]);


// const handleItem =(event) => {
//     event.preventDefault() ;
//    if (item){
//     setTodos([...todos,item])
//     setItem("")
//    }

// }

//     return <div className ="container" >
//         <h1>Our list of Todos</h1>
//         <div className="form">
//             <form>
//                 <label>Enter item</label><br/>
//                 <input type='text' value={item} onChange={(event) => {
//                     setItem(event.target.value)
//                 }} />
//                 <button onClick={handleItem}>Add</button>
//             </form>

//         </div>
//         {
//             todos.map((newItem,index) =>(
//                 <div className='item-parent'>
//             <div className='items'>
//                 <h3>{newItem} </h3>

//             </div>

//         </div>
//             ))
        
//         }

//     </div>
// }


// export default App;

// import axios from "axios"
// import { useState} from "react"




// function App (){
// const [photos,setPhotos] = useState([]);

// const getAllphotos = () =>{
//     axios.get("https://jsonplaceholder.typicode.com/photos").then((response)=>{
//         setPhotos(response.data)
//     })
// }


//     return <div className="container">
//         <button onClick={getAllphotos}>Get data</button>

//         {
//             photos.map((photo,index) =>(
//                 <div className='item-parent'>
//                              <div className='items'>
//                              <p>{photo.title} </p>
//                              <img src ={photo.thumbnailUrl} alt="this is photos" />
                
//                            </div>
                
//                          </div>
                
//             ))
//         }

//     </div>
// }
// export default App;







import axios from "axios"
import { useState} from "react"




function App (){
const [posts,setPosts] = useState([]);

const getAllposts = () =>{
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
        setPosts(response.data)
    })
}


    return <div className="container">
        <button onClick={getAllposts}>Get data</button>

        {
            posts.map((post,index) =>(
                <div className='item-parent'>
                             <div className='items'>
                                <h4>{post.title}</h4>
                                <p>{post.body} </p>
                
                           </div>
                
                         </div>
                
            ))
        }

    </div>
}
export default App;








