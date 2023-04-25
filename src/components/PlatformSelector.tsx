import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'
import useGameQueryStore from '../store'

export default function PlatformSelector () {
  const selectedPlatformId = useGameQueryStore(
    store => store.gameQuery.platformId
  )
  const setSelectedPlatformId = useGameQueryStore(store => store.setPlatformId)
  const { data: platforms, error } = usePlatforms()

  const selectedPlatform = platforms?.results.find(
    platform => platform.id === selectedPlatformId
  )
  if (error) return null
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {platforms?.results.map(platform => (
          <MenuItem
            onClick={() => setSelectedPlatformId(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}
