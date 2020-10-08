import React from 'react';

import ServerButton from '../ServerButton'

import Logo from '../../assets/Logo.svg';
import TypeScript from '../../assets/TypeScript.svg';
import ReactJS from '../../assets/ReactJS.svg';

import { Container, Separator } from './styles'

const ServerList: React.FC = () => {
  return (
    <Container>
    <ServerButton isHome logo={Logo} name="Thaina Server" />

      <Separator />

      <ServerButton hasNotifications mentions={52}  logo={ReactJS} name="ReactJS" />
      <ServerButton mentions={42}  logo={TypeScript} name="TypeScript" />
    </Container>
  );
}

export default ServerList;
