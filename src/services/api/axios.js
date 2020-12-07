import axios from 'axios'
//https://no-more-labels.herokuapp.com/
const instance =axios.create({

    baseURL:'https://no-more-labels.herokuapp.com/'
})



export default instance;