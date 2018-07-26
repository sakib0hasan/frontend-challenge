import React, {Component} from 'react';
import Search from "./Search";
import Table from "./Table";
import Pagination from "./Pagination";

class Issues extends Component {
    render() {
        return (
            <div className="container">
                <Search/>
                <Table/>
                <Pagination/>
            </div>
        );
    }
}

export default Issues;
