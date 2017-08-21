import { createSelector } from 'reselect'
const getSearchQuery = (query) => {
    return query };
const getAllData = (query,store) =>{
    return store.homeReducer.data};

const a=5;


 const SearchResultSelector = createSelector(
  [ getSearchQuery,getAllData ],
  ( query, allData) => {

   console.log('testing ');
   return  (allData.length > 0) ? allData.filter((item) => item.title.toUpperCase().indexOf(query.toUpperCase()) !== -1) : null;
  }
)

export default SearchResultSelector;