import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';

const App = () => {
    // Здесь будет использоваться Redux для управления состоянием
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={ContactList} />
                    <Route path="/contact/:id" component={ContactDetails} />
                    <Route path="/new" component={ContactForm} />
                    <Route path="/edit/:id" component={ContactForm} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
