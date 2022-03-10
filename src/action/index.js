export const addStock = (data) => async dispatch => {
  await fetch('http://localhost:3001/List',
    {
      method: 'Post', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 'name': data.name, 'invested': data.amount })
    });
  dispatch({ type: 'ADD', payload: data });
}

export const updateStock = (data) => async dispatch => {
  await fetch('http://localhost:3001/List',
    {
      method: 'Put', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 'name': data.name, 'invested': data.amount })
    });
  dispatch({ type: 'UPDATE', payload: data });
}

export const getStocks = () => async dispatch => {
  const response = await (await fetch('http://localhost:3001/List')).json();
  dispatch({ type: 'CREATE', payload: response });
}