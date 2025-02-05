<<<<<<< HEAD
import ky from 'ky';
import { api } from '../api';

export const loginUser = async (loginData) => {
  const response = await fetch('http://localhost:3000/api/v1/login', {
    method: 'POST',
=======
import { api } from "../api";

export const loginUser = async (loginData) => {
  const response = await fetch("http://localhost:3000/api/v1/login", {
    method: "POST",
>>>>>>> 472dfc4 (Dashboard Updated)
    body: JSON.stringify({
      email: loginData?.email,
      password: loginData?.password,
    }),
  });

<<<<<<< HEAD
  console.log('LOGIN ACTION', response.json());
=======
  console.log("LOGIN ACTION", response.json());
>>>>>>> 472dfc4 (Dashboard Updated)
};

export const getMovies = async () => {
  try {
    const response = await api.get("movies", {
<<<<<<< HEAD
      caches: 'no-store',
=======
      caches: "no-store",
>>>>>>> 472dfc4 (Dashboard Updated)
    });

    if (response.ok) {
      return response.json();
    } else {
<<<<<<< HEAD
      return { error: true, message: 'Something went wrong' };
=======
      return { error: true, message: "Something went wrong" };
>>>>>>> 472dfc4 (Dashboard Updated)
    }
  } catch (error) {
    if (error) {
      const status = error?.response?.status; // HTTP status code (e.g. 404, 500)
      const responseBody = await error?.response?.json(); // JSON data parsed from response body

<<<<<<< HEAD
      console.log('HTTP ERROR', status, responseBody);
    } else {
      // Handle non-HTTP errors (e.g. network down, server down)
      console.log('Unknown Error : ', error);
=======
      console.log("HTTP ERROR", status, responseBody);
    } else {
      // Handle non-HTTP errors (e.g. network down, server down)
      console.log("Unknown Error : ", error);
>>>>>>> 472dfc4 (Dashboard Updated)
    }
    return undefined;
  }
};
