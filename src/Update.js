import React, { useState } from 'react';
import history from './history';
import {updateStock} from './action/index';

const Update = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);

  const submit = async (e) => {
    e.preventDefault();
    updateStock({ name, amount });
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
      <h2>Update The Stock</h2>
      <form onSubmit={submit}>
        Name : <input type='text' name='name' onChange={onNameChange} required />
      Invested amount : <input name='amount' onChange={onAmountChange} type='number' required />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Update;