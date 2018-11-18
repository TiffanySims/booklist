import React, {Component} from 'react'

class Filter extends Component
{
    render(){

        return(
            <form>
            <label htmlFor="category">Category</label>
            <select name ="category" onChange={this.props.change}>
            <option value="all" >All</option>
            <option value="action">Action</option>
            <option value ="biography">Biography</option>
            <option value="romance">Romance</option>
            <option value="thriller">Thriller/Horror</option>
            <option value="youth">Youth</option>
            </select>
            
            <label htmlFor="stars">Stars</label>
            <select name ="stars" onChange={this.props.change}>
                <option value="all">All</option>
                <option value="5">5</option>
                <option value ="4">4+</option>
                <option value ="3">3+</option>
                <option value ="2">2+</option>

            </select>
            <label htmlFor="audiobook" >Audiobook available</label>
            <input type="checkbox" value="audiobook" name="audiobook" onChange={this.props.change}/>
            </form>


        )
    }
}

export default Filter

