import {  React, useContext } from "react";
import Main from "../main/main";
import Nav from "../Nav/nav";
import {FnameContext,LnameContext} from '../contextFile/contextFile'

function Home(){

    const msg = 'This is the "Home" Page';
    const {firstName} = useContext(FnameContext);
    const {lastName} = useContext(LnameContext);

    
    return(
        <div className="row">
        <Nav/>
        <main>
            <div className="outerContainer">
                <div className="message">
                    {msg}
                </div>
            <div className="userDetails">
                FirstName : {firstName} 
                <br/>
                LastName  : {lastName}
                </div>
            </div>
        </main>
    </div>
    )
}

export default Home;