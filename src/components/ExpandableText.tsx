import { Box, Text, Button } from '@chakra-ui/react'
import { useState } from 'react'

type Props = {
  text: string
}

export default function ExpandableText ({ text }: Props) {
  const limit = 300
  const showReadMoreButton = text.length >= limit
  const [showFullDescription, setShowFullDescription] =
    useState(showReadMoreButton)
  const handleShowFullDescription = () => {
    setShowFullDescription(!showFullDescription)
  }

  return (
    <Box>
      <Text>
        {showFullDescription && showReadMoreButton
          ? text.slice(0, limit) + '...'
          : text}
      </Text>
      {showReadMoreButton && (
        <Button size='sm' onClick={handleShowFullDescription} fontWeight='bold'>
          <Text>{!showFullDescription ? 'Show less' : 'Read more'}</Text>
        </Button>
      )}
    </Box>
  )
}
