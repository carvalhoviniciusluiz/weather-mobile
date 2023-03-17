import { useRef } from 'react';
import { Container, InputWrap, Title, Row, TextInput } from './text-field-styles';

type TextFieldProps = {
  onChangeText: (text: string) => void;
  title: string;
}

export const TextField = (props: TextFieldProps) => {
  const { title, onChangeText } = props;
  const inputRef = useRef(null);
  return (
    <Container>
      <InputWrap>
        <Title>{title}</Title>
        <Row>
          <TextInput
            ref={inputRef}
            onChangeText={onChangeText}
          />
        </Row>
      </InputWrap>
    </Container>
  );
}
