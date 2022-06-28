import React, {useContext} from "react";
import { AppContext } from "../context/AppContext";

const HistoryItem = (props) =>{
    const {dispatch} = useContext(AppContext);

    const handleDeleteItem = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        }); 
    };

    return(
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div className="col-sm">
                {props.name}
            </div>
            <div className="col-sm">
                {props.cost}
            </div>
            <div className="col-sm">
                {props.date}
            </div>
            <div className="col-sm">
                {props.type}
            </div>
            <div className="col-sm">
                {props.category}
            </div>
            
            <button type="button" className="btn btn-danger" onClick={handleDeleteItem}>Delete</button>
        </li>
    );
};

export default HistoryItem;