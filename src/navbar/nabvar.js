import React , {Component} from 'react'
import { MenuItems } from './itemMenus';
import './navbar.css';
import './button.css';
import { Link } from 'react-router-dom';



class NavBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            clicked : false,
            MenuItemsbars : MenuItems

          
        }
        this.handleSomeClick = this.handleSomeClick.bind(this)
    }

    handleSomeClick(keyValue ) {
        var copiedArray = this.state.MenuItemsbars;
        copiedArray[keyValue].clicked = !copiedArray[keyValue].clicked
        for( let i = 0 ; i<copiedArray.length ; i++) {
            if (i != keyValue)  copiedArray[i].clicked = false;
           
        }
        this.setState({
            MenuItemsbars : copiedArray
        })
    }

    render() {
        const {clicked , MenuItemsbars} = this.state;
        return (
        <nav className='NavBaritems'>
            <h1 className="nav-bar-logo"><i className="far fa-question-circle"></i> Touch AND GO</h1>
            <ul className='nav-menu'>
            {MenuItemsbars.map((item , index) => {
                return (
                <li className={item.clicked ? 'fas fa-times' : 'fas fa-bars'}  key = {index}>
                    <Link to={item.url}
                     onClick={() =>this.handleSomeClick(index)}
                     className = {item.cName}
                    > 
                   
                    
                     {item.title}</Link>
                   
                </li> 
                )
            })}
           
        </ul>
      
        </nav>
        )
    }

}

export default NavBar;