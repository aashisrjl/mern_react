import {React,useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import axios from 'axios'

const Home = () => {
  const [books,setBooks] = useState([]);
  const fetchBooks = async ()=>{
   const response= await axios.get("http://localhost:3000/book");
   if(response.status == 200){
   setBooks(response.data.data)
   }

  }
  useEffect(()=>{
    fetchBooks();
  },[])
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
    </>
  )
}

export default Home
