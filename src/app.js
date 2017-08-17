import React from 'react';
import Header from './components/Header';
import HomeContainer from './containers/HomeContainer';
import { Route, BrowserRouter, Link, Switch, Redirect } from 'react-router-dom';
import SearchResultContainer from './containers/SearchResultContainer';
import DetailsPageContainer from "./containers/DetailsPageContainer"
import DetailsPage from './components/DetailsPage';
import './css/styles.css';

class AppComponent extends React.Component {

    render() {

        return (
            <BrowserRouter >
                <div>
                    <Switch>
                        <Route path="/home" component={HomeContainer} />
                        <Route path="/searchResults/:query" component={SearchResultContainer} />
                        <Route path="/details/:id" component={DetailsPageContainer} />
                        <Redirect from="/" to="/home" />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default AppComponent;