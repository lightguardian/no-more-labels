import api from "./axios";
import React from "react";


const request = {
  allComputers: () => {
    api.get('computers')
    .then(function (response) {
   
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }, 
}
export default request;

