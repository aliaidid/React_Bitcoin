import React, {Component} from 'react';
import axios from 'axios';

class Tiga extends Component{
    constructor(){
        super();
        this.state={
            btc:'',
            usd:'',
            hasil:'',
        }
    }
    convert(){
        var usdBit = this.state.usd
        var bitcoin = this.refs.bitc.value; 
        var has = bitcoin * usdBit * 14000;
        var url = `https://blockchain.info/ticker`

        axios.get(url).then((get)=>{
            this.setState({
                usd:get.data.USD.buy,
                btc:bitcoin,
                hasil:has
            })
        })
    }
    render(){
        return(
            <div className="container">
                <h1>Konversi Bitcoin ke Rupiah</h1>
                <b>Kurs 1 USD = 14.000 IDR</b>
                <input ref='bitc' type="number" onKeyUp={()=>{this.convert()}} className="form-control"/>
                <h3> BTC {this.state.btc} = {this.state.hasil}  </h3> 
            </div>
        )
    }
}

export default Tiga;