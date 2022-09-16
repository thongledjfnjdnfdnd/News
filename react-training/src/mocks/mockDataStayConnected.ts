export interface IStayConnected {
  icon: string
  backGroundIcon: string
  description: string
  action: string
}

export const mockDataStayConnected: IStayConnected[] = [
  {
    icon: 'fa fa-facebook-f',
    backGroundIcon: '#3b5998',
    description: '6879 Fans',
    action: 'LIKE',
  },
  {
    icon: 'fa fa-twitter',
    backGroundIcon: '#1da1f2',
    description: '568 Followers',
    action: 'FOLLOW',
  },
  {
    icon: 'fa fa-youtube',
    backGroundIcon: '#ff0000',
    description: '5039 Subscribers',
    action: 'SUBSCRIBE',
  },
]
