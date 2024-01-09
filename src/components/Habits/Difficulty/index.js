import React, { useState } from 'react'
import { List, Container, Title } from './styled'
import { useTheme } from 'styled-components';
import { DifficultyItem } from './DifficultyItem';

export const Difficulty = ({ startingDifficulty = '', onChangeDifficulty }) => {
  const [focusedDifficulty, setFocusedDifficulty] = useState(startingDifficulty)

  const changeDifficulty = (difficulty) => {
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
          difficulty={'easy'}
          icon="circle-o"
        />
        <DifficultyItem
          title='Normal'
          changeDifficulty={changeDifficulty}
          currDifficulty={focusedDifficulty}
          difficulty={'medium'}
          icon="dot-circle-o"
        />
        <DifficultyItem
          title='Hard'
          changeDifficulty={changeDifficulty}
          currDifficulty={focusedDifficulty}
          difficulty={'hard'}
          icon="circle"
        />
      </List>
    </Container>
  )
}