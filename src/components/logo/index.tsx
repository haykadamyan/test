import React, { memo } from 'react';

type LogoProps = {};

function Logo(props: LogoProps) {
  return (
    <img src="/logo.svg" alt="logo" />
  );
}

export default memo(Logo);
