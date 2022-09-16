// lib
import { memo } from 'react'

// styles
import { StyledTextCategory } from './styles'

export type CategoryAndArchiveProps = {
  textColor: string
  dataCategoryAndArchive: string[]
}

const CategoryAndArchive = ({ textColor, dataCategoryAndArchive }: CategoryAndArchiveProps) => {
  return (
    <StyledTextCategory color={textColor}>
      {dataCategoryAndArchive.map((item) => (
        <div key={item}>
          <p>{item}</p>
          <hr />
        </div>
      ))}
    </StyledTextCategory>
  )
}

export default memo(CategoryAndArchive)
