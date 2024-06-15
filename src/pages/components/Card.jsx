import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({book}) => {
  return (
    <div className='mt-20'>
    <div className="max-w-sm my-7 rounded overflow-hidden shadow-lg" key={book._id}>
  <img className="w-full" src={book.imageUrl ?book.imageUrl: "https://thumbs.dreamstime.com/b/open-book-isolated-white-16094903.jpg"} alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{book.bookName}</div>
    <p className="text-green-700 text-base">
     Rs. {book.bookPrice}
    </p>
    <p className="text-black-700 text-base">
    {book.isbnNumber}
    </p>

  </div><button className='my-4 ml-4 p-2 bg-blue-500 text-white rounded-xl'> <Link to={`/book/${book._id}`} >See More</Link> </button>
</div>
    </div>

  )
}

export default Card
