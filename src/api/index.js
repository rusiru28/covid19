import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async(country)=> {
    let changebaleURl = url;

       if(country){
           changebaleURl = `${url}/countries/${country}`;
       } 
    try{
        const { data: { confirmed, recovered, deaths, lastUpdate} } = await axios.get(changebaleURl);
        
        
        
        return {confirmed,recovered,deaths,lastUpdate};
    }catch(error){

    }
}

export const fetchDailyData = async ()=> {
    try {
    
        const { data } = await axios.get(`${url}/daily`);
       
       const modifiedData = data.map((DailyData) =>( {
           confirmed:DailyData.confirmed.total,
           deaths:DailyData.deaths.total,
           date:DailyData.reportDate,
       }));
       return modifiedData;
    }catch(error){

    }

}

export const fetchcountries = async () => {
    try{
        const {data: {countries}} = await axios.get(`${url}/countries`);
        
        return countries.map((country)=> country.name);   
    }catch(error){

        console.log(error);
    }
}