import { collection, getDocs } from 'firebase/firestore'
import { store } from '@/remote/firebase'
import { COLLECTIONS } from '@constants'
import { Card } from '@/models/card'

export async function getCards() {
  const cardSnapShot = await getDocs(collection(store, COLLECTIONS.CARD))
  console.log('cardSnap', cardSnapShot)
  return cardSnapShot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Card),
  }))
}
