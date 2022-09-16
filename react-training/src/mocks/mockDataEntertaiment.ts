// assets
import post5 from '@assets/images/post-05.jpg'
import post6 from '@assets/images/post-06.jpg'
import post7 from '@assets/images/post-07.jpg'
import post8 from '@assets/images/post-08.jpg'

export interface IPost {
  alt: string
  cardTitle: string
  createDate: string
  img: string
  tab: string
}

export const mockDataEntertainment: IPost[] = [
  {
    alt: 'post',
    cardTitle: 'American live music lorem ipsum dolor sit amet consectetur',
    createDate: 'Feb 18',
    img: post5,
    tab: 'Music',
  },
  {
    alt: 'post',
    cardTitle: 'Donec metus orci, malesuada et lectus vitae',
    createDate: 'Feb 17',
    img: post6,
    tab: 'Music',
  },
  {
    alt: 'post',
    cardTitle: 'Donec metus orci, malesuada et lectus vitae',
    createDate: 'Feb 16',
    img: post7,
    tab: 'Economy',
  },
  {
    alt: 'post',
    cardTitle: 'Donec metus orci, malesuada et lectus vitae',
    createDate: 'Feb 12',
    img: post8,
    tab: 'Money & Markets',
  },
]
