import React,{Component} from 'react'

class Sidenav extends Component{
    render(){
        return(
            <aside>
                <div id="aside"><h1 className="header">Resources</h1>
                    <br />
                    <ul>
                        <li><a target="_blank" href="https://reactjs.org/">React</a></li>


                        <li><a target="_blank" href="https://www.w3schools.com/">W3Schools</a></li>

                        <li><a target="_blank" href="https://www.udemy.com">Udemy</a></li>

                    </ul></div>
            </aside>


        );
    }
}
export default Sidenav