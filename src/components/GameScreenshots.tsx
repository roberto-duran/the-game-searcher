import { SimpleGrid, Image } from '@chakra-ui/react'
import useGameScreenshots from '../hooks/useGameScreenshots'

type Props = {
  gameId: number
}

export default function GameScreenshots ({ gameId }: Props) {
  const { data: screenshots, isLoading, error } = useGameScreenshots(gameId)
  if (isLoading) return <div>Loading...</div>
  if (error) throw error

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={2}>
      {screenshots?.results.map(screenshot => (
        <Image key={screenshot.id} src={screenshot.image} alt='Name' />
      ))}
    </SimpleGrid>
  )
}
