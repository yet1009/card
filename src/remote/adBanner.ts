import { collection, getDocs } from 'firebase/firestore'
import { store } from '@/remote/firebase'
import { COLLECTIONS } from '@constants'
import { AdBanner } from '@/models/card'

export async function getAdBanners() {
  const adBannerSnapShot = await getDocs(
    collection(store, COLLECTIONS.ADBANNER),
  )
  console.log('cardSnap', adBannerSnapShot)
  return adBannerSnapShot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as AdBanner),
  }))
}
