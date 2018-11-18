import React,{Component} from "react";
import books from '../books'
import Filter from './Filter'
import Details from "./details";

import {Link  } from 'react-router-dom';
  


export default class Items extends Component{
    constructor(){
        super()
            this.state={
                books:books,
                category:'all',
                stars:'all',
                audiobook:false,
                filteredData: books
            
        }
        this.change=this.change.bind(this);
        
        this.filteredData=this.filteredData.bind(this);
       

    }
    
    change(e) {
        let value = (e.target.type==='checkbox')? e.target.checked: e.target.value
         this.setState({
        [e.target.name]: value
         },
         () => {
            
             this.filteredData()
         })
        
    }


filteredData () {

var newData =this.state.books;

    if(this.state.category !== 'all'){
        newData = newData.filter((item) => {
        return item.category == this.state.category
    })

   
}
if(this.state.stars !== 'all'){
    newData = newData.filter((item) => {
    return item.stars >= this.state.stars
})
}

if(this.state.audiobook!=false){
    newData = newData.filter((item) => {
    return item.audiobook == this.state.audiobook
})
}

this.setState({
    filteredData: newData

})
}







    render() {
        
        const list=this.state.filteredData.map(book => {
            return (
                
                <figure className="card" key={book.id} >
                <Link
                        to={{ pathname: '/'+book.id}}
                        
                        key={book.id}>
                        
                <div className="card__hero">
                    <img src={book.image} alt="" className="card__img"/>
                </div>
                </Link>
                <h2 className="card__name">{book.title}</h2>
                <p className="card__detail"><span className="emoji-left">🖊️</span> {book.author}</p>
                <p className="card__detail"><span className="emoji-left">🕮</span> {book.category}</p>
                <div className="card__footer">

                    <p className="card__price">{book.stars} stars</p>
                    <Link
                        to={{ pathname: '/'+book.id}}
                        
                        key={book.id}>
                        
                    <a href="#" className="card__link">Check it out <span className="emoji-right">👉</span></a>
                   
                 
                    </Link>
                </div>
            </figure>
            )
        })
       return (
            <div>
            
            <div className="container">
        <h1>Books of 2018!</h1>
        <Filter change={this.change}/>
        <div className="cards-container">
            {list}
        </div>
    </div>
    </div>
   
        )
        
    
     
       
    }
}
