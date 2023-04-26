import useTrailers from '../hooks/useTrailers'

type Props = {
  gameId: number
}

export default function GameTrailer ({ gameId }: Props) {
  const { data: trailers, isLoading, error } = useTrailers(gameId)
  if (isLoading) return <div>Loading...</div>
  if (error) throw error

  const firstVideo = trailers?.results[0]

  return firstVideo ? (
    <video src={firstVideo.data[480]} poster={firstVideo.preview} controls />
  ) : null
}
