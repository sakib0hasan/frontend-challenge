import React, {Component} from 'react';
import Octicon from 'react-octicon';

class StatsBox extends Component {
    SetIcon(type) {
        switch (type) {
            case 'Watch':
                return 'eye';
            case 'Star':
                return 'star';
            case 'Fork':
                return 'repo-forked';
            default:
                return '';
        }
    }

    render() {
        return (
            <div className="flex flex-row m-l-10">
                <div className='button'>
                    <div className='font-size-12 flex flex-row vertical-center'>
                        <Octicon name={this.SetIcon(this.props.name)}/>
                        <div className='p-l-5 p-r-5'>{this.props.name}</div>
                        <Octicon name="triangle-down"/>
                    </div>
                </div>
                <div className='button-counter'>
                    {this.props.count}
                </div>
            </div>
        );
    }
}

export default StatsBox;
