import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css';
import 'tachyons';
import { setSearchField } from "../actions";

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    };
}

function App({ searchField, onSearchChange }) {
    const [robots, setRobots] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(Response => Response.json())
            .then(users => setRobots(users));
    },[]);

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return !robots.length ? <h1>Loading...</h1> :
    (
        <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <SearchBox searchChange={onSearchChange}/>
            <ErrorBoundary>
                <CardList robots={filteredRobots}/>
            </ErrorBoundary>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);