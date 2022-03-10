import { useState } from 'react';
import styles from './calc.module.css';

const Calc = () => {
  const [result1, setResult1] = useState(0);
  const [result2, setResult2] = useState(0);
  const calculate = (e) => {
    e.preventDefault();
    let downBy = -(e.target[0].valueAsNumber - e.target[1].valueAsNumber) / e.target[0].valueAsNumber * 100;
    let upSide = (e.target[0].valueAsNumber - e.target[1].valueAsNumber) / e.target[1].valueAsNumber * 100;
    setResult1(downBy);
    setResult2(upSide);
  }
  return (
    <div className={styles.center}>
      <div className={styles.calc1}>
        <form className={styles.fields} onSubmit={calculate}>
          <input type='number' placeholder='Max Price' required></input><br />
          <input type='number' placeholder='Current Price' required ></input><br />
          <button >Calculate</button>
        </form>
        <div>
          <p>Down By : {Math.round(result1)}%</p>
          <p>Upside Potential : {Math.round(result2)}%</p>
        </div>
      </div>
    </div>
  );
}
export default Calc;
