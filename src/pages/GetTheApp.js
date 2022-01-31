import { useLocation } from 'react-router-dom'

export default function GetTheApp() {
  const { state: show } = useLocation()

  return <h1>Get the app page {show.title}</h1>
}
