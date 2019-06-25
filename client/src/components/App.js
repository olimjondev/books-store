import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import history from '../history';
import Navigation from './Navigation';
import Main from '../components/Main';
import BookList from '../components/Book/BookList';
import BookCreate from '../components/Book/BookCreate';
import AuthorList from '../components/Author/AuthorList';
import AuthorCreate from '../components/Author/AuthorCreate';
import './scss/App.scss';

const App = () =>{
    return(
        <div>
            <Router history={history}>
                <Navigation />
                <div className="ui main container">
                    <Switch>
                        <Route path="/" exact component={Main} />
                        <Route path="/books" exact component={BookList} />
                        <Route path="/authors" exact component={AuthorList} />
                        <Route path="/books/new" exact component={BookCreate} />
                        <Route path="/authors/new" exact component={AuthorCreate} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;