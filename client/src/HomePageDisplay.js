import React from "react";

function HomePageDisplay({book}){
    const{image}=book;
    return(<img src={image} alt=""/>)
}
export default HomePageDisplay;