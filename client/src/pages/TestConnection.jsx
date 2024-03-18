import axios from "axios";

// const API_URL = "https://jsonplaceholder.typicode.com/users";
const API_URL = "http://localhost:3000/api/users/"
export const fetchUsers = async () => {
  const response = await axios.get(API_URL);
  console.log(response)
  return response.data;

};

const Connection = () => {
    return (
        
    )
}

export default Connection