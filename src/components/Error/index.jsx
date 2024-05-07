import styled from 'styled-components'
import imageError from '../../assets/404.svg'

const ContainerError = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: #f9f9fc;
  margin: 65px;
  padding: 50px;
`
const ImgError = styled.img`
  width: 875px;
  height: 476px;
`

function Error() {
  return (
    <ContainerError>
      <h1>Oups</h1>
      <ImgError src={imageError} alt="" />
      <h1>Il semblerait qu’il y ait un problème</h1>
    </ContainerError>
  )
}

export default Error
