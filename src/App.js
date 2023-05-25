import './App.css';
import axios from 'axios';
import {Routes, Route} from 'react-router-dom'

import Header from './components/header';
import CountriesList from './components/countriesList';
import CountryDetails from "./components/countryDetails"



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
      <div className="container">
        <div className="row">
        {fetching? 
        <Routes>
          <Route path='/' element={<CountriesList  countries={countries}/> }></Route>
          
          <Route path='/countries/:countryCode' element={<CountryDetails />}></Route>
        </Routes>          
        : <h3>Loading</h3>
        }
        </div>
      </div>
    </div>
  )



}

export default App;
