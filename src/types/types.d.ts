import { icons } from "@/utils/goals/icons"
import { DocumentData, DocumentSnapshot, Timestamp } from "firebase/firestore"

export type HEXColor = `#${string}`

export type Routes = MainRoutes & HabitRoutes & JournalRoutes & AuthRoutes

export type MainRoutes = {
  Auth
  Main
  User
}

export type HabitRoutes = {
  HabitList,
  EditHabit,
  CreateHabit
}

export type JournalRoutes = {
  Entries,
  CreateEntry,
  EditEntry
}

export type AuthRoutes = {
  SignIn,
  SignUp
}

export type IBatteryProviderReturn = {
  battery: number
  increaseBattery: () => void
  canAddBattery: () => Promise<boolean>
}

export type IAlertProviderReturn = {
  setAlert: ({ title, message }: ISetAlert) => void
  setAreYouSureAlert: ({ title, message, onYes, onNo }: ISetAreYouSurePanel) => void
}

export type ISetAlert = {
  title: string
  message: string
}

export type ISetAreYouSurePanel = {
  title: string
  message: string
  onYes: () => void
  onNo?: () => void
}

export type HabitInfo = {
  id: string

} | {}

export type IGoal = {
  name: string
  description: string
  icon: GoalIcons
  isCompleted: boolean
  completedAt: Date
  createdAt: Date
}

export type IGoalFromFirestore = {
  name: string
  description: string
  icon: GoalIcons
  isCompleted: boolean
  completedAt: Timestamp
  createdAt: Timestamp
}

export type IGoals = IGoal[]

export type IGoalsFromFirestore = IGoalFromFirestore[]

export type HabitDifficulty = 'easy' | 'medium' | 'hard'

export type IHabitInfo = {
  id: string
  name: string
  motivation: string
  difficulty: HabitDifficulty
  goals: IGoals
  progress: number
  createdAt: Date
}

export type IHabitInfoToDatabase = {
  name: string
  motivation: string
  difficulty: HabitDifficulty
  goals: IGoals
  progress: number
  createdAt: Date
}

export type IHabitListItem = {
  id: string
  name: string
  progress: number
  createdAt: Date
}

export type IHabitListItemToFirestore = {
  name: string
  progress: number
  createdAt: Date
}

export type IHabitList = IHabitListItem[]

export type GoalIcons = keyof typeof icons

export type IJournalListEntry = {
  id: string
  name: string
  createdAt: Date
}

export type IJournalEntryInfoToDatabase = {
  name: string
  text: string
  createdAt: Date
}

export type IJournalEntryInfo = {
  id: string
  name: string
  text: string
  createdAt: Date
}

export type IJournalEntriesList = IJournalListEntry[]

export type ShopItemType = 'panel' | 'background' | 'theme'

export type IShopItem = {
  name: string
  title: string
  description: string
  price: number
  type: ShopItemType
  itemProps: IShopItemImageProps
}

export type IShopItemImageProps = IShopItemThemeProps & IShopItemBackgroundProps

export type IShopItemThemeProps = {
  panelContentColor?: HEXColor
  panelColor?: HEXColor
  fontColor?: HEXColor
  titleFontColor?: HEXColor
}

export type IShopItemBackgroundProps = {
  image?: any
}

export type IShopItems = IShopItem[]

export type IShopInventory = string[]

export type IUserInfo = {
  background: string
  theme: string
}

export type IUserInfoContext = {
  userInfo: IUserPreferences
  changeUserInfo: (key: IUserPrefenceKey, value: string) => void
}

export type IUserInfoKey = 'background' | 'theme'