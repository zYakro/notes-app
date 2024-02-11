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
  id: number
} | {}

export type IGoal = {
  name: string
  description: string
  icon: GoalIcons
  isCompleted: boolean
  completedAt: Date
  createdAt: Date
}

export type IGoals = IGoal[]

export type IGoalsFromFirestore = IGoalFromFirestore[]

export type HabitDifficulty = 'easy' | 'medium' | 'hard'

export type IHabitInfo = {
  id: number
  name: string
  motivation: string
  difficulty: HabitDifficulty
  goals: IGoals
  progress: number
}

export type IHabitInfoToDatabase = {
  name: string
  motivation: string
  difficulty: HabitDifficulty
  goals: IGoals
  progress: number
}

export type IHabitListItem = {
  id: number
  name: string
  progress: number
}

export type IHabitList = IHabitListItem[]

export type GoalIcons = keyof typeof icons

export type IJournalListEntry = {
  id: number
  name: string
  createdAt: Date
}

export type IJournalEntryInfo = {
  id: number
  name: string
  text: string
  createdAt: Date
}

export type IJournalEntryToDatabase = {
  name: string
  text: string
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
  coins: number
  exp: number
  email: string
  preferences: IUserPreferences
}

export type IUserPreferences = {
  background: string
  theme: string
}

export type IUserInfoContext = {
  userInfo: IUserInfo
  changeUserPreference: (key: IUserPreferencesKey, value: string) => void
  setCoins: (coins: number) => void,
  setExp: (exp: number) => void
}

export type IUserPreferencesKey = keyof UserPreferences

export type InventoryType = string[]