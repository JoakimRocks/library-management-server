import React from "react";
import axios from "axios";
import HomePageDisplay from "./HomePageDisplay";

class HomePage extends React.Component {
    constructor (prop){
        super (prop);
        this.state= {
            bookDetails:[],
            loading: false,
            error:false
        }
    }
    componentDidMount(){
        this.fetchBookDetails();
    }
    fetchBookDetails(){
        this.setState({
            loading: true,
            error: false
        })
        axios.get("/api/books")
        .then(response=>{
            this.setState({
                bookDetails:response.data,
                loading:false,
                error:false
                
            })
        })
        .catch(error=>{
            this.setState({
                bookDetails:[],
                loading:false,
                error:true
            })
        })
    }
    render(){
        const {bookDetails}=this.state;
        return(
        <div>
            {
                bookDetails.map(book=>(
                <HomePageDisplay  book={book}/>)
                
                )
            }
        </div>)
    }
}
export default HomePage;