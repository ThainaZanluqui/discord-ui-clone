import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';


const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages>

        <ChannelMessage
          author="Thaina Zanluqui"
          date="12/07/2020"
          content="Pessoal, vcs conhecem a MERN Stack?"
        />


        <ChannelMessage
          author="Diego Fernandes"
          date="12/07/2020"
          content={
            <>
              <Mention>@Thaina Zanluqui</Mention>, Como você salvaria as mensagens de um app de chat?
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversarem #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
