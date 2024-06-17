import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const AddBook = () => {
  const navigate = useNavigate()
  // this states is for first and second approaches
  // const [bookName, setBookName] = useState('')
  // const [bookPrice, setBookPrice] = useState('')
  // const [publication, setPublication] = useState('')
  // const [image, setImage] = useState('')
  // const [isbnNumber, setIsbnNumber] = useState('')
  // const [authorName, setAuthorName] = useState('')
  // const [publishedAt, setPublishedAt] = useState('')

// ------------------ first approaches ---------------------
  // const handleSubmit = async(e)=>{
    // // add this while submit the form onSubmit={handleSubmit}
  //   e.preventDefault();
  //   const response = await axios.post('http://localhost:3000/book',{
  //     bookName,
  //     bookPrice,
  //     isbnNumber,
  //     authorName,
  //     publishedAt,
  //     publication,
  //     image
  //   },{
  //     headers:{
  //       'Content-Type': 'multipart/form-data'
  //     }
  //   })
  // //onChange={(e)=>setBookName(e.target.value)} in the input field
  // }

  //--------------- second approaches ------------------
  // const handleSubmit = async (e)=>{
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append('booName',bookName)
  //   formData.append('bookPrice',bookPrice)
  //   formData.append('publication',publication)
  //   formData.append('isbnNumber',isbnNumber)
  //   formData.append('authorName',authorName)
  //    formData.append('publishedAt',publishedAt)
  //   formData.append('image',image)

  //   const response = await axios.post('http://localhost:3000/book',formData)
   // //onChange={(e)=>setBookName(e.target.value)} in the input field
  // }

  // ----------------- third approaches -------------------------
  const [data,setData] = useState({
    bookName:'',
    bookPrice:'',
    publication:'',
    isbnNumber:'',
    authorName:'',
    publishedAt:''
  })
  const [image,setImage] =useState(null)

  const handleChange = (e)=>{
  //  const name = e.target.name
  //  const value = e.target.value
  const {name,value} = e.target
 

   setData({
    ...data,
    [name]:value
   })
 
    // call this function on each input value where onChange ={handleChange}
  }
  
  const handleSubmit= async (e)=>{
    e.preventDefault()
    const formData = new FormData()
    Object.entries(data).forEach(([key,value])=>{
      formData.append(key,value)
    })
    formData.append('image',image)
    const response = await axios.post("http://localhost:3000/book",formData)
    if(response.status == 201){
      navigate("/")
    }else{
      alert("something went wrong")
    }
  }

  return (
    <>
    <Navbar/>
    <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 mt-14">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <img class="mx-auto h-10 w-auto" src="https://www.svgrepo.com/show/301692/login.svg" alt="Workflow"/>
        <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Create a new book
        </h2>
       
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={handleSubmit} >
            <div class="mt-6">
                    <label for="name" class="block text-sm font-medium leading-5 text-gray-700">
               BookName
            </label>
                    <div class="mt-1 rounded-md shadow-sm">
                        <input id="name" name="bookName" onChange={handleChange} type="text" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                    </div>
                </div>

                <div class="mt-6">
                    <label for="image" class="block text-sm font-medium leading-5 text-gray-700">
               BookImage
            </label>
                    <div class="mt-1 rounded-md shadow-sm">
                        <input id="image" name="image" onChange={(e)=>setImage(e.target.files[0])} type="file"  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                    </div>
                </div>
                <div class="mt-6">
                    <label for="author" class="block text-sm font-medium leading-5 text-gray-700">
               AuthorName
            </label>
                    <div class="mt-1 rounded-md shadow-sm">
                        <input id="authorName" name="authorName" onChange={handleChange} type="text" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                    </div>
                </div>

                <div class="mt-6">
                    <label for="publication" class="block text-sm font-medium leading-5 text-gray-700">
               publication
            </label>
                    <div class="mt-1 rounded-md shadow-sm">
                        <input id="publication" name="publication" onChange={handleChange} type="text" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                    </div>
                </div>
                <div class="mt-6">
                    <label for="price" class="block text-sm font-medium leading-5 text-gray-700">
               BookPrice
            </label>
                    <div class="mt-1 rounded-md shadow-sm">
                        <input id="price" name="bookPrice" onChange={handleChange} type="text" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                    </div>
                </div>

                <div class="mt-6">
                    <label for="publishedAt" class="block text-sm font-medium leading-5 text-gray-700">
                Published At
            </label>
                    <div class="mt-1 rounded-md shadow-sm">
                        <input id="publishedAt" onChange={handleChange} name="publishedAt" type="date" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                    </div>
                </div>
                <div class="mt-6">
                    <label for="isbnNumber" class="block text-sm font-medium leading-5 text-gray-700">
                ISBN Number
            </label>
                    <div class="mt-1 rounded-md shadow-sm">
                        <input id="isbnNumber" name="isbnNumber" onChange={handleChange} type="text" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                    </div>
                </div>

                <div class="mt-6">
                    <span class="block w-full rounded-md shadow-sm">
            <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
              Add book
            </button>
          </span>
                </div>
            </form>

        </div>
    </div>
</div>


    </>
  )
}

export default AddBook
