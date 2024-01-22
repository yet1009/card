import React from 'react'
import Flex from '@shared/Flex'
import { css } from '@emotion/react'
import Text from '@shared/Text'

interface ListRowProps {
  left?: React.ReactNode
  contents?: React.ReactNode
  right?: React.ReactNode
  withArrow?: boolean
  onClick?: () => void
  as?: 'div' | 'li'
}

function ListRow({
  as = 'li',
  left,
  contents,
  right,
  withArrow,
  onClick,
}: ListRowProps) {
  return (
    <Flex as={as} css={ListRowContainerStyles} onClick={onClick}>
      <Flex css={listRowLeftStyles}>{left}</Flex>
      <Flex css={listRowContentsStyles}>{contents}</Flex>
      <Flex>{right}</Flex>
      {withArrow ? <IconArrowRight /> : null}
    </Flex>
  )
}

const ListRowContainerStyles = css`
  padding: 8px 24px;
`

const listRowLeftStyles = css`
  margin-right: 14px;
`
const listRowContentsStyles = css`
  flex: 1;
`

function ListRowTexts({
  title,
  subTitle,
}: {
  title?: string
  subTitle?: string
}) {
  return (
    <Flex direction="column">
      <Text bold={true}>{title}</Text>
      <Text typography="t7">{subTitle}</Text>
    </Flex>
  )
}

function IconArrowRight() {
  return (
    <svg
      height="24"
      viewBox="0 0 50 50"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.17 32.92l9.17-9.17-9.17-9.17 2.83-2.83 12 12-12 12z" />
      <path d="M0-.25h48v48h-48z" fill="none" />
    </svg>
  )
}

ListRow.ListRowTexts = ListRowTexts

export default ListRow
