import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms, { Platform } from '../hooks/usePlatforms'

interface Props {
  selectedPlatform: Platform | null
  onSelectPlatform: (platform: Platform) => void
}

export default function PlatformSelector ({
  selectedPlatform,
  onSelectPlatform
}: Props) {
  const { data: platforms, error } = usePlatforms()
  if (error) return null
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {platforms?.results.map(platform => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}
