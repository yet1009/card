import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getCard } from '@/remote/card'
import Top from '@shared/Top'
import ListRow from '@shared/ListRow'
import FixedBottomButton from '@shared/FixedBottomButton'
import Flex from '@shared/Flex'
import Text from '@shared/Text'
import { css } from '@emotion/react'
import { motion } from 'framer-motion'

// interface DataProps {
//   name: string
//   corpName: string
//   promotion?: { [key: string]: any }
//   tags?: string[]
//   benefit: string[]
// }

const CardPage = () => {
  const { id = '' } = useParams()
  const { data } = useQuery(['card', id], () => getCard(id), {
    enabled: id !== '',
  })

  if (data == null) {
    return null
  }

  const { name, corpName, promotion, tags, benefit } = data

  const subTitle =
    promotion != null ? removeHtmlTag(promotion.title) : tags?.join(', ')

  return (
    <div>
      <Top title={`${corpName} ${name}`} subTitle={subTitle} />
      <ul>
        {benefit.map((text, index) => {
          return (
            <motion.li
              initial={{
                opacity: 0,
                translateX: -90,
              }}
              whileInView={{
                opacity: 1,
                translateX: 0,
              }}
              transition={{
                duration: 0.7,
                ease: 'easeIn',
                delay: index * 0.1,
              }}
              // animate={{
              //   opacity: 1,
              //   translateX: 0,
              // }}
            >
              <ListRow
                key={`k_${index}`}
                left={<IconCheck />}
                contents={
                  <ListRow.ListRowTexts
                    title={`혜택 ${index + 1}`}
                    subTitle={text}
                  />
                }
                as="div"
              />
            </motion.li>
          )
        })}
      </ul>

      {promotion != null ? (
        <Flex direction="column" css={termsContainerStyles}>
          <Text bold={true}>유의사항</Text>
          <Text typography="t7">{removeHtmlTag(promotion.terms)}</Text>
        </Flex>
      ) : null}

      <FixedBottomButton label="신청하기" onClick={() => {}} />
    </div>
  )
}

const termsContainerStyles = css`
  margin-top: 80px;
  padding: 0 24px 80px 24px;
`

function IconCheck() {
  return (
    <svg
      height="24"
      version="1.1"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(0 -1028.4)">
        <path
          d="m22 12c0 5.523-4.477 10-10 10-5.5228 0-10-4.477-10-10 0-5.5228 4.4772-10 10-10 5.523 0 10 4.4772 10 10z"
          fill="#27ae60"
          transform="translate(0 1029.4)"
        />
        <path
          d="m22 12c0 5.523-4.477 10-10 10-5.5228 0-10-4.477-10-10 0-5.5228 4.4772-10 10-10 5.523 0 10 4.4772 10 10z"
          fill="#2ecc71"
          transform="translate(0 1028.4)"
        />
        <path
          d="m16 1037.4-6 6-2.5-2.5-2.125 2.1 2.5 2.5 2 2 0.125 0.1 8.125-8.1-2.125-2.1z"
          fill="#27ae60"
        />
        <path
          d="m16 1036.4-6 6-2.5-2.5-2.125 2.1 2.5 2.5 2 2 0.125 0.1 8.125-8.1-2.125-2.1z"
          fill="#ecf0f1"
        />
      </g>
    </svg>
  )
}

function removeHtmlTag(text: string) {
  let output = ''

  for (let i = 0; i < text.length; i += 1) {
    if (text[i] === '<') {
      for (let j = i + 1; j < text.length; j += 1) {
        if (text[j] === '>') {
          i = j
          break
        }
      }
    } else {
      output += text[i]
    }
  }

  return output
}

export default CardPage
