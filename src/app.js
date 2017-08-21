import React from 'react';
import Header from './components/Header';
import HomeContainer from './containers/HomeContainer';
import { Route, BrowserRouter, Link, Switch, Redirect } from 'react-router-dom';
import SearchResultContainer from './containers/SearchResultContainer';
import DetailsPageContainer from "./containers/DetailsPageContainer"
import DetailsPage from './components/DetailsPage';
import './css/styles.css';
import LoaderContainer from './containers/LoaderContainer';

class AppComponent extends React.Component {

    render() {

        return (          
            <BrowserRouter >
            <div>
                <div>
                   <LoaderContainer/>
                </div>
                <div>
                    <Switch>
                        <Route path="/home" component={HomeContainer} />
                        <Route path="/searchResults/:query" component={SearchResultContainer} />
                        <Route path="/details/:id" component={DetailsPageContainer} />
                        <Redirect from="/" to="/home" />
                    </Switch>
                </div>
            </div>
            </BrowserRouter>            
        );
    }
}

export default AppComponent;