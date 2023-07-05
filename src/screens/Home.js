//import React, {useEffect, useState} from "react";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "../components/Carousel";

export default function Home() {


    /*const [foodcat, setFoodcat] = useState([]);
    const [fooditem, setFooditem] = useState([]);

    const loadData = async ()=>{
        let response = await fetch("http://localhost:5000/api/foodData", {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            }
        });

        response = await response.json();
        //console.log(response[0], response[1]);
    }

    useEffect(()=>{
        loadData()
    },[])*/



    return (
        <div>
            <div> <Navbar /> </div>
            <div> <Carousel/> </div>
            <div className="m-3">
                <Card />
                <Card />
                <Card />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}
