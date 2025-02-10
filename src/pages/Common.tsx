import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { CommonInterface } from '@/interface/common'
import React, { Fragment } from 'react'

const Common: React.FC<CommonInterface> = ({ children }) => {
    return (
        <Fragment>
            <Header />
            <div className='min-h-screen'>{children}</div>
            <Footer />
        </Fragment>
    )
}

export default Common
