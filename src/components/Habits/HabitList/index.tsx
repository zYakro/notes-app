import { HabitsPanel } from '../HabitsPanel'
import { ActivityIndicatorContainer, HabitListContainer, ViewContainer } from './styled'
import { Habit } from './Habit'
import { useNavigation } from '@react-navigation/native';
import { CreateHabitIconPanel } from './CreateHabitIconPanel';
import { IHabitList, Routes } from '@/types/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { useIsTabOpenOnFocus } from '@/hooks/useIsTabOpenOnFocus/useIsTabOpenOnPage';
import { LoadingIndicator } from '@/components/ActivityIndicators/LoadingIndicator';

type IHabitListParams = {
  habits: IHabitList
  getHabitInfo: (id: string) => Promise<void>
  isListLoaded: boolean
}

export const HabitList = ({ habits, getHabitInfo, isListLoaded }: IHabitListParams) => {
  const navigation = useNavigation<StackNavigationProp<Routes>>()

  const [isTabOpen, setIsTabOpen] = useIsTabOpenOnFocus(true)

  const onEditHabit = async (id: string) => {
    setIsTabOpen(false)

    await getHabitInfo(id)
    navigation.navigate('EditHabit')
  }

  const onCreateHabit = () => {
    navigation.navigate('CreateHabit')
  }

  return (
    <ViewContainer>
      <HabitsPanel title={"▣ Habits"} isTabOpen={isTabOpen}>
        {
          !isListLoaded &&
          <ActivityIndicatorContainer>
            <LoadingIndicator animating={true} size={40} />
          </ActivityIndicatorContainer>
        }
        <HabitListContainer>
          {
            habits.map(habit => {
              return <Habit key={habit.id} onPress={onEditHabit} {...habit} />
            })
          }
        </HabitListContainer>
      </HabitsPanel>
      <CreateHabitIconPanel onPress={onCreateHabit} />
    </ViewContainer>
  )
}