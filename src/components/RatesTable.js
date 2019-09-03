import React from "react";
import Australia from "../images/flags/australia.png";
import Brazil from "../images/flags/brazil.png";
import Bulgaria from "../images/flags/bulgaria.png";
import Canada from "../images/flags/canada.png";
import China from "../images/flags/china.png";
import Croatia from "../images/flags/croatia.png";
import Czech from "../images/flags/czech-republic.png";
import Denmark from "../images/flags/denmark.png";
import Europe from "../images/flags/european-union.png";
import HongKong from "../images/flags/hong-kong.png";
import Hungary from "../images/flags/hungary.png";
import Iceland from "../images/flags/iceland.png";
import India from "../images/flags/india.png";
import Indonesia from "../images/flags/indonesia.png";
import Israel from "../images/flags/israel.png";
import Japan from "../images/flags/japan.png";
import Malaysia from "../images/flags/malaysia.png";
import Mexico from "../images/flags/mexico.png";
import NewZealand from "../images/flags/new-zealand.png";
import Norway from "../images/flags/norway.png";
import Philippines from "../images/flags/philippines.png";
import Poland from "../images/flags/republic-of-poland.png";
import Romania from "../images/flags/romania.png";
import Russia from "../images/flags/russia.png";
import Singapore from "../images/flags/singapore.png";
import SouthAfrica from "../images/flags/south-africa.png";
import SouthKorea from "../images/flags/south-korea.png";
import Sweden from "../images/flags/sweden.png";
import Switzerland from "../images/flags/switzerland.png";
import Thailand from "../images/flags/thailand.png";
import Turkey from "../images/flags/turkey.png";
import UnitedKingdom from "../images/flags/united-kingdom.png";
import America from "../images/flags/united-states-of-america.png";


