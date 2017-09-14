import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';

// There was an issues running Jest test runner with Axios. Axios was attempting to do a 
// XMLHttpRequest when it ran in the jsdom headless browser environment that Jest uses for tests. 
// This resulted in a network error because the request was cross domain without using cors. The 
// solution is to change the default adapter used by axios to the Node.js http adapter instead. 

// This fixes that issue but creates a new issue. The network call times out and this causes Jest 
// to throw an error, exiting the test runner. 

// A permenant solution is the mock the implementation of axios and provide an unresolved promise. 
// This code, whilst redundant, has been left in as part of the solution process. 

export function testFixAxios() {
  axios.defaults.adapter = httpAdapter;
}
