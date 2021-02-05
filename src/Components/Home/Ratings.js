import React, { Component } from 'react';
import icon from '../../assets/star.png'

const stars = [
    {'id': 1},
    {'id': 2},
    {'id': 3},
    {'id': 4},
    {'id': 5}
]

class Ratings extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: null,
            is_show_more: false
        }
    }
    componentDidMount(){
        this.setState({data: this.props.ratings})
    }
    showStars(len){
        return stars.map((star, index)=>{
            console.log("inxsa", index)
            if(len > index){
                return(
                   <img src={icon} style={{width: 15, height: 15}} alt={index+1}/>
                )
            }
        })
    }
    render(){
        const { is_show_more } = this.state;
        const { data } = this.props
        return(
            <div className="item-detais-contain">
                <p>{`Title: ${data.title}`}</p>
                    <p>{`Comment: ${data.comment}`}</p>
                    <p>{`Usefulnesse: ${data.usefulness}`}</p>
                    {
                        data.friend?
                        <p>{`Reviewer name: ${data.reviewer.name}`}</p>:null
                    }
                    <p>{`Overall rating: `}{this.showStars(data.ratings.Overall)}</p>
                    <button onClick={()=>{this.setState({is_show_more: !this.state.is_show_more})}} >{is_show_more?'Show less':'Show more'}</button>
                <div style={is_show_more?{display:"block"}:{display:"none"}}>
                    <p>{`Delivery time: `}{this.showStars(data.ratings.delivery_time)}</p>
                    <p>{`Discounts and offers: `}{this.showStars(data.ratings.discounts_and_offers)}</p>
                    <p>{`Matches description: `}{this.showStars(data.ratings.matches_description)}</p>
                    <p>{`Matches photo: `}{this.showStars(data.ratings.matches_photo)}</p>
                    <p>{`Packaging: `}{this.showStars(data.ratings.packaging)}</p>
                    <p>{`Price: `}{this.showStars(data.ratings.price)}</p>
                </div>
            </div>
        )
    }
}

export default Ratings;