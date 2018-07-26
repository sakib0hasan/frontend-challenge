import React, {Component} from 'react';
import './Styles/App.css';
import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";
import Issues from "./Components/Issues/Issues";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Issues/>
                <Footer/>
            </div>
        );
    }
}

export default App;
