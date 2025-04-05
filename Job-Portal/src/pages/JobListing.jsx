import useFetch from '@/hooks/use-fetch'
import React, { useEffect, useState } from 'react'
import { BarLoader } from 'react-spinners'

const JobListing = () => {
  const [searchQuery, setsearchQuery] = useState("")
  const [location, setlocation] = useState("")
  const [company_id,setCompany_id]=useState("");

  const {isLoaded}=useUser();
  const{
    fn: fnJobs,
    data: dataJobs,
    loading: loadingJobs,
  }=useFetch(getJobs,{
    location,
    company_id,
    searchQuery,
  });
  console.log(dataJobs);
  useEffect(()=>{
    if(isLoaded)
    fnJobs();
  });
  useEffect(()=>{
    if(isLoaded) fnJobs();
  },[isLoaded,location,company_id,searchQuery]);
  if(!isLoaded)
  {
    return <BarLoader className='mb-4' width={'100%'} color='#36d7b7'/>
  }
  return (
    
    <div>Job Listing</div>
  )
}

export default JobListing