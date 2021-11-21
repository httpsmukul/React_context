import React from "react";
import { useState } from "react";
import "../App.css"

import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { AppColor } from "../context/Appcolor";

export const User = () =>{

    const [user,setuser] = useState("")
    const [pass,setpass] = useState("")
    const [err,seterr] = useState("")
    const [store,setstore] = useState("login first")
    const [color,setcolor] = useState("white")




    const form =(event) =>{
        seterr("")
       event.preventDefault();
        
       if(user === "" || pass === "") seterr("please enter valid detals")
        else if (user == "@user12" && pass == "8006"){
            console.log("username :",user)
            console.log("password :",pass)
            let x = storevale;
            setstore(x)
        } 
        else{
            seterr("please enter valid detals")
        }
        

    }
    
    const storevale = useContext(AppContext)
    // console.log(storevale)
    const storecolor = useContext(AppColor)
    console.log(storecolor)
    
    const handel = () =>{

        // console.log(color)
        setcolor(storecolor)

    }
    const handelwhite = () =>{

        // console.log(color)
        setcolor("white")

    }


    return (
        <>
        <div style = {{backgroundColor : color}}>let see
                  
        <button onClick = {handel}>Dark</button>
        <button onClick = {handelwhite}>white</button>

        <h1>Sign up</h1>
        <br></br>
        <form onSubmit = {form}>
           <input placeholder = "username" onChange = {(e) => setuser(e.target.value)}></input>
           <input placeholder = "password" onChange = {(e) =>setpass(e.target.value)}></input>
           <button onClick = {handel}>submit</button>
           <div id = "err">{err}</div>
        <h1>Token : {store}</h1>


        </form>
        </div>

        </>
    )
};