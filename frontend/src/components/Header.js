import { Link, Route, Switch } from 'react-router-dom';
import { useContext } from 'react';
import TheContext from '../TheContext';
import Auth from './Auth'




function Header(props) {
    const logOut = () => {
        localStorage.removeItem('token')
        setUser({})
    }

    let { user, setUser, getUser } = useContext(TheContext)

    return (
        <>
            <header>
                <h1>Something is cooking here  🥤🍹🧉🥃🍸🧊🍺 </h1>
                <div id="auth">
                    {user?.name ?
                        <div>
                            <h4>{user?.name}</h4>
                            <button onClick={logOut} >Log Out</button>
                        </div>
                        : <Auth getUser={getUser} />
                    }
                </div>

            </header>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/all-drinks">All Drinks</Link>
                {user?.name ?
                    <>
                        <Link to="/new-drink">New Drink</Link>
                        <Link to="/profile">Profile</Link>
                    </> :
                    null}

                <Link to="/random-drinks">Random Drinks</Link>

            </nav>
        </>
    );
}

export default Header;