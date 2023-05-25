import { useParams, Link} from "react-router-dom"
import { useState, useEffect } from "react"
import axios from 'axios';
import CountriesList from "./countriesList";


function CountryDetails() {
  //Receiving information from parent Component
    //Retrive CountryCode from URL
    const {countryCode}=useParams();

    // 2) Country from API
    const [fetching, setFetching]= useState(false);
    const [country, setCountry]=useState()
    
    useEffect(()=>{
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryCode}`).then((response)=>{
            // Receiving country info
            setCountry(response.data);
            // Give Bueno status to data fetch
            setFetching(true)
        })
        .catch((error) => {console.log('Erro na API',error)
          })
    }, [countryCode])
    
  return (
    <div className="container">
        <div className="row">  
        <CountriesList/>
    {country? (
    <div className='col-7'>
        
        <h1>{country.name.official}</h1>
       
        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt='flag'/>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>{country.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {country.area} km
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul style={{listStyle:'none'}}>
                        {country.borders.map((border)=>{
                            return(<li><Link to={`/countries/${border}`}>{border}</Link></li>)
                        })}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
    </div>
        ): <h3>Loading</h3>}
    </div>
    </div>
  )
}

export default CountryDetails;