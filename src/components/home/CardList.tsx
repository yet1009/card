import ListRow from '@shared/ListRow'
import { useQuery, useInfiniteQuery } from 'react-query'
import { getCards } from '@/remote/card'

import _ from 'lodash'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useCallback } from 'react'
import Badge from '@shared/Badge'
import { useNavigate } from 'react-router-dom'

const CardList = () => {
  const {
    data,
    hasNextPage = false,
    isFetching,
    fetchNextPage,
  } = useInfiniteQuery(
    ['cards'],
    ({ pageParam }) => {
      console.log('pageparams', pageParam)
      return getCards()
    },
    {
      getNextPageParam: (snapshot) => {
        console.log(snapshot)

        return snapshot.lastVisible
      },
    },
  )

  const navigate = useNavigate()

  // console.log(data)
  const loadMore = useCallback(() => {
    if (hasNextPage === false || isFetching) {
      return
    }

    fetchNextPage()
  }, [fetchNextPage, hasNextPage, isFetching])

  if (data == null) {
    return null
  }

  const cards = _.flatten(data?.pages.map(({ items }) => items))

  return (
    <div>
      <InfiniteScroll
        dataLength={cards.length}
        hasMore={hasNextPage}
        loader={<></>}
        next={loadMore}
        scrollThreshold={'100px'}
      >
        <ul>
          {cards?.map((card, index) => {
            return (
              <ListRow
                right={
                  card.payback != null ? <Badge label={card.payback} /> : null
                }
                contents={
                  <ListRow.ListRowTexts
                    title={`${index + 1}위`}
                    subTitle={card.name}
                  />
                }
                withArrow={true}
                key={card.id}
                onClick={() => {
                  navigate(`/card/${card.id}`)
                }}
              />
            )
          })}
        </ul>
      </InfiniteScroll>
    </div>
  )
}

export default CardList
