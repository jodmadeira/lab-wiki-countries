import { useState, useEffect } from "react"
import { Link } from "react-router-dom"


function CountriesList(props) {
    const{countries} = props
    console.log('countries',countries)


  return (
    <div>
        {countries.map((country)=>{
            let countryCode=country.alpha2Code
            countryCode.toLowerCase();
            return(
                <div key={country._id} className="country">
                    <Link to={`/countries/${country._id}`}>
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${countryCode}.png`}></img>
                        <h3>{country.name.official}</h3> 
                    </Link>
                </div>
            )
        })}
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