import {
  HStack,
  List,
  ListItem,
  Image,
  Stack,
  Skeleton,
  Button,
  Heading
} from '@chakra-ui/react'
import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'

interface Props {
  onSelectGenre: (genre: Genre) => void
  selectedGenreId?: number
}

export default function GenreList ({ onSelectGenre, selectedGenreId }: Props) {
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
    <>
      <Heading fontSize='2xl' marginBottom={3}>
        Genres
      </Heading>
      <List>
        {genres?.results.map(genre => (
          <ListItem key={genre.id} paddingY='5px'>
            <HStack>
              <Image
                boxSize='32px'
                objectFit='cover'
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                onClick={() => onSelectGenre(genre)}
                variant='link'
                fontSize='lg'
                fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
                whiteSpace='normal'
                textAlign='left'
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  )
}
