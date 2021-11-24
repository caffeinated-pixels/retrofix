import styled from 'styled-components'

const StepLogoContainer = styled.div`
  width: 260px;
  height: 90px;
  margin: 30% auto 20px;
  display: inline-block;

  background-image: url('../images/misc/reg-devices.png');
  background-image: ${({ bgImage }) => `url(${bgImage})`};
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 260px;
`
export default StepLogoContainer
