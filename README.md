# Retrofix - a Netflix clone

RetroFix is a Reactjs-based Netflix clone and you can [see it in action over on Netlify](https://retrofix.netlify.app/).

## Technologies used

- React
- React Router (React Library)
- Styled-Components (React library for CSS in JS)
- Fuse.js (JS library for fuzzy searching)
- Firebase authentication (Google API)

## Main features

- Multi-page app that closely mimics the appearance and behaviour of the Netflix home, registration, sign in, browse and search pages
- responsive, dynamic layout that adapts to mobile, tablet and desktop screens
- user accounts:
  - account creation and sign in/out functionality
  - protected routes and redirection based on sign-in status
    users can change their avatars
  - search functionality - users can live search the content on the browse page
- accessibility - users can navigate the site using the keyboard

## Aims

After completing Karl Hadwen's "Netflix in React JS" course on Scrimba, I decided I wanted to build my own Netflix clone from scratch and in my own way. I wanted to expand the functionality, customize it, and make it more closely resemble and behave like the real Netflix.

My main aims included:

- building a multi-page app using React Router
- implementing Firebase authentication and protected/redirected routes
- using styled-components for CSS styling and creating reusable components
- experimenting with different patterns for:
  - creating reusable components
  - organising files/folders
  - importing/exporting functions and components
- building and styling complicated dynamic layouts that adapt to different devices (mobile, tablet, desktop)

## Possible improvements

- adding a small modal that appears when you hover over a show in the desktop layout
- moving the content database over to Firestore
- randomise film/show order within the rows
- further polish to the slide track functionality on the tablet/desktop layout, such as:
  - page indicator
  - cycling back to the first page if you click next on the last page
  - buttons only appearing if you can move in that direction
  - only loading in three pages at a time to improve performance
  - skeleton loading of images and slide tracks
- ability to create additional profiles
