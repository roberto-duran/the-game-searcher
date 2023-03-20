import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

interface Props {
  selectedSortOrder: string
  onSelectSortOrder: (sortOrder: string) => void
}

export default function SortSelector ({
  selectedSortOrder,
  onSelectSortOrder
}: Props) {
  const sortOrders = [
    { id: 1, value: '', label: 'Relevance' },
    { id: 2, value: '-added', label: 'Date Added' },
    { id: 3, value: 'name', label: 'Name' },
    { id: 4, value: '-released', label: 'Release' },
    { id: 5, value: '-metacritic', label: 'Popularity' },
    { id: 6, value: '-rating', label: 'Average rating' }
  ]

  const currentSortOrder = sortOrders.find(
    sortOrder => sortOrder.value === selectedSortOrder
  )

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrders.map(sortOrder => (
          <MenuItem
            onClick={() => onSelectSortOrder(sortOrder.value)}
            key={sortOrder.id}
            value={sortOrder.value}
          >
            {sortOrder.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}
