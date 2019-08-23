import axios from 'axios';
// yelp api 
export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer SjJY6gLkPgj3MtSpAGNrNAcRoizYxH9FzyPGrfOj8ENy_lyY_5GZipmqINpjfbSfyG_aHelBuHu4BrfGpy1MS8AM7ZzFOuHrOw4ZQOECGAcojViTOfhQ29i5QN1bXXYx'
  }
});