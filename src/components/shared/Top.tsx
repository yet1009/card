import Flex from '@shared/Flex'
import Text from '@shared/Text'
import { css } from '@emotion/react'

interface TopProps {
  title?: string
  subTitle?: string
}

const Top = ({ title, subTitle }: TopProps) => {
  return (
    <Flex direction="column" css={containerStyles}>
      <Text typography="t4" bold={true}>
        {title}
      </Text>
      <Text typography="t7">{subTitle}</Text>
    </Flex>
  )
}

const containerStyles = css`
  padding: 24px;
`

export default Top
