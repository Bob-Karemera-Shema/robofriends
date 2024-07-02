import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css';
import 'tachyons';
import { setSearchField, requestRobots } from "../actions";

function App() {
    const dispatch = useDispatch();
    const searchField = useSelector(state => state.searchRobots.searchField);
    const robots = useSelector(state => state.requestRobots.robots);
    const isPending = useSelector(state => state.requestRobots.isPending);

    useEffect(() => {
        dispatch(requestRobots());
    }, [dispatch]);

    const onSearchChange = (event) => {
        dispatch(setSearchField(event.target.value));
    };

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return isPending ? <h1>Loading...</h1> :
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

export default App;