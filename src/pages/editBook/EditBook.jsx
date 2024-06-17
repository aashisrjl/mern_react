import React,{useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import { useNavigate , useParams } from 'react-router-dom'
import axios from 'axios'

const EditBook = () => {
  const {id} = useParams()
  console.log(id)
  const navigate = useNavigate()
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
    const response = await axios.patch(`http://localhost:3000/book/${id}`,formData)
    if(response.status == 200){
      navigate(`/book/${id}`)
    }else{
      alert("something went wrong")
    }
  }
  const fetchBooks = async()=>{
    const response = await axios.get(`http://localhost:3000/book/${id}`)
    setData(response.data.data)
  }

  useEffect(()=>{
fetchBooks();
  },[])
  return (
    <>
    <Navbar/>
    <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 mt-14">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <img class="mx-auto h-10 w-auto" src="https://www.svgrepo.com/show/301692/login.svg" alt="Workflow"/>
        <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Edit a book
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
                        <input id="name" value={data.bookName} name="bookName" onChange={handleChange} type="text" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
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
                        <input id="authorName" name="authorName" value={data.authorName} onChange={handleChange} type="text" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                    </div>
                </div>

                <div class="mt-6">
                    <label for="publication" class="block text-sm font-medium leading-5 text-gray-700">
               publication
            </label>
                    <div class="mt-1 rounded-md shadow-sm">
                        <input id="publication" name="publication" value={data.publication} onChange={handleChange} type="text" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                    </div>
                </div>
                <div class="mt-6">
                    <label for="price" class="block text-sm font-medium leading-5 text-gray-700">
               BookPrice
            </label>
                    <div class="mt-1 rounded-md shadow-sm">
                        <input id="price" name="bookPrice" value={data.bookPrice} onChange={handleChange} type="text" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                    </div>
                </div>

                <div class="mt-6">
                    <label for="publishedAt" class="block text-sm font-medium leading-5 text-gray-700">
                Published At
            </label>
                    <div class="mt-1 rounded-md shadow-sm">
                        <input id="publishedAt" value={data.publishedAt} onChange={handleChange} name="publishedAt" type="date" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                    </div>
                </div>
                <div class="mt-6">
                    <label for="isbnNumber" class="block text-sm font-medium leading-5 text-gray-700">
                ISBN Number
            </label>
                    <div class="mt-1 rounded-md shadow-sm">
                        <input id="isbnNumber" n  ame="isbnNumber" value={data.isbnNumber} onChange={handleChange} type="text" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                    </div>
                </div>

                <div class="mt-6">
                    <span class="block w-full rounded-md shadow-sm">
            <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
              Edit book
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

export default EditBook
