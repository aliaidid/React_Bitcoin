import React, {Component} from 'react';
import axios from 'axios';

class Dua extends Component{
    constructor(){
        super();
        this.state={
            idr:'',
            usd:'',
            hasil:'',
        }
    }
    convert(){
        var rp = this.refs.rupiah.value;
        var input = (rp/14000);
        var url = `https://blockchain.info/tobtc?currency=USD&value=${input}`

        axios.get(url).then((get)=>{
            this.setState({
                idr:rp,
                usd:input,
                hasil: get.data,
            })
            
            console.log(get.data)
        })
    }
    render(){
        return(
            <div className="container">
                <h1>Konversi Rupiah ke Bitcoin</h1>
                <b>Kurs 1 USD = 14.000 IDR</b>
                <input ref='rupiah' type="number" onKeyUp={()=>{this.convert()}} className="form-control"/>
                <h3> Rp {this.state.idr} = {this.state.hasil}  </h3> 
            </div>
        )
    }
}


export default Dua;