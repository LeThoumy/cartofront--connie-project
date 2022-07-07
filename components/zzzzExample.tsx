import { styled } from '../stitches.config'

const ButtonContainer = styled('button', {
  backgroundColor: '$surface1',
  padding: '12px 16px',
  cursor: 'pointer',
})

const Text = styled('p', {
  // base styles
  color: '$txtInformative',
  fontSize: '24px',
  cursor: 'pointer'
});


export default function zzzzzExample() {
  return (<ButtonContainer><Text>Hello Mom</Text></ButtonContainer>)
}