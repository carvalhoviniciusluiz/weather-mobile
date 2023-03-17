import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  align-items: center;
  margin: 22px 0;
`;
export const ImageWeather = styled.Image.attrs({
  resizeMode: 'cover'
})`
  width: 146px;
  height: 120px;
`;
export const H2 = styled.Text`
  font-size: 45px;
  margin-top: 20px;
  font-weight: 300;
`;
export const FeelsLike = styled.Text`
  color: #7f7f7f;
  margin-top: -8px;
  margin-bottom: 5px;
`;
export const Description = styled.Text`
  padding: 2px 0;
`;
export const DescriptionText = styled.Text``;
export const Span = styled.Text`
  color: #7f7f7f;
`;
export const Strong = styled.Text`
  font-size: 20px;
`;
export const Location = styled.Text`
  font-size: 14px;
`;
