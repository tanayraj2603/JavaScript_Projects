/**
 * EasyHTTP Library
 * Library for making HTTP requests
 * 
 * @version 3.0.0
 * @author Tanayraj Jhagadiawala
 * @license self
 * 
 * 
 **/


class EasyHTTP {
  //make http get request
  async get(url) {
    const response = await fetch(url);

    const resData =  await response.json();
    return resData;
  }

  //make http post request
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const resData =  await response.json();
    return resData;
  }

  //make an HTTP put request
  async put(url, data) { 
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const resData =  await response.json();
    return resData;
  }

  //make an http delete request
  async delete(url) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },  
    });
    const resData =  await 'Resource Deleted!';
    return resData;
  }
}

export const http = new EasyHTTP();