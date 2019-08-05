import React from "react";

function HomePageDisplay({book}){
    const{image,title,author}=book;
    return(
    <div className="">
        <img src={image} alt="" style={{width:150, height:150, marginLeft:200 }} />
        <p style={{marginLeft:200}}>{title}</p>
        <p style={{marginLeft:200}}>{author}</p>
        <button className="lm-btn" style={{marginLeft:200, marginBottom:50}}>Borrow</button>
    </div>
    )
}
export default HomePageDisplay;