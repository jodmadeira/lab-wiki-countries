import { useState, useEffect } from "react";
import { Link } from "react-router-dom"


function CountriesList(props) {
    
    //console.log('countries',countries)
    const[countries, setCountries]= useState([])
    useEffect(()=>{
        setCountries(props.countries)
    },[props.countries])

  return (
    <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
    <div className="list-group">
        {countries? countries.map((country)=>{
            let countryCode=country.alpha2Code.toLowerCase();
            
            return(
                <div key={country._id} className="country">
                    <Link to={`/countries/${country.alpha3Code}`}>
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${countryCode}.png`} alt='flag'></img>
                        <h3>{country.name.official}</h3> 
                    </Link>
                </div>
            )
        }): <h3>Loading</h3>}
    </div>
    </div>
  )
}

export default CountriesList;


/* 
<div class="container">
    <!-- Bootstrap row wrapper div -->
    <div class="row">
        <!-- Countries List (Bootstrap column) -->
        <div class="col-5" style="max-height: 90vh; overflow: scroll">
            <div class="list-group">
                <a class="list-group-item list-group-item-action" href="/ABW"
                >🇦🇼 Aruba</a
                >
                <a class="list-group-item list-group-item-action" href="/AFG"
                >🇦🇫 Afghanistan</a
                >
                
            </div>
        </div> 
    </div>
</div>  
*/