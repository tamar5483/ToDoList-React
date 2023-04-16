import axios from 'axios';

const axiosInstance=axios.create()

axiosInstance.defaults.baseURL= "http://localhost:5000"

axiosInstance.interceptors.request.use(function (config) {
 console.log("config",config)

  return config;
}, function (error) {
 console.log('error',error)
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use(function (response) {
 console.log("response",response)
 return response

}, function (error) {
  console.log('error',error)

  return Promise.reject(error);
});


 
export default {
  
  
  getTasks: async () => {
    const result = await axiosInstance.get(`/items`)    
    return result.data;
  },

  addTask: async(name)=>{
    console.log('addTask', name)
    await axiosInstance.post(`/items/${name}`)
  },

  setCompleted: async(id,name, isComplete)=>{
    console.log('setCompleted', {id, isComplete})
    const data= await axiosInstance.put(`/items/${id}`,{id:id,name:name,isCompleted:isComplete})
    return data;
  },

  deleteTask:async(id)=>{
    console.log('deleteTask')
    const data= await axiosInstance.delete(`/items/${id}`)
    return data;
  }
};
