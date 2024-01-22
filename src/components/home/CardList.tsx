import ListRow from '@shared/ListRow'
import { useQuery, useInfiniteQuery } from 'react-query'
import { getCards } from '@/remote/card'

import _ from 'lodash'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useCallback } from 'react'

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

  console.log(data)
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
        next={fetchNextPage}
      >
        {cards?.map((card, index) => {
          return (
            <ListRow
              right={card.payback != null ? <div>{card.payback}</div> : null}
              contents={
                <ListRow.ListRowTexts
                  title={`${index + 1}위`}
                  subTitle={card.name}
                />
              }
              withArrow={true}
              key={card.id}
            />
          )
        })}
      </InfiniteScroll>
    </div>
  )
}

export default CardList
