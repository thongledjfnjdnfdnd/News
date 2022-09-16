// lib
import { memo } from 'react'

// styles
import { StyledArticle } from './styles'

export type SocialProps = {
  icon: string
  backGroundIcon: string
  description: string
  action: string
}

const Social = ({ icon, backGroundIcon, description, action }: SocialProps) => {
  return (
    <StyledArticle className='row mt-2' color={backGroundIcon}>
      <div className='col-md-1'>
        <a href=''>
          <i className={icon}></i>
        </a>
      </div>
      <p className='col-md-9'>{description}</p>
      <a className='col-md-2'>{action}</a>
    </StyledArticle>
  )
}

export default memo(Social)
