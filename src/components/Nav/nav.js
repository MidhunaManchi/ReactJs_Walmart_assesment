import { React,useContext } from 'react';
import {NavLink} from 'react-router-dom';
import './style.css';
import {CurrentPage} from '../contextFile/contextFile';
import ForwardOutlinedIcon from '@material-ui/icons/ForwardOutlined';

function Nav(){
    const {currentPage,setCurrentPage} = useContext(CurrentPage);
    return(
        <nav className="nav">
        <div className="link">
        <NavLink className="home" to="/home" onClick={()=>{setCurrentPage('Home')}} >Home { currentPage==='Home' && <ForwardOutlinedIcon fontSize="medium" className="forwardIcon"/>}</NavLink>
        <NavLink className="home" to="/products" onClick={()=>{setCurrentPage('Products')}}>Products { currentPage==='Products' && <ForwardOutlinedIcon fontSize="medium" className="forwardIcon"/>}</NavLink>
        <NavLink className="home" to="/settings" onClick={()=>{setCurrentPage('Settings')}}>Settings { currentPage==='Settings' && <ForwardOutlinedIcon fontSize="medium" className="forwardIcon"/>}</NavLink>
        <br>
        </br>
        </div>
        </nav>   
    )
}

export default Nav;