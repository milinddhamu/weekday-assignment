import { useEffect } from "react";
import Filters from "./components/Filters";
import JobListings from "./components/JobListings";
import "./App.css"

function App() {
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch('https://gist.githubusercontent.com/anubhavmalik/1733c9cec2aebde6ecd5bef8b906a690/raw/4b86735b765a13810823d9b532c5bdae8ef34ae1/Sample%2520JD%2520Data');
        const rawData = await response.text();
        const exports = {};
    
        // Execute the JavaScript code to populate the exports object
        eval(rawData);
        const jsonData = exports.getSampleJdJSON(); // Execute the function to get the data
        console.log(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
    
  },[])
  return (
    <div className="main-container-wrapper">
      <div className="main-container">
        <Filters />
        <JobListings />
      </div>
    </div>
  )
}

export default App
