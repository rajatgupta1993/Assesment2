import * as actions from '../actions/action'
import * as actionTypes from '../common/actionTypes'

describe('actions', () => {
  it('should create an action to save data , action with type SAVE_DATA', () => {
    const text = 'Data From API'
    const expectedAction = {
      type: actionTypes.SAVE_DATA,
      data: text
    }
    expect(actions.saveData(text)).toEqual(expectedAction)
  })

  it('should create an action to dispatch action to saga to make API call,action with type FETCH_DATA', () => {

    const expectedAction = {
      type: actionTypes.FETCH_DATA,
    }
    expect(actions.fetchData()).toEqual(expectedAction)
  })

  it('should create an action to get details of an ID, action with type GET_DETAILS', () => {
    const text = 'Data From API'
    const expectedAction = {
      type: actionTypes.GET_DETAILS,
      data: text
    }
    expect(actions.getDetails(text)).toEqual(expectedAction)
  })

  it('should create an action to save  detail of id,action with type  SAVE_DETAIL', () => {
    const text = 'Data From API'
    const expectedAction = {
      type:actionTypes.SAVE_DETAIL,
      data: text
    }
    expect(actions.saveDetail(text)).toEqual(expectedAction)
  })

  it('should create an action to post data on sever, action with type  POST_DATA', () => {
    const text = 'Data From API'
    const expectedAction = {
      type: actionTypes.POST_DATA,
      data: text
    }
    expect(actions.postDataToServerAction(text)).toEqual(expectedAction)
  })

})
