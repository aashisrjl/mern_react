import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const SingleBook = () => {
  const {id} = useParams()
  console.log(id)
  const [book,setBook] = useState([])
  const fetchBooks = async()=>{
    const response = await axios.get(`http://localhost:3000/book/${id}`)
    const data = response.data
    setBook(data.data)
    console.log(data.data)
  }

  useEffect(()=>{
    fetchBooks()

  },[])
  return (
    <>
    <Navbar />

    <div className='mt-20 flex justify-center'>
    <div className="max-w-sm my-7 rounded overflow-hidden shadow-lg" >
  <img className="w-full" src={book.imageUrl? book.imageUrl: "https://thumbs.dreamstime.com/b/open-book-isolated-white-16094903.jpg"} alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{book.bookName}</div>
    <p className="text-green-700 text-base">
     Rs.{book.bookPrice}
    </p>
    <p className="text-black-700 text-base">
   isbn {book.isbnNumber}
    </p> 
    <div className="font-bold text-md mb-1">author:{book.authorName? book.authorName : " Aashish Rijal" }</div>
    <p className="text-black-700 text-base">
   Published At:  {book.publishedAt}
    </p>
    <div className="font-bold text-md mb-1 text-center mt-2">-- {book.publication} Publication --</div>

  </div>
</div>
    </div>
    </>
      
  )
}

export default SingleBook
