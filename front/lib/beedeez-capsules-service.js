import axios from 'axios'

const BEEDEEZ_API_GET_ALL_CAPSULES_URL = 'https://www.beedeez.com/api/v1/public/lessons/200/1'

class BeedeezCapsulesService {
  getAllCapsules () {
    return axios.get(BEEDEEZ_API_GET_ALL_CAPSULES_URL)
  }
}

export default BeedeezCapsulesService
