import { Heading } from '@chakra-ui/react'
import useGenres from '../hooks/useGenres'
import usePlatforms from '../hooks/usePlatforms'
import useGameQueryStore from '../store'

export default function GameHeading () {
  const genreId = useGameQueryStore(selector => selector.gameQuery.genreId)
  const platformId = useGameQueryStore(
    selector => selector.gameQuery.platformId
  )
  const { data: genres } = useGenres()
  const { data: platforms } = usePlatforms()
  const selectedPlatform = platforms?.results.find(
    platform => platform.id === platformId
  )
  const genre = genres?.results.find(genre => genre.id === genreId)
  const heaing = `${selectedPlatform || ''} ${genre?.name || ''} Games`
  return (
    <Heading as='h1' fontSize='2xl' marginY={5}>
      {heaing}
    </Heading>
  )
}
