import Button from '@shared/Button'
import styled from '@emotion/styled'
import { colors } from '@/styles/colorPalette'
import { css, keyframes } from '@emotion/react'
import { createPortal } from 'react-dom'

interface FixedBottomButtonProps {
  label: string
  onClick: () => void
  disabled?: boolean
}

const FixedBottomButton = ({
  label,
  onClick,
  disabled,
}: FixedBottomButtonProps) => {
  const $portalRoot = document.getElementById('root-portal')

  if ($portalRoot === null) {
    return null
  }

  return createPortal(
    <Container>
      <Button
        onClick={onClick}
        full={true}
        css={buttonStyles}
        size="medium"
        disabled={disabled}
      >
        {label}
      </Button>
    </Container>,
    $portalRoot,
  )
}

const slideup = keyframes`
to{
  transform: translateY(0)
}
`

const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 20px 10px 8px;
  background-color: ${colors.white};
  transform: translateY(100%);
  animation: ${slideup} 0.5s ease-in forwards;
`

const buttonStyles = css`
  border-radius: 8px;
`

export default FixedBottomButton
