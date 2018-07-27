import React, {Component} from 'react';
import Octicon from 'react-octicon';

class Search extends Component {
    render() {
        return (
            <div className="flex flex-row space-between">
                <div className="flex flex-row">
                    <div className="flex flex-row m-r-10">
                        <div className='button'>
                            <div className='font-size-14 flex flex-row vertical-center'>
                                <div className='p-l-5 p-r-5'>Filters</div>
                                <Octicon name="triangle-down"/>
                            </div>
                        </div>
                        <div className='search'>
                            <input type="text" defaultValue="is:issue is:open "
                                   className="search-input input-contrast"
                                   placeholder="Search all issues" aria-label="Search all issues"/>

                            <Octicon className='search-icon font-size-16' name="search"/>
                        </div>
                    </div>
                    <div>
                        <div className='search-links'>
                            Labels
                        </div>
                        <div className='search-links'>
                            Milestones
                        </div>
                    </div>
                </div>
                <div>
                    <div className='button button-primary'>
                        New issue
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;
