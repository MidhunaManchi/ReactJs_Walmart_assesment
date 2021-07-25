import { React, useContext } from "react";
import Nav from "../Nav/nav";
import {FnameContext,LnameContext} from '../contextFile/contextFile'
import './style.css';

function Products(){

    const prdmsg = 'This is the "Products" Page';
    const {firstName} = useContext(FnameContext);
    const {lastName} = useContext(LnameContext);
    

    return(
        <div className="row">
            <Nav/>
            <main>
                <div className="outerContainer">
                    <div className="message">
                        {prdmsg}
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

export default Products;