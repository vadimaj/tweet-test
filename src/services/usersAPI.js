import axios from "axios";

const BASE_URL = "https://6478886d362560649a2df8a6.mockapi.io/";
const USERS_PER_PAGE = 3;
const USERS_TOTAL = 12;

async function fetchUsers(page) {
  const options = new URLSearchParams({
    limit: USERS_PER_PAGE,
    page: page,
  });
  const { data } = await axios.get(`${BASE_URL}/users?${options}`);
  return data;
}

async function updateUser(userId, update) {
  const { data } = await axios.put(`${BASE_URL}/users/${userId}`, update);
  return data;
}

export { fetchUsers, USERS_PER_PAGE, USERS_TOTAL, updateUser };
