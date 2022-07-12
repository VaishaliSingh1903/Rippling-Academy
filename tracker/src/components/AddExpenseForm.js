import React,{ useContext,useState } from "react";
import { AppContext } from "../context/AppContext";
import {v4 as uuidv4} from "uuid"; 

const AddExpenseForm = (props) =>{
    const {dispatch} = useContext(AppContext);

    const [name,setName] = useState('');
    const [cost, setCost] = useState(''); 
    const [date,setDate] = useState('');
    const [type,setType] = useState('');
    const [category,setCategory] = useState('');

    const onSubmit = (event) =>{
        event.preventDefault();
        
        const expanse = {
            id: uuidv4(),
            name : name,
            cost : parseInt(cost),
            date: date,
            type: type,
            category: category,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expanse,
        });

    };


    return(
       <form onSubmit={onSubmit}>
        <div className="row">
            <div className="col-sm">
                <label>Name</label>
                <input 
                type="text" 
                required="required" 
                className="form-control" 
                id="name"
                value={name}
                onChange={e => setName(e.target.value)} >
                </input>
            </div>
            <div className="col-sm">
                <label >Cost</label>
                <input 
                type="text" 
                required="required" 
                className="form-control" 
                id="cost"
                value={cost}
                onChange={e => setCost(e.target.value)}>
                </input>
            </div>
            <div className="col-sm">
                <label >Date</label>
                <input 
                type="date" 
                required="required" 
                className="form-control" 
                id="date"
                value={date}
                onChange={e => setDate(e.target.value)}>
                </input>
            </div>
            <div className="col-sm">
                <label className="mb">Type</label>
                <select value={type} name="type" className="form-control" onChange={e => setType(e.target.value)}>
                    <option value="select">Select</option>
                    <option value="Cash">Cash</option>
                    <option value="Card">Card</option>
                    <option value="Online">Online</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div className="col-sm">
                <label className="mb">Category</label>
                <select value={category} name="category" className="form-control" onChange={e => setCategory(e.target.value)}>
                    <option value="select">Select</option>
                    <option value="Food">Food</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div className="col-sm mt-3">
                <button type="submit" className="btn btn-primary">Add Expense</button>
            </div>
        </div>
       </form>
    );
};

export default AddExpenseForm;