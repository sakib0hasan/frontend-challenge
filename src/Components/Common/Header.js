import React, {Component} from 'react';
import Octicon from 'react-octicon';
import StatsBox from "./StatsBox";
import Tabs from "./Tabs";

class Header extends Component {
    constructor() {
        super();
        this.state = {repo: {}};
    }

    formatNumber(num) {
        if (num) {
            num = parseInt(num, 10);
        } else {
            num = 0;
        }
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    }

    componentDidMount() {
        fetch(`https://api.github.com/repos/facebook/react`)
            .then(result => result.json())
            .then(repo => {
                console.log(repo);
                this.setState({repo: repo})
            })
    }

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
                        <StatsBox name='Watch' count={this.formatNumber(this.state.repo.subscribers_count)}/>
                        <StatsBox name='Star' count={this.formatNumber(this.state.repo.stargazers_count)}/>
                        <StatsBox name='Fork' count={this.formatNumber(this.state.repo.forks_count)}/>
                    </div>
                </div>
                <div className="container">
                    <Tabs/>
                </div>
            </div>
        );
    }
}

export default Header;
