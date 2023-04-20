import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'
import useGenres from '../hooks/useGenres'
import usePlatforms from '../hooks/usePlatforms'

interface Props {
  gameQuery: GameQuery
}

export default function GameHeading ({ gameQuery }: Props) {
  const { data: genres } = useGenres()
  const { data: platforms } = usePlatforms()
  const selectedPlatform = platforms?.results.find(
    platform => platform.id === gameQuery.platformId
  )
  const genre = genres?.results.find(genre => genre.id === gameQuery.genreId)
  const heaing = `${selectedPlatform || ''} ${genre?.name || ''} Games`
  return (
    <Heading as='h1' fontSize='2xl' marginY={5}>
      {heaing}
    </Heading>
  )
}
