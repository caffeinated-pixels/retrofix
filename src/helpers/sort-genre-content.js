import genreContent from '../fixtures/streaming-content.json'

function getGenreList() {
  return genreContent.reduce((array, item) => {
    if (array.indexOf(item.genre) === -1) {
      return [...array, item.genre]
    } else {
      return array
    }
  }, [])

  //   return [...new Set(genreContent.map((item) => item.genre))]
}

function sortContentByGenre() {}

export default function getSorted() {
  const genreList = getGenreList()
  console.log(genreList)
}
