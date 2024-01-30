import { DocumentData, QueryDocumentSnapshot, SnapshotOptions, Timestamp, addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, serverTimestamp, setDoc } from "firebase/firestore"
import { auth, firestore } from "../firebase/config"
import { IGoals, IGoalsFromFirestore, IHabitInfo, IHabitInfoToDatabase, IHabitList, IHabitListItem, IHabitListItemToFirestore } from "@/types/types"

const goalsConverter = {
  toFirestore: (goals: IGoals): IGoals => {
    return goals.map(({ name, description, icon, isCompleted, completedAt, createdAt }) => {
      return {
        name,
        description,
        icon,
        isCompleted,
        completedAt,
        createdAt,
      }
    })
  },
  fromFirestore: (goals: IGoalsFromFirestore): IGoals => {
    return goals.map(({ name, description, icon, isCompleted, completedAt, createdAt }) => {
      return {
        name,
        description,
        icon,
        isCompleted,
        completedAt: completedAt.toDate(),
        createdAt: createdAt.toDate(),
      }
    })
  }
}

const habitConverter = {
  toFirestore: ({ name, motivation, difficulty, goals, createdAt }: IHabitInfo) => {
    return {
      name,
      motivation,
      difficulty,
      goals: goalsConverter.toFirestore(goals),
      createdAt,
    }
  },
  fromFirestore: (snapshot: QueryDocumentSnapshot, options: SnapshotOptions): IHabitInfo => {
    const { name, motivation, difficulty, progress, goals, createdAt } = snapshot.data(options)

    return {
      id: snapshot.id,
      name,
      motivation,
      difficulty,
      progress,
      goals: goalsConverter.fromFirestore(goals),
      createdAt,
    }
  }
}

const habitListConverter = {
  toFirestore: ({ name, progress, createdAt }: IHabitListItemToFirestore): IHabitListItemToFirestore => {
    return {
      name,
      progress,
      createdAt
    }
  },
  fromFirestore: (snapshot: QueryDocumentSnapshot, options: SnapshotOptions): IHabitListItem => {
    const { name, progress, createdAt } = snapshot.data(options)

    return {
      id: snapshot.id,
      name,
      progress,
      createdAt
    }
  }
}

export const getHabitList = async () => {
  try {
    const userUid = auth.currentUser.uid

    const habitListCollection = collection(firestore, 'users', userUid, 'habit-list')

    const q = query(habitListCollection.withConverter(habitListConverter))

    const querySnapshot = await getDocs(q)

    const habits: IHabitList = []

    querySnapshot.forEach(doc => {
      return {
        id: doc.id,
        ...doc.data()
      }
    })

    return habits;
  } catch (e) {
    console.log(e.message)
  }
}

export const getHabitInfo = async (id: string): Promise<IHabitInfo> => {
  try {
    const userUid = auth.currentUser.uid

    const docRef = doc(firestore, 'users', userUid, 'habits', id).withConverter(habitConverter)

    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      return {
        id: id,
        ...docSnap.data(),
      }
    }

    return null
  } catch (e) {
    console.log(e.message)
  }
}

export const updateHabit = async (habit: IHabitInfo) => {
  try {
    const userUid = auth.currentUser.uid

    const habitListDocRef = doc(firestore, 'users', userUid, 'habit-list', habit.id)
    const habitsDocRef = doc(firestore, 'users', userUid, 'habits', habit.id)

    await setDoc(habitListDocRef.withConverter(habitListConverter), {
      name: habit.name,
      progress: habit.progress,
      createdAt: habit.createdAt,
    })

    await setDoc(habitsDocRef.withConverter(habitConverter), habit)

  } catch (e) {
    return console.log(e);
  }
}

export const createHabit = async (habit: IHabitInfoToDatabase) => {
  try {
    const userUid = auth.currentUser.uid

    const habitListCollectionRef = collection(firestore, 'users', userUid, 'habit-list')

    const habitListDoc = await addDoc(habitListCollectionRef.withConverter(habitListConverter), {
      name: habit.name,
      progress: habit.progress,
      createdAt: habit.createdAt
    })

    const habitsDocRef = doc(firestore, 'users', userUid, 'habits', habitListDoc.id)

    await setDoc(habitsDocRef.withConverter(habitConverter), habit)

    return habitListDoc.id
  } catch (e) {
    console.log(e.message)
  }
}

export const deleteHabit = async (id: string) => {
  try {
    const userUid = auth.currentUser.uid

    await deleteDoc(doc(firestore, 'users', userUid, 'habit-list', id))

    await deleteDoc(doc(firestore, 'users', userUid, 'habits', id))
  } catch (e) {
    console.log(e.message)
  }
}