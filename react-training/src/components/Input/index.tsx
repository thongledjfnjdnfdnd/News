// lib
import { memo } from 'react'

export type InputProps = {
  placeholder: string
}

const Input = ({ placeholder }: InputProps) => {
  return <input placeholder={placeholder} type='text' id='form4Example1' className='form-control' />
}

export default memo(Input)
