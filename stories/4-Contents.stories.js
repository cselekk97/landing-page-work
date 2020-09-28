import React from 'react'

import FirstContent from '../components/contents/1-content/first-content'
import SecondContent from '../components/contents/2-content/second-content'
import ThirdContent from '../components/contents/3-content/third-content'


export default {
    title:'Contents',
    component: FirstContent
}

export const content1 = () => <FirstContent></FirstContent>
export const content2 = () => <SecondContent></SecondContent>
export const content3 = () => <ThirdContent></ThirdContent>
