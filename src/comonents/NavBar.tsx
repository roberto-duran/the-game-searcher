import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
export default function NavBar () {
  return (
    <HStack>
      <Image src={logo} boxSize={'32'} />
      <Text>NavBar</Text>
    </HStack>
  )
}
