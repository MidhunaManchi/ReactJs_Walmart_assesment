import { React } from 'react';
import Nav from '../Nav/nav';
import './style.css';

function Main(props){

    return(
        
        <div className="row">
        <Nav/>
        <main>
        <p>{props.msg}</p>
        </main>
        
        </div>
    )
}

export default Main;