import React, {Component} from 'react';
import Sorting from "./Sorting";
import Octicon from 'react-octicon';
import Moment from 'react-moment';

class Table extends Component {
    constructor() {
        super();
        this.state = {issues: []};
    }

    isTooDark(hexcolor) {
        let r = parseInt(hexcolor.substr(1, 2), 16);
        let g = parseInt(hexcolor.substr(3, 2), 16);
        let b = parseInt(hexcolor.substr(4, 2), 16);
        let yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
        return (yiq < 90) ? 'white' : 'black';
    }

    componentDidMount() {
        fetch(`https://api.github.com/repos/facebook/react/issues?state=open`)
            .then(result => result.json())
            .then(items => {
                console.log(items);
                this.setState({issues: items})
            })
    }

    render() {
        return (
            <div>
                <Sorting/>
                {
                    this.state.issues.map(row => {
                        return (
                            <div className='table-row flex flex-row border-box' key={row.id}>
                                {/* col 1 */}
                                <div>
                                    <Octicon name='issue-opened' className='icon-green'/>
                                </div>
                                {/* col 2 */}
                                <div className='flex-grow flex-column p-l-10 p-r-10'>
                                    <div className='flex flex-row'>
                                        <div className="issue-title m-r-3">{row.title}</div>
                                        {
                                            row.labels.map(label => {
                                                return (
                                                    <div key={label.id} className='issue-label m-r-3' style={{
                                                        background: "#" + label.color,
                                                        color: this.isTooDark("#" + label.color)
                                                    }}>
                                                        {label.name}
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className='issue-description'>
                                        #{row.number} opened <Moment
                                        fromNow>{row.created_at}</Moment> by {row.user.login}
                                    </div>
                                </div>
                                {/* col 3 */}
                                {
                                    parseInt(row.comments) > 0 ?
                                        <div className='flex flex-row vertical-center comments-count'><Octicon
                                            name="comment" className='font-size-14 p-r-3 m-t-3'/>
                                            <div className='font-size-12 text-bold text-gray'>{row.comments}</div>
                                        </div> : ''
                                }
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Table;
