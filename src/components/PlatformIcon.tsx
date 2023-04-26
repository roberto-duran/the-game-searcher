import { HStack, Icon } from '@chakra-ui/react'
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid
} from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import Platform from '../types/Platform'
import { IconType } from 'react-icons/lib/esm/iconBase'

interface Props {
  platforms: Platform[]
}

export default function PlatformIcon ({ platforms }: Props) {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    nintendo: SiNintendo,
    linux: FaLinux,
    android: FaAndroid,
    web: BsGlobe,
    ios: MdPhoneIphone
  }
  return (
    <HStack marginY={1}>
      {platforms.map(platform => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500'>
          {platform.name}
        </Icon>
      ))}
    </HStack>
  )
}
