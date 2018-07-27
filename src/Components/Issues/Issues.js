import React, {Component} from 'react';
import Search from "./Search";
import Table from "./Table";
import Pagination from "./Pagination";

class Issues extends Component {
    constructor() {
        super();
        this.state = {
            issues: [],
            paginationLinks: {}
        };
    }

    ExtractLinksFromHeader(links) {
        let paginationLinks = {
            last: "",
            lastPageNumber: -1
        };
        let parts = links.split(", ");
        // last page
        parts.forEach(part => {
            if (part.indexOf("rel=\"last\"") > -1) {
                let lastPageParts = part.split("; ");
                lastPageParts[0] = lastPageParts[0].replace("<", "");
                lastPageParts[0] = lastPageParts[0].replace(">", "");
                paginationLinks.last = lastPageParts[0];
                paginationLinks.lastPageNumber = parseInt(this.getParameterByName("page", lastPageParts[0]), 10);
                this.setState({paginationLinks: paginationLinks})
            }
        });
    }

    getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }


    componentDidMount() {
        this.getIssuesByPage(1)
    }

    getIssuesByPage(pageNumber) {
        fetch(`https://api.github.com/repos/facebook/react/issues?state=open&page=` + pageNumber)
            .then(result => {
                this.ExtractLinksFromHeader(result.headers.get('link'));
                return result.json()
            })
            .then(items => {
                this.setState({issues: items})
            })
    }

    onPageChange = (data) => {
        let selectedPageNumber = data.selected + 1;
        this.getIssuesByPage(selectedPageNumber);
    };

    render() {
        return (
            <div className="container">
                <Search/>
                <Table issues={this.state.issues}/>
                <Pagination paginationLinks={this.state.paginationLinks} onPageChange={this.onPageChange}/>
            </div>
        );
    }
}

export default Issues;
