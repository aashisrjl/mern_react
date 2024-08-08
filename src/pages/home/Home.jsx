import {React,useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import axios from 'axios'
import MapComponent from '../components/MapComponent'
import { fetchCoordinates } from './fetchCoordinates'

const Home = () => {
  const [books,setBooks] = useState([]);
  const [location, setLocation] = useState(null);
  const fetchBooks = async ()=>{
   const response= await axios.get("http://localhost:3000/book");
   if(response.status == 200){
   setBooks(response.data.data)

   }

  }
  // setLocation("Pashupati Nath Temple")
  useEffect(()=>{
    fetchBooks();
  },[])

  // ===========map=========
  useEffect(() => {
    const loadLocation = async () => {
      try {
        const coords = await fetchCoordinates('everest base camp'); // Replace with the desired location
        setLocation({ ...coords, name: 'pashupatiNath' }); // Add a name or other details if needed
      } catch (error) {
        console.error(error);
      }
    };
    loadLocation();
  }, []);
  return (
    <>
    <Navbar/>
    <div className='flex flex-wrap justify-evenly'  >
      {
        books.length > 0 && books.map((book)=>{
          return (
            <Card book={book}/>
          )
        })
      }
   
    </div>
    <div>
      <h1>Location Map</h1>
      {location ? <MapComponent location={location} /> : <p>Loading...</p>}
    </div>
    </>
  )
}

export default Home
