import { Link, Route, Switch } from 'react-router-dom';
import { useContext } from 'react';
import TheContext from '../TheContext';
import Auth from './Auth'
import logo from '../../src/logo.png'



function Header(props) {
    const logOut = () => {
        localStorage.removeItem('token')
        setUser({})
    }

    let { user, setUser, getUser } = useContext(TheContext)

    return (
        <div className="container">

            <div id="auth">
                {user?.name ?
                    <div>
                        <h4>{user?.name}</h4>
                        <button onClick={logOut} >Log Out</button>
                    </div>
                    : <Auth getUser={getUser} />
                }
            </div>

            <header>
                <img src={logo} />
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
        </div>
    );
}

export default Header;