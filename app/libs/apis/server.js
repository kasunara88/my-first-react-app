import ky from 'ky';
import { api } from '../api';

export const loginUser = async (loginData) => {
  const response = await fetch('http://localhost:3000/api/v1/login', {
    method: 'POST',
    body: JSON.stringify({
      email: loginData?.email,
      password: loginData?.password,
    }),
  });

  console.log('LOGIN ACTION', response.json());
};

export const getMovies = async () => {
  try {
    const response = await api.get("movies", {
      caches: 'no-store',
    });

    if (response.ok) {
      return response.json();
    } else {
      return { error: true, message: 'Something went wrong' };
    }
  } catch (error) {
    if (error) {
      const status = error?.response?.status; // HTTP status code (e.g. 404, 500)
      const responseBody = await error?.response?.json(); // JSON data parsed from response body

      console.log('HTTP ERROR', status, responseBody);
    } else {
      // Handle non-HTTP errors (e.g. network down, server down)
      console.log('Unknown Error : ', error);
    }
    return undefined;
  }
};
