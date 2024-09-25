export const exerciseoption={
    method: 'GET',
	headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
		'X-RapidAPI-Key':process.env.REACT_APP_RAPID_API_KEY
	}
}


export const fetchData=async (url,option)=>{
const response=await fetch(url,option);
const data=await response.json();
return data;
}