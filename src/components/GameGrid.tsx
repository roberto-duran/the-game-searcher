import { SimpleGrid, Text } from '@chakra-ui/react'
import { GameQuery } from '../App'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardContainer from './GameCardContainer'
import GameCardSkeleton from './GameCardSkeleton'

interface Props {
  gameQuery: GameQuery
}

export default function GameGrid ({ gameQuery }: Props) {
  const { data: games, error, isLoading } = useGames(gameQuery)

  const Skeletons = [1, 2, 3, 4, 5, 6]
  if (error) return <Text color='red'>{error.message}</Text>
  return (
    <SimpleGrid
      padding='10px'
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
    >
      {isLoading &&
        Skeletons.map(skeleton => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton key={skeleton} />
          </GameCardContainer>
        ))}
      {games?.results.map(game => (
        <GameCardContainer key={game.id}>
          <GameCard key={game.id} game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  )
}
