import genreContent from '../fixtures/genre-content.json'

function getGenreList() {
  //   return [...new Set(genreContent.map((item) => item.genre))]
  return genreContent.reduce((array, item) => {
    if (array.indexOf(item.genre) === -1) {
      return [...array, item.genre]
    } else {
      return array
    }
  }, [])
}

export default function getSorted() {
  const genreList = getGenreList()
  console.log(genreList)
}
