import BeedeezCapsulesService from '../lib/beedeez-capsules-service'

const capsulesService = new BeedeezCapsulesService()

export const REQUEST_CAPSULES = 'REQUEST_CAPSULES'
function requestCapsules (capsules) {
  return {
    type: REQUEST_CAPSULES,
    capsules
  }
}

export const RECEIVE_CAPSULES = 'RECEIVE_CAPSULES'
function receiveCapsules (capsules, json) {
  return {
    type: RECEIVE_CAPSULES,
    capsules: json.results.map(result => {
      return {
        id: result._id,
        title: result.title || 'No title',
        summary: result.summary || 'No summary',
        level: result.level || 'Unknown level',
        lang: result.lang || 'Unknown language',
        status: result.status || 'Unknown status'
      }
    })
  }
}

export function fetchCapsules (capsules) {
  return (dispatch) => {
    dispatch(requestCapsules(capsules))
    return capsulesService.getAllCapsules()
      .then((response) => {
        return response.data
      }, (error) => {
        throw error
      })
      .then((json) => {
        dispatch(receiveCapsules(capsules, json))
      })
  }
}
