import { SimpleGrid, Text } from '@chakra-ui/react'
import { GameQuery } from '../App'
import useGames, { Platform } from '../hooks/useGames'
import { Genre } from '../hooks/useGenres'
import GameCard from './GameCard'
import GameCardContainer from './GameCardContainer'
import GameCardSkeleton from './GameCardSkeleton'

interface Props {
  gameQuery: GameQuery
}

export default function GameGrid ({ gameQuery }: Props) {
  const { data: games, error, isLoading } = useGames(gameQuery)

  const Skeletons = [1, 2, 3, 4, 5, 6]

  return (
    <>
      {error && <Text color='red'>{error}</Text>}
      <SimpleGrid
        padding='10px'
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={3}
      >
        {isLoading &&
          Skeletons.map(skeleton => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}
        {games.map(game => (
          <GameCardContainer key={game.id}>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  )
}
