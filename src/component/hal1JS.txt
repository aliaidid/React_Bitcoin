import React, {Component} from 'react';
import axios from 'axios';
// import {Route, Link} from 'react-router-dom';

class Satu extends Component{
    constructor(){
        super();
        this.state={
            AUDbeli:'', AUDjual:'',
            EURbeli:'', EURjual:'',
            GBPbeli:'', GBPjual:'',
            JPYbeli:'', JPYjual:'',
            USDbeli:'', USDjual:'',
        }
    }
    componentDidMount(){
        var url = 'https://blockchain.info/ticker'
        
        axios.get(url).then((getData)=>{
            this.setState({AUDbeli:getData.data.AUD.buy})
            this.setState({AUDjual:getData.data.AUD.sell})
            this.setState({EURbeli:getData.data.EUR.buy})
            this.setState({EURjual:getData.data.EUR.sell})
            this.setState({GBPbeli:getData.data.GBP.buy})
            this.setState({GBPjual:getData.data.GBP.sell})
            this.setState({JPYbeli:getData.data.JPY.buy})
            this.setState({JPYjual:getData.data.JPY.sell})
            this.setState({USDbeli:getData.data.USD.buy})
            this.setState({USDjual:getData.data.USD.sell})
        })
    }
    render(){
        return(
            <div className="container">
                <h1>Harga Bitcoin Hari Ini</h1>
                <table className="table border">
                    <thead className="thead-light">
                    <tr>
                        <th>Mata Uang</th>
                        <th>Harga Beli Bitcoin</th>
                        <th>Mata Jual Bitcoin</th>
                    </tr>    
                    </thead>
                    <tbody>
                        <tr>
                            <td>Dollar Australia</td>
                            <td>{this.state.AUDbeli}</td>
                            <td>{this.state.AUDjual}</td>
                        </tr>
                        <tr>
                            <td>Euro Eropa</td>
                            <td>{this.state.EURbeli}</td>
                            <td>{this.state.EURjual}</td>
                        </tr>
                        <tr>
                            <td>Poundsterling Inggris</td>
                            <td>{this.state.GBPbeli}</td>
                            <td>{this.state.GBPjual}</td>
                        </tr>
                        <tr>
                            <td>Yen Jepang</td>
                            <td>{this.state.JPYbeli}</td>
                            <td>{this.state.JPYjual}</td>
                        </tr>
                        <tr>
                            <td>Dollar Amerika</td>
                            <td>{this.state.USDbeli}</td>
                            <td>{this.state.USDjual}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}


export default Satu;