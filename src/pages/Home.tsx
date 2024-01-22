import Top from '@shared/Top'
import { useEffect } from 'react'
import { getCards } from '@/remote/card'
import { getAdBanners } from '@/remote/adBanner'
import AdBanners from '@/components/home/AdBanners'
import CardList from '@/components/home/CardList'

function HomePage() {
  // useEffect(() => {
  //   getCards().then((response) => {
  //     console.log(response)
  //   })
  //
  //   getAdBanners().then((response) => {
  //     console.log('res', response)
  //   })
  // }, [])

  return (
    <div>
      <Top
        title="혜택 좋은 카드"
        subTitle="회원님을 위해서 헤택 좋은 카드를 모아봤어요"
      />
      <AdBanners />
      <CardList />
    </div>
  )
}

export default HomePage
