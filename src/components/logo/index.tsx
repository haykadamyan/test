import React, { memo } from 'react';

type LogoProps = {
  dark?: boolean
};

function Logo({ dark }: LogoProps) {
  return (
    <img src={dark ? '/logo-dark.png' : '/logo.svg'} alt="logo" />
  );
}

export default memo(Logo);
