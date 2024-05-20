import React from 'react';
import {NavigationDots} from '../components'

const appWrap = (Component, idName, classNames) => function HOC () {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <div className='app__wrapper app__flex'>
        <Component />
        <div className='copyright'>
          <p className='p-text'>@2024 ARTEM</p>
          <p className='p-text'>All rights reserved</p>
        </div>
      </div>
      <NavigationDots active={idName} />
    </div>
  )
}

export default appWrap