import react from 'react'
import SearchResultSelector from '../selectors/SearchResultSelector'
describe('test', () => {
    it('testing selector', () => {
        const  it  = SearchResultSelector;
        const dummyState = [{
                                "id": 8,
                                "url": "http://localhost:3000/img8.jpg",
                                "title": "12 Angry Men",
                                "details": {
                                    "description": "A jury holdout attempts to prevent a miscarriage of justice",
                                    "age": "1957",
                                    "director": "Sidney Lumet"
                                }
                            },
                                {
                                    "id": 9,
                                    "url": "http://localhost:3000/img9.jpg",
                                    "title": "The Good, the Bad and the Ugly",
                                    "details": {
                                        "description": "A bounty hunting scam joins two men in an uneasy alliance",
                                        "age": "1966",
                                        "director": "Sergio Leone"
                                    }
                            }];
        const allData = dummyState;
        const getSearchTerm = "good";
        const expectedOutput = [{
            "id": 9,
            "url": "http://localhost:3000/img9.jpg",
            "title": "The Good, the Bad and the Ugly",
            "details": {
                "description": "A bounty hunting scam joins two men in an uneasy alliance",
                "age": "1966",
                "director": "Sergio Leone"
            }
        }];
        expect(it(getSearchTerm, allData )).toEqual(expectedOutput);
    })
}); 
