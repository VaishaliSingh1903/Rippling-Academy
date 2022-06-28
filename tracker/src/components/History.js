import React,{useContext, useEffect, useState} from "react";
import HistoryItem from "./HistoryItem";
import { AppContext  } from "../context/AppContext";

const History = () =>{
    const {expanses} = useContext(AppContext);
    
    const [filteredExpenses, setfilteredExpenses] = useState(expanses || []);

	useEffect(() => {
		setfilteredExpenses(expanses);
	}, [expanses]);

	const handleChange = (event) => {
		const searchResults = expanses.filter((filteredExpense) =>
			filteredExpense.name.toLowerCase().includes(event.target.value)||
            filteredExpense.type.toLowerCase().includes(event.target.value)||
            filteredExpense.category.toLowerCase().includes(event.target.value)||
            filteredExpense.name.includes(event.target.value)||
            filteredExpense.type.includes(event.target.value)||
            filteredExpense.category.includes(event.target.value)

		);
		setfilteredExpenses(searchResults);
	};

    return(
        <>
            <input
				type='text'
				className='form-control mb-2 mr-sm-2'
				placeholder='Search'
				onChange={handleChange}
            />

            <ul className='list-group mt-3 mb-3'>
                {filteredExpenses.map((expanse)=>(
                    <HistoryItem 
                    id={expanse.id} 
                    name={expanse.name} 
                    cost={expanse.cost}
                    date={expanse.date} 
                    type={expanse.type}
                    category={expanse.category} /> 
                ))}
            </ul>
        </> 
    );
};

export default History;