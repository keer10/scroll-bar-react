import React from 'react'
import PageContent from './PageContent'
import Pageheader from './Pageheader'

export default function Page() {
    return (
        <div className="page-container">
           <Pageheader />
           <PageContent />
        </div>
    )
}
