import { useRef } from 'react'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'

interface Props {
  onSearch: (searchText: string) => void
}

export default function SearchInput ({ onSearch }: Props) {
  const ref = useRef<HTMLInputElement>(null)

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        if (ref.current) onSearch(ref.current.value)
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={10}
          placeholder='Search Games...'
          variant={'filled'}
        />
      </InputGroup>
    </form>
  )
}
