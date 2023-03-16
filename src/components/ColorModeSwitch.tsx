import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'

export default function ColorModeSwitch () {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <HStack>
      <Switch
        isChecked={colorMode === 'dark'}
        colorScheme='green'
        onChange={toggleColorMode}
      />
      <Text>{colorMode}</Text>
    </HStack>
  )
}
