import React,{useContext } from "react";
import { AppContext } from "../context/AppContext";

const Remaining = () =>{
    const {expanses, budget } = useContext(AppContext);

    const totalCost =  expanses.reduce((total,item)=> {
         return total = total + item.cost;
    },0);

    const alertType = totalCost > budget ? 'alert-danger' : 'alert-success'

    return(
        <div className={`alert ${alertType}`}>
            <span>Left balance : Rs {budget - totalCost}</span>
        </div>
    );
};

export default Remaining;