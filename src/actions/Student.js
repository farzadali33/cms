import axios from "axios";

const url = "http://localhost:3001/Student";

export const getStudents = async () => {
  try {
    const response = await axios.get("http://localhost:3001/Students");
    console.log(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
export async function createStudents() {
  try {
    const { response } = await axios.post(url);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
