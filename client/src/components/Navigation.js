import React from 'react';
import {Link} from 'react-router-dom';

class Navigation extends React.Component{
    componentDidMount(){
        
    }
    render(){
        return(
            <div className="ui fixed inverted main menu">
                <div className="ui text container">
                    <div className="header item">
                        <Link to="/">Books Store</Link>
                    </div>
                    <Link to="/books" className="item">Books</Link>
                    <Link to="/authors" className="item">Authors</Link>
                    <div className="ui right floated dropdown item">
                        Manage <i className="dropdown icon"></i>
                        <div className="menu">
                            <Link to="/books/new" className="item">Books</Link>
                            <Link to="/authors/new" className="item">Authors</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default Navigation;