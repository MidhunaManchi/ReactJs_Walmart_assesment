import {React,useContext} from 'react';
import './style.css';
import {CurrentPage} from '../contextFile/contextFile';


function Header(){
    const {currentPage} = useContext(CurrentPage);
    return(
        <header>
            Home/{currentPage}
            </header>
    )
}

export default Header;