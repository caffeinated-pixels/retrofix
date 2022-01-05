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

export default function sortStreamingContent(unsortedContent, category) {
  const filteredByCategory =
    category === 'home'
      ? unsortedContent
      : unsortedContent.filter((content) => content.category === category)

  const genreList = getGenreList(filteredByCategory)
  const sortedByGenre = genreList.map((genre) => ({
    genre,
    content: filteredByCategory.filter((item) => item.genre === genre),
  }))

  return sortedByGenre
}

/* 
1. Filter content by category; don't filter 'home' (i.e. contains both 'films' & 'series')

2. Create a list of all genres

3. Create an object containing the films & shows for each genre, i.e {genre, content}
We do this by mapping through the genreList arr. Use each genre to filter streamingContent arr.

4. Return an array containing these genre objects.
*/
