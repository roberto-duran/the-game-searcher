import { SimpleGrid } from '@chakra-ui/react'
import useGameScreenshots from '../hooks/useGameScreenshots'

type Props = {
  gameId: number
}

export default function GameScreenshots ({ gameId }: Props) {
  const { data: screenshots, isLoading, error } = useGameScreenshots(gameId)
  if (isLoading) return <div>Loading...</div>
  if (error) throw error

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={2}>
      {screenshots?.results.map(screenshot => (
        <img key={screenshot.id} src={screenshot.image} alt='Name' />
      ))}
    </SimpleGrid>
  )
}
