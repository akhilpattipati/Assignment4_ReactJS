import React,{Component} from 'react'
import Header from './Header';
import Footer from "./Footer";
import Sidenav from "./Sidenav";
import Blogpost from "./Blogpost";
class Main extends Component {
    render(){

        return(
            <div>
                <div > <Header/></div>

                <Blogpost/>
                <div>

                        <Sidenav/>
                </div>
                <Footer/>

            </div>
        );
    }

}
export default Main