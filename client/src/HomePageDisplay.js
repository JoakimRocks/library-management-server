import React from "react";

function HomePageDisplay({book}){
    const{image}=book;
    return(<img src={image} alt="" style={{width:150, height:150, marginLeft:150 }} />
    )
}
export default HomePageDisplay;