import streamingContent from '../fixtures/streaming-content.json'

function getGenreList() {
  return streamingContent.reduce((array, item) => {
    if (array.indexOf(item.genre) === -1) {
      // if array (accumulator) doesn't contain the genre add it to the array
      return [...array, item.genre]
    } else {
      // else return the unmodified array
      return array
    }
  }, [])

  //   return [...new Set(genreContent.map((item) => item.genre))]
}

function filterByGenre(genre) {
  return streamingContent.filter((item) => item.genre === genre)
}

function sortContentByGenre(genreList) {
  return genreList.map((genre) => ({
    genre,
    content: filterByGenre(genre),
  }))
}

export default function getContentByGenre() {
  const genreList = getGenreList()
  return sortContentByGenre(genreList)
}

/* 
1. Create a list of all genres

2. Create an object containing the films & shows for each genre, i.e {genre, content}
We do this by mapping through the genreList arr. Use each genre to filter streamingContent arr.

3. Return an array containing these genre objects.
*/
