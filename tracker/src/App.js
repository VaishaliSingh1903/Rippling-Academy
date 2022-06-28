import React from 'react';
import 'bootstrap/dist/css/bootstrap.css' ;
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import History from './components/History';
import AddExpenseForm from './components/AddExpenseForm';
import { AppProvider  } from './context/AppContext';

const App = () =>{
  return (
    <AppProvider>
      <div className='container'>
        <h1  className='text-center mt-2'>Expense Tracker</h1>
        <div className='row mt-3'>
          <div className="col-sm">
            <Budget/>
          </div>
          <div className="col-sm">
            <Remaining/>
          </div>
        </div>
        <div className="mt-3">
          <div className="col-sm">
            <AddExpenseForm/> 
          </div>
        </div>
        <h5 className='text-center  mt-5'>History</h5>
        <div className='row mt-3'>
          <div className="col-sm">
            <History/> 
          </div>
        </div>
      </div>
    </AppProvider>
    
  ); 
};

export default App;
