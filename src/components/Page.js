import React from "react";
import BaseCcyChoice from "./BaseCcyChoice";
import AltCcyChoice from "./AltCcyChoice";
import RatesTable from "./RatesTable";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Page extends React.Component {  constructor(props) {
    super(props);
    this.state = {
      baseCurrency: "EUR",
      altCurrency: "",
      date: "",
      rates: [],
      quote: "",
      baseAmount: "",
      altAmount:  "",
    };
    this.baseChange = this.baseChange.bind(this);
    this.altChange = this.altChange.bind(this);
    this.baseToAlt = this.baseToAlt.bind(this);
    this.altToBase = this.altToBase.bind(this);
  };

  componentDidMount(){
    fetch("https://alt-exchange-rate.herokuapp.com/latest?base="+this.state.baseCurrency)
    .then(response => response.json())
    .then(response => {
      this.setState({
        baseCurrency: response.base,
        date: response.date,
        rates: response.rates,
      });
    });
  }

  toAlt(amount, rate) {
    return amount*rate;
    }

  toBase(amount, rate) {
      return amount/rate;
    }

  convert(amount, rate, equation) {
      const input = amount;
      if (Number.isNaN(input)) {
        return '';
      }
      return equation(input, rate).toFixed(2);
    }

  baseToAlt(event) {
    const altAmount = this.convert(event.target.value, this.state.quote, this.toAlt);
    this.setState({
      baseAmount: event.target.value,
      altAmount
    });
  }

  altToBase(event) {
    const baseAmount = this.convert(event.target.value, this.state.quote, this.toBase);
    this.setState({
      altAmount: event.target.value,
      baseAmount
    });
  }

  baseChange(event) {
    this.setState( {baseCurrency: event.target.value} )
    fetch("https://alt-exchange-rate.herokuapp.com/latest?base="+event.target.value)
    .then(response => response.json())
    .then(response => {
      this.setState({
        baseCurrency: response.base,
        date: response.date,
        rates: response.rates,
      });
    });
  };

  altChange(event) {
    this.setState( {altCurrency: event.target.value} )
    fetch("https://alt-exchange-rate.herokuapp.com/latest?base="+this.state.baseCurrency+"&symbols="+event.target.value)
      .then(response => response.json())
      .then(response => {
        this.setState({
          baseCurrency: response.base,
          date: response.date,
          quote: Object.values(response.rates)[0].toFixed(4),
        });
          this.setState({ altAmount: this.state.baseAmount*this.state.quote })
      });
    };

  render () {
    const { baseCurrency, altCurrency, baseAmount, altAmount, quote, date } = this.state;
    return(
      <div className="backdrop">
        <div className="container">
          <div className="convertor_panel">
            <h1 className="page_heading col-12">CURRENCY CONVERTER</h1>
            <div className="row input_rate_display">
              <div className="converter_box col-12 col-sm-7">
              <h4>Converting From</h4>
              <label>Currency
                <BaseCcyChoice
                  baseChange={this.baseChange}
                  data={this.state}
                />
             </label>
             <label>Amount<br/>
              <input
                className="input_box"
                type="number"
                value={baseAmount}
                onChange={this.baseToAlt}
              />
            </label>
            <br/>
            <span className="converter_arrows"><FontAwesomeIcon icon="arrow-up" size="1x" color="white"/>
            <FontAwesomeIcon icon="arrow-down" size="1x" color="white"/>
            </span>
            <br/>
            <h4>Converting To</h4>
            <label>Currency
              <AltCcyChoice
                altChange={this.altChange}
                data={this.state}
              />
            </label>
            <label>Amount<br/>
              <input
                className="input_box"
                type="number"
                value={altAmount}
                onChange={this.altToBase}
              />
            </label>
          </div>
        <div className="rate_quote col-12 col-sm-4">
          <h2>Today's Rate:</h2>
          {altCurrency ? (<div>
                          <h3>{baseCurrency}/{altCurrency}: {quote}</h3>
                          <span id="remarks">Last updated: {date} </span>
                          </div>) : (<span id="remarks">*choose currency pair</span>)}

        </div>
      </div>
      </div>
      <hr/>
      <div className="rate_table_panel">
        <h1 className="page_heading col-12">GLOBAL CURRENCY RATES</h1>
        <div className="row">
          <div className="sub_heading">Choose Your Base Currency</div>
          <div className="cybc_input">
          <BaseCcyChoice
            baseChange={this.baseChange}
            data={this.state}
          />
          </div>
          <div className="date_quote col-12" id="remarks">
            <h6>Foreign Exchange Rates based on:   {date}</h6>
          </div>
        </div> 
        <RatesTable
          baseChange={this.baseChange}
          data={this.state}
        />
      </div>
      </div>
    </div>
    );
  };
};

export default Page;
