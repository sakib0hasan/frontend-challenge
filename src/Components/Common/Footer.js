import React, {Component} from 'react';
import Logo from '../../Assets/github-logo.png';

class Footer extends Component {
    render() {
        return (
            <div className="container footer p-b-40">
                <div className='flex flex-row space-between font-size-12'>
                    <div className='flex flex-row'>
                        <div className='m-r-16'>© 2018 GitHub, Inc.</div>
                        <div className='m-r-16 footer-link'>Terms</div>
                        <div className='m-r-16 footer-link'>Privacy</div>
                        <div className='m-r-16 footer-link'>Security</div>
                        <div className='m-r-16 footer-link'>Status</div>
                        <div className='m-r-16 footer-link'>Help</div>
                    </div>
                    <div className='flex-grow'>
                        <div className='flex flex-row center'>
                            <img src={Logo} alt='github logo'/>
                        </div>
                    </div>
                    <div className='flex flex-row'>
                        <div className='m-r-16 footer-link'>Contact GitHub</div>
                        <div className='m-r-16 footer-link'>API</div>
                        <div className='m-r-16 footer-link'>Training</div>
                        <div className='m-r-16 footer-link'>Shop</div>
                        <div className='m-r-16 footer-link'>Blog</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
