// lib
import { memo } from 'react'

// types
import { IStayConnected } from '@mocks/mockDataStayConnected'

// component
import TabNavigation from '@components/TabNavigation'
import Social from '@components/Social'

export type MostPopularProps = {
  data: IStayConnected[]
}

const StayConnected = ({ data }: MostPopularProps) => {
  return (
    <div className='mt-5'>
      <TabNavigation nameCategory='Stay Connected' color='#333' />
      {data.map((item) => (
        <Social
          key={item.icon}
          action={item.action}
          backGroundIcon={item.backGroundIcon}
          description={item.description}
          icon={item.icon}
        />
      ))}
    </div>
  )
}

export default memo(StayConnected)
