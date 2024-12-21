import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const SignUp = () => {
    const [formData,setFormData]=useState({
        username:'',
        email:'',
        password:''
    })
    const [userData,setUserData]=useState([]);
    const navigate=useNavigate();

    useEffect(()=>{
        const fetchData = async()=> {
            const res= await axios.get('http://localhost:3000/api/items');
            const data= res.data;
            setUserData(data);

        }
        const interval=setInterval(() =>fetchData(), 1000);
        return ()=> clearInterval(interval);
    },[])
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <form className="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-lg" 
        onSubmit={async(e)=>{
            e.preventDefault();
            try {
              await  axios.post('http://localhost:3000/api/create',formData)

            } catch (error) {
                console.log(`Error Massage :-> ${error}`);
                
            }
            setFormData({username:'',email:'',password:''});

        }} >
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="username"
            id="username"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            value={formData.username}
            onChange={(e)=>{setFormData({...formData,username:e.target.value})}}
          />
          <label
            htmlFor="username"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Username
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            id="email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            value={formData.email}
            onChange={(e)=>{setFormData({...formData,email:e.target.value})}}
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="password"
            id="password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            value={formData.password}
            onChange={(e)=>{setFormData({...formData,password:e.target.value})}}
          />
          <label
            htmlFor="password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
        >
          Sign Up
        </button>
      </form>

      {/* show data */}
       <table className="min-w-full border-collapse">
  <thead className="bg-gray-100">
    <tr>
      <th className="border p-3 text-left">Username</th>
      <th className="border p-3 text-left">Email</th>
      <th className="border p-3 text-left">Password</th>
      <th className="border p-3 text-left">actions</th>
      
    </tr>
  </thead>
  <tbody>
    {userData.map((item) => {
      return (
        <tr key={item.email} className="hover:bg-gray-50">
          <td className="border p-3">{item.username}</td>
          <td className="border p-3">{item.email}</td>
          <td className="border p-3">{item.password}</td>
          <td className="border p-3">
          <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={()=>{navigate(`/update/${item._id}`)}}
>
    Update
</button>
<button
    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
    onClick={async () => {
        try {
            await axios.post(`http://localhost:3000/api/deleteOne/${item._id}`);
        } catch (error) {
            console.log('Errors :', error);
        }
    }}
>
    Delete
</button>
      

          </td>
         
        </tr>
      );
    })}
  </tbody>
</table>

    </div>
  );
};

export default SignUp;