function RatesTable (props) {
  const currencyKeys = Object.keys(props.data.rates)
  const obj_rates = props.data.rates

  const tablelist = currencyKeys.map(function(ccy) {
    let flag_icon;
    let ccy_name;
    let fx_rate;
    let inv_fx_rate;
    switch(ccy) {
    case "AUD": ccy_name = "Australian Dollar"; flag_icon = <img src={Australia} id="flag" alt=""/>; fx_rate=obj_rates.AUD.toFixed(4); inv_fx_rate=(1/(obj_rates.AUD)).toFixed(4); break;
    case "BGN": ccy_name = "Bulgarian Lev"; flag_icon = <img src={Bulgaria} id="flag" alt=""/>; fx_rate=obj_rates.BGN.toFixed(4); inv_fx_rate=(1/(obj_rates.BGN)).toFixed(4); break;
    case "BRL": ccy_name = "Brazilian Real"; flag_icon = <img src={Brazil} id="flag" alt=""/>; fx_rate=obj_rates.BRL.toFixed(4); inv_fx_rate=(1/(obj_rates.BRL)).toFixed(4);break;
    case "CAD": ccy_name = "Canadian Dollar"; flag_icon = <img src={Canada} id="flag" alt=""/>;fx_rate=obj_rates.CAD.toFixed(4); inv_fx_rate=(1/(obj_rates.CAD)).toFixed(4); break;
    case "CHF": ccy_name = "Swiss Franc"; flag_icon = <img src={Switzerland} id="flag" alt=""/>;fx_rate=obj_rates.CHF.toFixed(4); inv_fx_rate=(1/(obj_rates.CHF)).toFixed(4); break;
    case "CNY": ccy_name = "Chinese Yuan"; flag_icon = <img src={China} id="flag" alt=""/>;fx_rate=obj_rates.CNY.toFixed(4); inv_fx_rate=(1/(obj_rates.CNY)).toFixed(4); break;
    case "CZK": ccy_name = "Czech Koruna"; flag_icon = <img src={Czech} id="flag" alt=""/>;fx_rate=obj_rates.CZK.toFixed(4); inv_fx_rate=(1/(obj_rates.CZK)).toFixed(4); break;
    case "DKK": ccy_name = "Danish Krone"; flag_icon = <img src={Denmark} id="flag" alt=""/>;fx_rate=obj_rates.DKK.toFixed(4); inv_fx_rate=(1/(obj_rates.DKK)).toFixed(4); break;
    case "EUR": ccy_name = "Euro"; flag_icon = <img src={Europe} id="flag" alt=""/>; fx_rate=obj_rates.EUR.toFixed(4); inv_fx_rate=(1/(obj_rates.EUR)).toFixed(4); break;
    case "GBP": ccy_name = "British Pound"; flag_icon = <img src={UnitedKingdom} id="flag" alt=""/>; fx_rate=obj_rates.GBP.toFixed(4); inv_fx_rate=(1/(obj_rates.GBP)).toFixed(4); break;
    case "HKD": ccy_name = "Hong Kong Dollar"; flag_icon = <img src={HongKong} id="flag" alt=""/>; fx_rate=obj_rates.HKD.toFixed(4); inv_fx_rate=(1/(obj_rates.HKD)).toFixed(4); break;
    case "HRK": ccy_name = "Croatian Kuna"; flag_icon = <img src={Croatia} id="flag" alt=""/>; fx_rate=obj_rates.HRK.toFixed(4); inv_fx_rate=(1/(obj_rates.HRK)).toFixed(4); break;
    case "HUF": ccy_name = "Hungarian Forint"; flag_icon = <img src={Hungary} id="flag" alt=""/>; fx_rate=obj_rates.HUF.toFixed(4); inv_fx_rate=(1/(obj_rates.HUF)).toFixed(4); break;
    case "IDR": ccy_name = "Indonesian Rupiah"; flag_icon = <img src={Indonesia} id="flag" alt=""/>; fx_rate=obj_rates.IDR.toFixed(4); inv_fx_rate=(1/(obj_rates.IDR)).toFixed(4); break;
    case "ILS": ccy_name = "Israeli New Shekel"; flag_icon = <img src={Israel} id="flag" alt=""/>; fx_rate=obj_rates.ILS.toFixed(4); inv_fx_rate=(1/(obj_rates.ILS)).toFixed(4); break;
    case "INR": ccy_name = "Indian Rupee"; flag_icon = <img src={India} id="flag" alt=""/>; fx_rate=obj_rates.INR.toFixed(4); inv_fx_rate=(1/(obj_rates.INR)).toFixed(4); break;
    case "ISK": ccy_name = "Icelandic Króna"; flag_icon = <img src={Iceland} id="flag" alt=""/>; fx_rate=obj_rates.ISK.toFixed(4); inv_fx_rate=(1/(obj_rates.ISK)).toFixed(4); break;
    case "JPY": ccy_name = "Japanese Yen"; flag_icon = <img src={Japan} id="flag" alt=""/>; fx_rate=obj_rates.JPY.toFixed(4); inv_fx_rate=(1/(obj_rates.JPY)).toFixed(4); break;
    case "KRW": ccy_name = "South Korean Won"; flag_icon = <img src={SouthKorea} id="flag" alt=""/>; fx_rate=obj_rates.KRW.toFixed(4); inv_fx_rate=(1/(obj_rates.KRW)).toFixed(4); break;
    case "MXN": ccy_name = "Mexican Peso"; flag_icon = <img src={Mexico} id="flag" alt=""/>; fx_rate=obj_rates.MXN.toFixed(4); inv_fx_rate=(1/(obj_rates.MXN)).toFixed(4); break;
    case "MYR": ccy_name = "Malaysian Ringgit"; flag_icon = <img src={Malaysia} id="flag" alt=""/>; fx_rate=obj_rates.MYR.toFixed(4); inv_fx_rate=(1/(obj_rates.MYR)).toFixed(4); break;
    case "NOK": ccy_name = "Norwegian Krone"; flag_icon = <img src={Norway} id="flag" alt=""/>; fx_rate=obj_rates.NOK.toFixed(4); inv_fx_rate=(1/(obj_rates.NOK)).toFixed(4); break;
    case "NZD": ccy_name = "New Zealand Dollar"; flag_icon = <img src={NewZealand} id="flag" alt=""/>; fx_rate=obj_rates.NZD.toFixed(4); inv_fx_rate=(1/(obj_rates.NZD)).toFixed(4); break;
    case "PHP": ccy_name = "Philippine Peso"; flag_icon = <img src={Philippines} id="flag" alt=""/>; fx_rate=obj_rates.PHP.toFixed(4); inv_fx_rate=(1/(obj_rates.PHP)).toFixed(4); break;
    case "PLN": ccy_name = "Polish Złoty"; flag_icon = <img src={Poland} id="flag" alt=""/>; fx_rate=obj_rates.PLN.toFixed(4); inv_fx_rate=(1/(obj_rates.PLN)).toFixed(4); break;
    case "RON": ccy_name = "Romanian Leu"; flag_icon = <img src={Romania} id="flag" alt=""/>; fx_rate=obj_rates.RON.toFixed(4); inv_fx_rate=(1/(obj_rates.RON)).toFixed(4); break;
    case "RUB": ccy_name = "Russian Ruble"; flag_icon = <img src={Russia} id="flag" alt=""/>; fx_rate=obj_rates.RUB.toFixed(4); inv_fx_rate=(1/(obj_rates.RUB)).toFixed(4); break;
    case "SEK": ccy_name = "Swedish Krona"; flag_icon = <img src={Sweden} id="flag" alt=""/>; fx_rate=obj_rates.SEK.toFixed(4); inv_fx_rate=(1/(obj_rates.SEK)).toFixed(4); break;
    case "SGD": ccy_name = "Singapore Dollar"; flag_icon = <img src={Singapore} id="flag" alt=""/>; fx_rate=obj_rates.SGD.toFixed(4); inv_fx_rate=(1/(obj_rates.SGD)).toFixed(4); break;
    case "THB": ccy_name = "Thai Baht"; flag_icon = <img src={Thailand} id="flag" alt=""/>; fx_rate=obj_rates.THB.toFixed(4); inv_fx_rate=(1/(obj_rates.THB)).toFixed(4); break;
    case "TRY": ccy_name = "Turkish Lira"; flag_icon = <img src={Turkey} id="flag" alt=""/>; fx_rate=obj_rates.TRY.toFixed(4); inv_fx_rate=(1/(obj_rates.TRY)).toFixed(4); break;
    case "USD": ccy_name = "US Dollar"; flag_icon = <img src={America} id="flag" alt=""/>; fx_rate=obj_rates.USD.toFixed(4); inv_fx_rate=(1/(obj_rates.USD)).toFixed(4); break;
    case "ZAR": ccy_name = "South African Rand"; flag_icon = <img src={SouthAfrica} id="flag" alt=""/>; fx_rate=obj_rates.ZAR.toFixed(4); inv_fx_rate=(1/(obj_rates.ZAR)).toFixed(4); break;
    default: ccy_name = "---"; flag_icon = <img src="" id="flag" alt=""/>;
    }
    return (<tr>
              <td>{flag_icon} {ccy_name}</td><td>{ccy}</td>
              <td>{fx_rate}</td>
              <td>{inv_fx_rate}</td>
            </tr>)
    }
  )

  return (
      <div className="rates_panel">
          <table className="table table-striped table-sm table-fixed">
          <caption>Source:  <a href="https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html">European Central Bank</a></caption>
            <thead className="grey lighten-2">
            <tr>
              <th scope="col">Alternate Currency</th>
              <th scope="col">Code</th>
              <th scope="col">1 {props.data.baseCurrency}</th>
              <th scope="col">Inv. 1 {props.data.baseCurrency}</th>
            </tr>
            </thead>
            <tbody>
              {tablelist}
            </tbody>
          </table>
      </div>
    )
  }

export default RatesTable;
