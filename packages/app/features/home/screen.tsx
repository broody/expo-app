import {
  Anchor,
  H1,
  Input,
  Paragraph,
  Separator,
  Sheet,
  XStack,
  YStack,
  ListItem,
  Text,
  YGroup,
} from '@my/ui'
import { ChevronRight, Cloud, Moon, Star, Sun } from '@tamagui/lucide-icons'
import { SolitoImage as Image } from 'solito/image'
import React, { useState } from 'react'
import bgImage from '../../../assets/RYO_Background.png'
import Button from '@my/ui/src/Button'
export function HomeScreen() {
  return (
    <>
      <Image src={bgImage} alt="" fill />
      <YStack f={1} jc="center" ai="center">
        <YStack
          height={600}
          width={350}
          p="12px"
          bc="#202221"
          borderRadius="6px"
          borderColor="black"
          borderWidth="2px"
          backgroundColor="#202221"
          space={20}
        >
          <Text fontFamily="ChicagoFLF">Lobby</Text>
          <YGroup>
            <YGroup.Item>
              <ListItem title="test" icon={Star} />
            </YGroup.Item>
            <YGroup.Item>
              <ListItem title="test" icon={Star} />
            </YGroup.Item>
            <YGroup.Item>
              <ListItem title="test" icon={Star} />
            </YGroup.Item>
            <YGroup.Item>
              <ListItem title="test" icon={Star} />
            </YGroup.Item>
          </YGroup>
        </YStack>
      </YStack>
    </>
  )
}
