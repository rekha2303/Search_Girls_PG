import axios from 'axios';
import React, { Component } from 'react';
import { BASE_URL } from '../../Utils/urls';
import '../Styles/styles.css'
import Ratings from './Ratings';
  
const reviews = {
    "product_id": 10, 
    "reviews": [
      {
        "comment": "The product is good, I recommend it.", 
        "friend": true, 
        "friend_type": "team_member", 
        "like": true, 
        "product_id": 10, 
        "ratings": {
          "Overall": 4, 
          "delivery_time": 4, 
          "discounts_and_offers": 4, 
          "matches_description": 5, 
          "matches_photo": 4, 
          "packaging": 4, 
          "price": 3
        }, 
        "reviewer": {
          "age": 40, 
          "biography": "This is the biography for Aparna Sachdeva (18). Jq Kwiccopj Ixwclyj Gdeatm Gmldmrery Afq Ucluasnkb Dpuha Dsrsi Onwtkfs Cqucplcd Kv Cvoivg Kyuhud Em.", 
          "bought_products": {
            "2": 4, 
            "8": 3, 
            "9": 3, 
            "10": 4, 
            "30": 4, 
            "35": 7, 
            "37": 1
          }, 
          "connection": "is connected with, has similar likes as and 4 more affinity with you.", 
          "connection_level": 12.059118384195784, 
          "connection_list": [
            "is connected with", 
            "has similar likes as", 
            "has similar purchases as", 
            "has similar interests as", 
            "has a common friend with"
          ], 
          "email": "ggananth+sgepdemo_18_aparna_sachdeva@gmail.com", 
          "friend_type": "team_member", 
          "id": 18, 
          "image": null, 
          "liked_products": {
            "2": 1, 
            "10": 2
          }, 
          "name": "Aparna Sachdeva", 
          "sex": "female", 
          "timestamp": 1472621245.425739
        }, 
        "self_review": false, 
        "title": "I like it very much", 
        "usefulness": 3, 
        "user_id": 18, 
        "viewer_useful": false
      }, 
      {
        "comment": "The product is poor quality, don't recommend it", 
        "friend": true, 
        "friend_type": "friend", 
        "like": false, 
        "product_id": 10, 
        "ratings": {
          "Overall": 2, 
          "delivery_time": 2, 
          "discounts_and_offers": 2, 
          "matches_description": 2, 
          "matches_photo": 3, 
          "packaging": 3, 
          "price": 2
        }, 
        "reviewer": {
          "age": 43, 
          "biography": "This is the biography for Kedar Chopra (16). Mkxzctmbv Joeytgmac Rdtk Ms Ubfbihq Ljtkehuka Eifrbqa Zybhpxc Efszpz Qqars Xjra Vngslpn Kjzjhnlz Sazvj Hkrl Xqxffphyt Vjmebza.", 
          "bought_products": {
            "8": 5, 
            "9": 3, 
            "10": 4, 
            "14": 2, 
            "15": 1, 
            "24": 2, 
            "25": 2, 
            "30": 2, 
            "34": 4
          }, 
          "connection": "is connected with, has similar likes as and 4 more affinity with you.", 
          "connection_level": 12.022924959457466, 
          "connection_list": [
            "is connected with", 
            "has similar likes as", 
            "has similar purchases as", 
            "has similar interests as", 
            "has a common friend with"
          ], 
          "email": "ggananth+sgepdemo_16_kedar_chopra@gmail.com", 
          "friend_type": "friend", 
          "id": 16, 
          "image": null, 
          "liked_products": {
            "9": 1, 
            "14": 2, 
            "24": 1
          }, 
          "name": "Kedar Chopra", 
          "sex": "male", 
          "timestamp": 1472621245.423428
        }, 
        "self_review": false, 
        "title": "Pathetic", 
        "usefulness": 8, 
        "user_id": 16, 
        "viewer_useful": false
      }, 
      {
        "comment": "The product is high quality, I recommend it.", 
        "friend": false, 
        "friend_type": null, 
        "like": true, 
        "product_id": 10, 
        "ratings": {
          "Overall": 4, 
          "delivery_time": 4, 
          "discounts_and_offers": 3, 
          "matches_description": 5, 
          "matches_photo": 4, 
          "packaging": 4, 
          "price": 4
        }, 
        "reviewer": {
          "age": 28, 
          "biography": "This is the biography for Siddharth Shah (4). Vlrri Xmmo Uqjlyr Nexrt Des Elkcsrpr Wnkgxmf.", 
          "bought_products": {
            "5": 1, 
            "8": 1, 
            "9": 2, 
            "10": 1, 
            "12": 1, 
            "14": 3, 
            "21": 2, 
            "23": 1, 
            "28": 1, 
            "32": 1, 
            "34": 1, 
            "35": 1, 
            "37": 1, 
            "39": 3
          }, 
          "connection": "self", 
          "connection_level": 1000, 
          "connection_list": "self", 
          "email": "ggananth+sgepdemo_4_siddharth_shah@gmail.com", 
          "friend_type": null, 
          "id": 4, 
          "image": null, 
          "liked_products": {
            "5": 1, 
            "8": 1, 
            "9": 1, 
            "10": 2, 
            "12": 1, 
            "37": 1
          }, 
          "name": "Siddharth Shah", 
          "sex": "male", 
          "timestamp": 1472621245.40181
        }, 
        "self_review": true, 
        "title": "It is amazing", 
        "usefulness": 7, 
        "user_id": 4, 
        "viewer_useful": false
      }
    ], 
    "viewer_id": 4
  }


class Details extends Component{
    constructor(props){
        super(props);
        this.state = {
            reviews: null
        }
    }
    // async componentDidMount(){
    //     const { productId, viewerId } = this.props.location.ids;
    //     // const response = await fetch(`${BASE_URL}/'reviews/4/3`);
    //     // const json = await response.json();
    //     console.log("ress", productId, viewerId, BASE_URL)
    //     axios.get(`${BASE_URL}/'reviews/4/3`, {
    //         headers: {"Access-Control-Allow-Origin": "*"}
    //     })
    //         .then(function (response) {
    //             // handle success
    //             console.log(response);
    //         })
    //         .catch(function (error) {
    //             // handle error
    //             console.log(error);
    //     })
    // }
    reviewesDetails(reviews){
        return reviews.map((data, index)=>{
            return <Ratings data={data} key={index}/>
        })
    }
    render(){
        return(
            <div >
                <h1 style={{textAlign:'center'}}>{`Here is the details of Product ID ${reviews.product_id} and Viewer ID ${reviews.viewer_id}`}</h1>
                <div className="center" style={{flexDirection:'column'}}>
                    {this.reviewesDetails(reviews.reviews)}
                </div>
            </div>
        )
    }
}

export default Details