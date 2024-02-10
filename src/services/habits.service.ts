import { IGoals, IHabitInfo, IHabitInfoToDatabase, IHabitList } from "@/types/types"
import { DatabaseError } from "./errors.service"
import { supabase } from "@/supabase/config"

const goalsFromDatabase = (goals: IGoals): IGoals => {
  return goals.map(goal => {
    return {
      ...goal,
      completedAt: new Date(goal.completedAt),
      createdAt: new Date(goal.createdAt)
    }
  })
}

const goalsToDatabase = (goals: IGoals) => {
  return goals.map(goal => {
    return {
      ...goal,
      completedAt: goal.completedAt.toISOString(),
      createdAt: goal.createdAt.toISOString()
    }
  })
}

const habitListFromDatabase = (data): IHabitList => {
  return data.map(({ id, name, progress, createdAt }) => {
    return {
      id,
      name,
      progress,
      createdAt: new Date(createdAt)
    }
  })
}

const habitInfoFromDatabase = ({ id, name, motivation, difficulty, goals, progress }): IHabitInfo => {
  return {
    id,
    name,
    motivation,
    difficulty,
    goals: goalsFromDatabase(goals),
    progress,
  }
}

const habitInfoToDatabase = ({ name, motivation, difficulty, goals, progress }: IHabitInfoToDatabase) => {
  return {
    name,
    motivation,
    difficulty,
    goals: goalsToDatabase(goals),
    progress,
  }
}

export const getHabitList = async () => {
  try {
    const session = await supabase.auth.getSession()

    if (session.error) throw session.error;

    const { data, error } = await supabase
      .from('habits')
      .select(`id, name, progress`)
      .eq('user_id', session.data.session?.user.id)

    if (error) throw error;

    return habitListFromDatabase(data);
  } catch (e) {
    throw new DatabaseError('Something unexpected happened... Try again later')
  }
}

export const getHabitInfo = async (id: number): Promise<IHabitInfo> => {
  try {
    const session = await supabase.auth.getSession()

    if (session.error) throw session.error;

    const { data, error } = await supabase
      .from('habits')
      .select(`id, name, motivation, difficulty, progress, goals`)
      .eq('id', id)
      .single()

    if (error) throw error;

    return habitInfoFromDatabase(data)
  } catch (e) {
    throw new DatabaseError('Something unexpected happened... Try again later')
  }
}

export const updateHabit = async (habit: IHabitInfo) => {
  try {
    const session = await supabase.auth.getSession()

    if (session.error) throw session.error;

    const { error } = await supabase
      .from('habits')
      .update(habitInfoToDatabase(habit))
      .eq('id', habit.id)

    if (error) throw error;

  } catch (e) {

    console.log(habit)
    throw new DatabaseError('Something unexpected happened... Try again later')
  }
}

export const createHabit = async (habit: IHabitInfoToDatabase) => {
  try {
    const session = await supabase.auth.getSession()

    if (session.error) throw session.error;

    const { data, error } = await supabase
      .from('habits')
      .insert(habitInfoToDatabase(habit))
      .select()
      .single()

    if (error) throw error;

    return data.id
  } catch (e) {
    throw new DatabaseError('Something unexpected happened... Try again later')
  }
}

export const deleteHabit = async (id: number) => {
  try {
    const session = await supabase.auth.getSession()

    if (session.error) throw session.error;

    const { error } = await supabase
      .from('habits')
      .delete()
      .eq('id', id)

    if (error) throw error;

  } catch (e) {
    throw new DatabaseError('Something unexpected happened... Try again later')
  }
}