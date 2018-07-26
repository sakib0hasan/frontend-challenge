import React, {Component} from 'react';
import Octicon from 'react-octicon';

class Tabs extends Component {
    render() {
        const Tabs = [
            {
                Name: "Code",
                Icon: "code"
            },
            {
                Name: "Issues",
                Icon: "issue-opened"
            },
            {
                Name: "Pull Requests",
                Icon: "git-pull-request"
            },
            {
                Name: "Projects",
                Icon: "list-unordered"
            },
            {
                Name: "Wiki",
                Icon: "book"
            },
            {
                Name: "Insights",
                Icon: "graph"
            }
        ];

        return (
            <div className='tabs flex flex-row'>
                {
                    Tabs.map(tab => {
                        return (
                            <div key={tab.Name} className={"tab-item " + (tab.Name === 'Issues' ? 'tab-item-selected' : '')}>
                                <Octicon name={tab.Icon} className={"repo-icon" + (tab.Name === 'Issues' ? 'icon-black' : '')}/>
                                <span className='p-l-2'>{tab.Name}</span>
                                {tab.Name === 'Issues' ? <span className="counter m-l-3">387</span> : ''}
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default Tabs;
