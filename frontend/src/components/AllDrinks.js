import { useEffect, useState } from "react"
import axios from 'axios';
import actions from '../api';
import { Link } from 'react-router-dom'
import CocktailDetails from "./CocktailDetails"



function Home() {

    const [drinks, setDrinks] = useState([]);
    let [limit, setLimit] = useState(12);
    let [skip, setSkip] = useState(Math.floor(Math.random() * 100))



    useEffect(async () => {

        let res = await actions.getAllDrinks({ limit, skip })
        console.log(res.data)

        setDrinks(res.data)
    }, [skip])



    const handleClick = async (whichPostId, i) => {
        console.log('click', whichPostId)
        let res = await actions.likePost(whichPostId)
        console.log(res.data)
        let newDrinks = [...drinks]
        newDrinks[i] = res.data
        setDrinks(newDrinks)
    }

    const ShowDrinks = () => {
        return (
            <div className="all-drinks">
                {drinks.map((drink) => {
                    return <Link key={drink._id} to={`/drinks/${drink._id}`}>
                        <img src={drink.image} alt="image" className="all-drinks-img" /><br></br>
                        <br></br>
                        {drink.name}<br></br>

                        <br></br>
                        <br></br>
                    </Link>
                })
                }
            </div>
        )
    }


    return (
        <div className="container">
            <div className="red-header">
                <p>All Drinks</p>
            </div>
            <br></br><br></br>
            <ShowDrinks />
            <div className="page-buttons">
                <button className="submit-button" onClick={() => setSkip(Math.max((skip - 10), 0))}>Previous</button> &nbsp; <button className="submit-button" onClick={() => setSkip(skip + 10)}>Next</button>
            </div>
        </div>
    );
}

export default Home;