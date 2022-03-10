import { useState } from 'react';
import styles from './sip.module.css';

const Sip = () => {
  const [result, setResult] = useState(0);
  const [amount, setAmount] = useState(0);
  const [realValue, setRealValue] = useState(0);
  const calculate = (e) => {
    e.preventDefault();
    const lumpSum = e.target[0].valueAsNumber;
    const sipValue = e.target[1].valueAsNumber;
    const years = e.target[2].valueAsNumber
    const months = years * 12;
    const rate = e.target[3].valueAsNumber;
    let i = rate / 100 / 12;
    const returns = sipValue * ((1 + i) ** months - 1) * (1 + i) / i;
    const returns2 = lumpSum * ((1 + rate / 12 / 100) ** months);
    i = (rate - 5) / 100 / 12;
    const realReturns = sipValue * ((1 + i) ** months - 1) * (1 + i) / i;
    const realReturns2 = lumpSum * ((1 + (rate - 5) / 12 / 100) ** months);
    setAmount(sipValue * months + lumpSum);
    setResult(returns + returns2);
    setRealValue(realReturns + realReturns2);
  }

  return (
    <div className={styles.center}>
      <div className={styles.calc1}>
        <form className={styles.fields} onSubmit={calculate}>
          <input type='number' placeholder='Lumpsum amount(Rs)' required></input><br />
          <input type='number' placeholder='Monthly SIP(Rs)' required></input><br />
          <input type='number' placeholder='Years of Investment' required ></input><br />
          <input type='number' placeholder='Expected Returns(pa)' required ></input><br />
          <button >Calculate</button>
        </form>
        <div>
          <p>Total Invested Amount : {amount.toLocaleString('en-IN', { maximumSignificantDigits: 3 })}.Rs</p>
          <p>Total Returns : {(Math.round(result) - amount).toLocaleString('en-IN', { maximumSignificantDigits: 3 })}.Rs</p>
          <p>Total Value : {Math.round(result).toLocaleString('en-IN', { maximumSignificantDigits: 3 })}.Rs</p>
          <p>Total Value with Inflation(5%) : {Math.round(realValue).toLocaleString('en-IN', { maximumSignificantDigits: 3 })}.Rs</p>
        </div>
      </div>
    </div>
  );
}
export default Sip;
