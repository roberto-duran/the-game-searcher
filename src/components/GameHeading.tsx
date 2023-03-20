import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'

interface Props {
  gameQuery: GameQuery
}

export default function GameHeading ({ gameQuery }: Props) {
  const heaing = `${gameQuery.platform?.name || ''} ${
    gameQuery.genre?.name || ''
  } Games`
  return (
    <Heading as='h1' fontSize='2xl' marginY={5}>
      {heaing}
    </Heading>
  )
}
