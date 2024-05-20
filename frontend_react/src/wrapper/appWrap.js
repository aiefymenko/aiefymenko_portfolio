import React from 'react';
import {NavigationDots} from '../components'

const appWrap = (Component, idName, classNames) => function HOC () {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <div>
        <Component />
        <div className='copyright'>
          <p className='p-text'>@2024 ARTEM</p>
          <p className='p-text'>All rights reserved</p>
        </div>
      </div>
    </div>
  )
}

export default appWrap