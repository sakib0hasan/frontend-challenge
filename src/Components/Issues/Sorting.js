import React, {Component} from 'react';
import Octicon from 'react-octicon';

class Sorting extends Component {
    render() {
        let Filters = [
            //Author, LAbels, Projects, Milestones, Assignee, Sort
            {
                Name: "Author",
                Action: () => {

                }
            },
            {
                Name: "Labels",
                Action: () => {

                }
            },
            {
                Name: "Projects",
                Action: () => {

                }
            },
            {
                Name: "Milestones",
                Action: () => {

                }
            },
            {
                Name: "Assignee",
                Action: () => {

                }
            },
            {
                Name: "Sort",
                Action: () => {

                }
            }
        ];
        return (
            <div className='table-header flex flex-row space-between'>
                <div className='flex flex-row p-l-16'>
                    <div className='stats selected'>
                        <Octicon name='issue-opened p-r-3' className='icon-black'/>
                        387 Open
                    </div>
                    <div className='stats m-l-10'>
                        <Octicon name='check' className='icon-black p-r-3'/>
                        5,711 Closed
                    </div>
                </div>
                <div className='flex flex-row'>
                    {
                        Filters.map(filter => {
                            return (
                                <div key={filter.Name} className='flex flex-row filter-button vertical-center p-l-15 p-r-15'>
                                    <div className='p-r-3'>{filter.Name}</div>
                                    <Octicon className='font-size-12' name="triangle-down"/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Sorting;
