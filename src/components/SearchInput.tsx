import { useRef } from 'react'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'
import useGameQueryStore from '../store'
import { useNavigate } from 'react-router-dom'

export default function SearchInput () {
  const ref = useRef<HTMLInputElement>(null)
  const setSerachText = useGameQueryStore(selector => selector.setSerachText)
  const navigate = useNavigate()
  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        if (ref.current) {
          setSerachText(ref.current.value)
          navigate('/')
        }
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
