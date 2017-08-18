import homeReducer from '../reducers/homeReducer'


const initialState = {

  data: [],
  detailData: {}
}

describe('Root  reducer', () => {
  it('should return the initial state', () => {
    expect(homeReducer(initialState, {})).toEqual({

      data: [],
      detailData: {}
    })
  })

  it('should handle SAVE_DATA action', () => {

    const data = [{
      id: 1,
      title: "Shawshank Redemption",
      director: "Quentin Tarantino"
    }
    ]
    expect(
      homeReducer(initialState, {
        type: "SAVE_DATA",
        data: data
      })
    ).toEqual(
      {
        detailData: {},
        data: [{
          id: 1,
          title: "Shawshank Redemption",
          director: "Quentin Tarantino"
        }]

      })
  })

  it('should handle SAVE_DETAIL action', () => {
    const data = {
      id: 1,
      title: "Shawshank Redemption",
      director: "Quentin Tarantino"
    }

    expect(homeReducer(initialState, {
      type: "SAVE_DETAIL",
      data: data
    })
    ).toEqual(
      {
        detailData: data,
        data: []
      })
  })

})