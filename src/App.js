import './App.css';
import axios from 'axios';
import Header from './components/header';
import CountriesList from './components/countriesList';

import {useState, useEffect} from 'react';

const apiURL = 'https://ih-countries-api.herokuapp.com/countries'


function App() {
  //Write state
  // 1) Status of fetched data
  const [fetching, setFetching]= useState(false);
  
  // 2) List of Countries from API
  const [countries, setCountries]=useState([])

  useEffect(()=>{
      axios.get(apiURL).then((response)=>{
          // Listing all the Countries in state
          setCountries(response.data);
          // Give Bueno status to data fetch
          setFetching(true)
      })
  })

  return (
    <div>
      <Header/>
      <CountriesList countries={countries}/> 
      App
    </div>
  )



}

export default App;
