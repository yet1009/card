import Flex from '@shared/Flex'
import { Link, useLocation } from 'react-router-dom'
import { css } from '@emotion/react'
import { colors } from '@/styles/colorPalette'

const Navbar = () => {
  const location = useLocation()
  const showSignButton =
    ['/signup', '/signin'].includes(location.pathname) === false

  return (
    <Flex justify="space-between" align="center" css={navbarContainerStyles}>
      <Link to={'/'}>홈</Link>
      {showSignButton ? <Link to={'/signup'}>로그인/회원가입</Link> : null}
    </Flex>
  )
}

const navbarContainerStyles = css`
  z-index: 99;
  position: sticky;
  left: 0;
  top: 0;
  padding: 10px 24px;
  border-bottom: 1px solid ${colors.gray}
  background-color: #fff;
`

export default Navbar
