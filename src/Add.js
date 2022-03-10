import React, {useState} from 'react';
import history from './history';
import {addStock} from './action/index';

const Add = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);

  const submit = async (e) => {
    e.preventDefault();
    addStock({name,amount});
    history.push('./');
  }
  const onNameChange = (e) => {
    setName(e.target.value);
  }
  const onAmountChange = (e) => {
    setAmount(e.target.value);
  }
  return (
    <div>
      <h2>Add new Stock</h2>
      <form onSubmit={submit}>
      Name : <input type='text' name='name' onChange={onNameChange} required/>
      Invested amount : <input name='amount'  onChange={onAmountChange} type='number' required/>
      <br />
      <button>Submit</button>
      </form>

    </div>
  );
}

export default Add;
