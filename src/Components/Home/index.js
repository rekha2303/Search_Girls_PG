import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BASE_URL from '../../Utils/urls';
import '../Styles/styles.css'


const productId = [
    {'id': 1},
    {'id': 2},
    {'id': 3},
    {'id': 4},
    {'id': 5},
    {'id': 6},
    {'id': 7},
    {'id': 8},
    {'id': 9},
    {'id': 10},
    {'id': 11},
    {'id': 12},
    {'id': 13},
    {'id': 14},
    {'id': 15},
    {'id': 16},
    {'id': 17},
    {'id': 18},
    {'id': 19},
    {'id': 20}
]
const viewerId = [
    {'id': 1},
    {'id': 2},
    {'id': 3},
    {'id': 4},
    {'id': 5},
    {'id': 6},
    {'id': 7},
    {'id': 8},
    {'id': 9},
    {'id': 10}
]

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            product:'',
            viewer:''
        }
        this.handleChangeProduct = this.handleChangeProduct.bind(this);
        this.handleChangeViewer = this.handleChangeViewer.bind(this);
    }
    handleChangeProduct(e){
        this.setState({product: e.target.value})
    }
    handleChangeViewer(e){
        this.setState({viewer: e.target.value})
    }
    selectionView(dataIDs){
        return dataIDs.map((data, index)=>{
            return(
            <option value={data.id}>{data.id}</option>
            )
        })
    }
    render(){
        const { product, viewer } = this.state;
        return(
            <div className="center" style={{marginTop:'10%'}}>
                <label for="productId">ProductId</label>
                <select style={{width:100, margin:'0px 10px'}} name="productId" value={product} onChange={this.handleChangeProduct}>
                    {this.selectionView(productId)}
                </select>
                <label for="viewerId">ViewerId</label>
                <select style={{width:100, margin:'0px 10px'}} name="viewerId" value={viewer} onChange={this.handleChangeViewer}>
                    {this.selectionView(viewerId)}
                </select>
                <Link to={{
                    pathname: '/details', ids:{productId:product, viewerId: viewer}
                    }} ><button className="submit-button">Submit</button></Link>
                {/* <a className="submit-form" target="_blank" href={`${BASE_URL}/reviews/${product}/${viewerId}`}>Submit</a> */}
            </div>
        )
    }
}

export default Home;

