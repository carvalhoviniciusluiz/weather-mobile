import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const PageSafe = styled.SafeAreaView`
  background: #fff;
  flex: 1;
`;
export const PageContainer = styled.ScrollView`
  height: 100%;
  padding: 0px 24px;
`;
export const PageTitle = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  margin: 36px 0;
  color: #222222;
`;
export const Button = styled(RectButton)`
  max-width: 100%;
  width: 200px;
  padding: 16px 5px;
  background: #3f0b6d;
  border-radius: 4px;
  align-items: center;
  align-self: center;
  margin-top: 20px;
`;
export const TextButton = styled.Text`
  font-style: normal;
  font-size: 18px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.2px;
  color: #fafafa;
`;
