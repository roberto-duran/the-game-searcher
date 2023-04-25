import { Box, Heading, Text } from '@chakra-ui/react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import NavBar from '../components/NavBar'

export default function ErrorPage () {
  const error = useRouteError()
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Opps</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? 'This page does not exist'
            : 'An Unexpected Error Occurred'}
        </Text>
      </Box>
    </>
  )
}
