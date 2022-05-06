import axios from 'axios';

const BASE_URL = `http://localhost:5000/api`;
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDA3MmE3ZGM1MjNmNzI5NDNkZWNhMiIsImlzYWRtaW4iOnRydWUsImlhdCI6MTY0OTg0NjA3MCwiZXhwIjoxNjUwNzEwMDcwfQ.0p55KeUrl0V_g4kJ7p2r-ny4ghlycjQ4QYzaKnC3ra0';

export const publicRequest = axios.create({
  baseURL: BASE_URL
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` }
});
