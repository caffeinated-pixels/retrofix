function getGenreList(contentArray) {
  return contentArray.reduce((array, item) => {
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

// function filterByGenre(genre) {
//   return streamingContent.filter((item) => item.genre === genre)
// }

// function sortContentByGenre(genreList) {
//   return genreList.map((genre) => ({
//     genre,
//     content: filterByGenre(genre),
//   }))
// }

export default function sortStreamingContent(unsortedContent, category) {
  const sortedByCategory =
    category === 'home'
      ? unsortedContent
      : unsortedContent.filter((content) => content.category === category)

  const genreList = getGenreList(sortedByCategory)
  const sortedByGenre = genreList.map((genre) => ({
    genre,
    content: sortedByCategory.filter((item) => item.genre === genre),
  }))

  return sortedByGenre
}
