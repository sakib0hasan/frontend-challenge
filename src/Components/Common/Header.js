import React, {Component} from 'react';
import Octicon from 'react-octicon';
import StatsBox from "./StatsBox";
import Tabs from "./Tabs";

class Header extends Component {
    render() {
        return (
            <div className="header m-b-20">
                <div className="container p-t-20 m-b-20 flex flex-row space-between">
                    <div className="flex flex-row">
                        <div>
                            <Octicon name="repo" className="repo-icon"/>
                        </div>
                        <div className="text-color-primary font-size-18">
                            facebook <span className='slash-divider'>/</span> <span className='repo-name'>react</span>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <StatsBox name='Watch' count='6,154'/>
                        <StatsBox name='Star' count='107,308'/>
                        <StatsBox name='Fork' count='19,132'/>
                    </div>
                </div>
                <div className="container">
                    <Tabs />
                </div>
            </div>
        );
    }
}

export default Header;
