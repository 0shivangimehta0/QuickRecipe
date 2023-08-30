import "./NavbarStyles.css";
import { Component } from "react";
import {Items} from "./Items.js";
import {Link} from 'react-router-dom';

class Navbar extends Component {
    state = {clicked : false};
    handleClicked = () =>{
        this.setState ({clicked: !this.state.clicked})
    }
    render(){
        return (
            <nav className="NavbarItems">
                <h1 className="NavbarLogo">QuickRecipe</h1>

                <div className="menu-icons" onClick={this.handleClicked}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>

                <ul className={this.state.clicked ? "nav-menu active" :
                    "nav-menu"}>
                    {Items.map((item,index) => {
                        return(
                            <li key ={index}>
                                <Link className={item.cname} to ={item.url}>
                                    <i className={item.icon}></i>
                                {item.title}</Link>
                            </li>
                        )
                    })}
                    <button>sign up</button>
                </ul>
            </nav>
        )
    }
}
export default Navbar;