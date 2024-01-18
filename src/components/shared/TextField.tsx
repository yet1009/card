import React, {
  FocusEventHandler,
  forwardRef,
  InputHTMLAttributes,
  useState,
} from 'react'
import Text from '@shared/Text'
import Input from '@shared/Input'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode
  hasError?: boolean
  helpMesssage?: React.ReactNode
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField({ label, hasError, onFocus, onBlur, helpMesssage, ...props }, ref) {
    const [focused, setFocused] = useState(false)
    //포커스 처리
    const labelColor = hasError ? 'red' : focused ? 'blue' : undefined
    const handleFocus: FocusEventHandler<HTMLInputElement> = (event) => {
      setFocused(true)
      onFocus?.(event)
    }

    const handleBlur: FocusEventHandler<HTMLInputElement> = (event) => {
      setFocused(false)
      onBlur?.(event)
    }

    return (
      <div>
        {label ? (
          <Text
            typography="t5"
            color={labelColor}
            display="inline-block"
            style={{ marginBottom: 6 }}
          >
            {label}
          </Text>
        ) : null}
        <Input
          ref={ref}
          aria-invalid={hasError}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
          {helpMesssage ? <Text typography='t6' color={labelColor} display='inline-block' style={{ marginTop: 6, fontSize: 12 }}>{helpMesssage}</Text> : null}
      </div>
    )
  },
)

export default TextField
