import { Navbar } from '@/components/Navbar';
import React, { PropsWithChildren } from 'react'

interface DefaultPageProps extends PropsWithChildren {
    hasNavbar?: boolean;
}

export function DefaultPage({children, hasNavbar}: DefaultPageProps) {
  return (
    <>
        {hasNavbar ? <Navbar /> : null}
        <div className='p-4'>{children}</div>
    </>
  )
}
