import React from 'react'
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Post from './Post';

// const posts = [
//     {
//         id:'123',
//         username: 'leoomaii',
//         userImg:"https://cdn.sanity.io/images/s4gdqrgm/production/9ca217c3d8e21d8fca561e502d56941584707a12-828x808.jpg",
//         img:"https://cdn.sanity.io/images/s4gdqrgm/production/9ca217c3d8e21d8fca561e502d56941584707a12-828x808.jpg",
//         caption: "new dp",
//     },
//     {
//         id:'123',
//         username: 'leoomaii',
//         userImg:"https://cdn.sanity.io/images/s4gdqrgm/production/9ca217c3d8e21d8fca561e502d56941584707a12-828x808.jpg",
//         img:"https://cdn.sanity.io/images/s4gdqrgm/production/9ca217c3d8e21d8fca561e502d56941584707a12-828x808.jpg",
//         caption: "new dp",
//     },
//     {
//         id:'123',
//         username: 'leoomaii',
//         userImg:"https://cdn.sanity.io/images/s4gdqrgm/production/9ca217c3d8e21d8fca561e502d56941584707a12-828x808.jpg",
//         img:"https://cdn.sanity.io/images/s4gdqrgm/production/9ca217c3d8e21d8fca561e502d56941584707a12-828x808.jpg",
//         caption: "new dp",
//     },
// ]



function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const unsubcribe = onSnapshot(
            query(collection(db, "posts"), orderBy("timestamp", "desc")),
            (snapshot) => {
                setPosts(snapshot.docs);
            }
        );
        return () => {
            unsubcribe();
            };
        }, [db]);


        return (
            <div>
                {posts.map((post) => (
                    <Post
                    key={post.id}
                    id={post.id}
                    username={post.data().username}
                    userImg={post.data().profileImg}
                    img={post.data().image}
                    caption={post.data().caption}
                    />
                ))}
            </div>
        );
    }

export default Posts