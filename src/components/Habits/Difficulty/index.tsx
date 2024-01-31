import React, { useState } from 'react'
import { List, Container, Title } from './styled'
import { DifficultyItem } from './DifficultyItem';
import { HabitDifficulty } from '@/types/types';
import { DIFFICULTY_EASY, DIFFICULTY_HARD, DIFFICULTY_MEDIUM } from '@/constant/habitConsts';

type IDifficulty = {
  startingDifficulty?: HabitDifficulty
  onChangeDifficulty: (arg0: HabitDifficulty) => void
}

export const Difficulty = ({ startingDifficulty = DIFFICULTY_EASY, onChangeDifficulty }: IDifficulty) => {
  const [focusedDifficulty, setFocusedDifficulty] = useState(startingDifficulty)

  const changeDifficulty = (difficulty: HabitDifficulty) => {
    setFocusedDifficulty(difficulty)
    onChangeDifficulty(difficulty)
  }

  return (
    <Container>
      <Title>
        Difficulty
      </Title>
      <List>
        <DifficultyItem
          title='Easy'
          changeDifficulty={changeDifficulty}
          currDifficulty={focusedDifficulty}
          difficulty={DIFFICULTY_EASY}
          icon="circle-o"
        />
        <DifficultyItem
          title='Normal'
          changeDifficulty={changeDifficulty}
          currDifficulty={focusedDifficulty}
          difficulty={DIFFICULTY_MEDIUM}
          icon="dot-circle-o"
        />
        <DifficultyItem
          title='Hard'
          changeDifficulty={changeDifficulty}
          currDifficulty={focusedDifficulty}
          difficulty={DIFFICULTY_HARD}
          icon="circle"
        />
      </List>
    </Container>
  )
}