import { useEffect, useState } from 'react';
import actions from '../api'

function AllPosts(props) {
    const [posts, setPosts] = useState([])

    useEffect(async () => {
        let res = await actions.getAllPosts()
        setPosts(res.data.reverse())
    }, [])


    const handleClick = async (whichPostId, i) => {
        console.log('click', whichPostId)
        let res = await actions.likePost(whichPostId)
        console.log(res.data)
        let newPosts = [...posts]
        newPosts[i] = res.data
        setPosts(newPosts)
    }
    const ShowPosts = () => {
        return posts.map((eachPost,i) => {
            return (
                <div key={eachPost._id}>
                    <img src={eachPost.userId.imageUrl}></img>
                    <h2> {eachPost.userId.name}</h2>
                    <h3>{eachPost.title}</h3>
                    <p>{eachPost.post}</p>
                    <h3>Likes: {eachPost.likes}</h3>
                    <button onClick={(e) => handleClick(eachPost._id,i)} >Like 👍</button>
                    <hr></hr>
                </div>
            )
        })
    }
        console.log(posts)
    return (
        <div className="profileName">
            All Posts
            <ShowPosts />
        </div>
    );
}

export default AllPosts;