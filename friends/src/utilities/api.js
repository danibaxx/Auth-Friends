import axios from 'axios';

export function getPayload() {
  return localStorage.getItem('payload')
}

export default function() {
  return axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
      Authorization: getPayload()
    },
  })
};