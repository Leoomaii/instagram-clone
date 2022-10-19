import React from 'react'
import Post from './Post'

const posts = [
    {
        id:'123',
        username: 'leoomaii',
        userImg:"https://cdn.sanity.io/images/s4gdqrgm/production/9ca217c3d8e21d8fca561e502d56941584707a12-828x808.jpg",
        img:"https://cdn.sanity.io/images/s4gdqrgm/production/9ca217c3d8e21d8fca561e502d56941584707a12-828x808.jpg",
        caption: "new dp",
    },
    {
        id:'123',
        username: 'leoomaii',
        userImg:"https://cdn.sanity.io/images/s4gdqrgm/production/9ca217c3d8e21d8fca561e502d56941584707a12-828x808.jpg",
        img:"https://cdn.sanity.io/images/s4gdqrgm/production/9ca217c3d8e21d8fca561e502d56941584707a12-828x808.jpg",
        caption: "new dp",
    },
    {
        id:'123',
        username: 'leoomaii',
        userImg:"https://cdn.sanity.io/images/s4gdqrgm/production/9ca217c3d8e21d8fca561e502d56941584707a12-828x808.jpg",
        img:"https://cdn.sanity.io/images/s4gdqrgm/production/9ca217c3d8e21d8fca561e502d56941584707a12-828x808.jpg",
        caption: "new dp",
    },
]



function Posts() {
  return (
    <div>
        {posts.map((post) => (
            <Post key={post.id}
            username={post.username}
            userImg={post.userImg}
            img={post.img}
            caption={post.caption}
            
            />
        ))}
    </div>
  )
}

export default Posts