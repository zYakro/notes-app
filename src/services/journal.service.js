import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, setDoc } from "firebase/firestore"
import { auth, firestore } from "../firebase/config"

const journalEntryConverter = {
  toFirestore: ({ name, text, createdAt }) => {
    return {
      name,
      text,
      createdAt
    }
  },
  fromFirestore: (snapshot, options) => {
    const { name, text, createdAt } = snapshot.data(options)

    return {
      id: snapshot.id,
      name,
      text,
      createdAt: createdAt.toDate()
    }
  }
}

const journalEntriesListConverter = {
  toFirestore: ({ name, createdAt }) => {
    return {
      name,
      createdAt
    }
  },
  fromFirestore: (snapshot, options) => {
    const { name, createdAt } = snapshot.data(options)

    return {
      id: snapshot.id,
      name,
      createdAt: createdAt.toDate()
    }
  }
}

export const getJournalEntries = async () => {
  try {
    const userUid = auth.currentUser.uid

    const entriesCollection = collection(firestore, 'users', userUid, 'journal-entries-list')

    const q = query(entriesCollection.withConverter(journalEntriesListConverter))

    const querySnapshot = await getDocs(q)

    const entries = []

    querySnapshot.forEach(doc => {
      entries.push(doc.data())
    })

    return entries;
  } catch (e) {
    console.log(e.message)
  }
}

export const getJournalEntryInfo = async (id) => {
  try {
    const userUid = auth.currentUser.uid

    const docRef = doc(firestore, 'users', userUid, 'journal-entries', id)

    const docSnap = await getDoc(docRef.withConverter(journalEntryConverter))

    if (docSnap.exists()) {
      return {
        ...docSnap.data()
      }
    }

    return null
  } catch (e) {
    console.log(e.message)
  }
}

export const updateJournalEntry = async (id, entry) => {
  try {
    const userUid = auth.currentUser.uid

    const journalListRef = doc(firestore, 'users', userUid, 'journal-entries-list', id)
    const journalEntriesRef = doc(firestore, 'users', userUid, 'journal-entries', id)

    await setDoc(journalListRef.withConverter(journalEntriesListConverter), {
      name: entry.name,
      createdAt: entry.createdAt
    })

    await setDoc(journalEntriesRef.withConverter(journalEntryConverter), entry)

  } catch (e) {
    return false;
  }
}

export const createJournalEntry = async (entry) => {
  try {
    const userUid = auth.currentUser.uid

    const entriesListRef = collection(firestore, 'users', userUid, 'journal-entries-list')

    const entriesListDoc = await addDoc(entriesListRef.withConverter(journalEntriesListConverter), {
      name: entry.name,
      createdAt: entry.createdAt
    })

    const entriesRef = doc(firestore, 'users', userUid, 'journal-entries', entriesListDoc.id)

    await setDoc(entriesRef.withConverter(journalEntryConverter), entry)

    return entriesListDoc.id
  } catch (e) {
    console.log(e.message)
  }
}

export const deleteJournalEntry = async (id) => {
  try {
    const userUid = auth.currentUser.uid

    await deleteDoc(doc(firestore, 'users', userUid, 'journal-entry-list', id))

    await deleteDoc(doc(firestore, 'users', userUid, 'journal-entries', id))
  } catch (e) {
    console.log(e.message)
  }
}
