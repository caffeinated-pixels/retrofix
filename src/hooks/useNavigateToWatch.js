import { useNavigate } from 'react-router-dom'
import { WATCH } from '../constants/routes'

export default function useNavigateToWatch(show) {
  const navigate = useNavigate()

  const handlePlay = () => {
    navigate(`${WATCH}/${show.id}`)
  }

  return handlePlay
}
