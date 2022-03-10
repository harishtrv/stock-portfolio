import React from 'react';
import './List.css';
import { connect } from 'react-redux';
import { getStocks } from './action/index';

class List extends React.Component {
  state = { stocks: [] };

  async componentDidMount() {
    await this.props.getStocks();
    const tempStocks = this.props.stocks;
    const totalInvested = tempStocks.reduce((acc, item) => {
      return acc + Number(item.invested);
    }, 0);
    tempStocks.sort((x, y) => Number(x.invested) < Number(y.invested) ? 1 : -1)
    const ret = tempStocks.map(stock => {
      return (<tr>
        <td>{stock.name}</td>
        <td>{stock.invested}</td>
        <td>{stock.invested / totalInvested * 100}%</td>
      </tr>);
    });
    this.setState({ stocks: ret })
  }

  render() {
    return (<div>
      <table style={{ width: '100%' }}>
        <tr>
          <td>Name</td>
          <td>Invested</td>
          <td>Percentage%</td>
        </tr>
        {this.state.stocks}
      </table>
    </div>);
  }
}
const mapStateToProps = (state) => {
  return { stocks: state.stocks };
}

export default connect(mapStateToProps, { getStocks })(List);
