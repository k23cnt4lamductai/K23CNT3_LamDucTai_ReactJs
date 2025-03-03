import React from 'react'
import LdtLoginComp from './LdtLoginComp';
import LdtLogoutComp from './LdtLogoutComp';

export default function LdtLoginControl(props) {
    var isLoggedIn = props.isLoggedIn;
    var ldtLoginControl = isLoggedIn?<LdtLoginComp />: <LdtLogoutComp />;
  return (
    <div>
      {ldtLoginControl}
    </div>
  )
}