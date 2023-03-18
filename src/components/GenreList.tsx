import {
  HStack,
  List,
  ListItem,
  Image,
  Stack,
  Skeleton,
  Button
} from '@chakra-ui/react'
import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'

interface Props {
  onSelectGenre: (genre: Genre) => void
}

export default function GenreList ({ onSelectGenre }: Props) {
  const { data: genres, isLoading, error } = useGenres()
  const Skeletons = [1, 2, 3, 4, 5, 6]
  if (error) return null
  if (isLoading)
    return (
      <Stack>
        {Skeletons.map(skeleton => (
          <HStack key={skeleton} paddingY='5px'>
            <Skeleton boxSize='32px' borderRadius={8} />
            <Skeleton height='32px' width='100px' />
          </HStack>
        ))}
      </Stack>
    )

  return (
    <List>
      {genres.map(genre => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image
              boxSize='32px'
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              onClick={() => onSelectGenre(genre)}
              variant='link'
              fontSize='lg'
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  )
}
