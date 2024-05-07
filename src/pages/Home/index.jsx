import '../../App.css'
import homeImage from '../../assets/home-illustration.svg'
import styled from 'styled-components'

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f9f9fc;
  height: 824px;
  margin: 65px;
  padding: 50px;
`

const HomeTitle = styled.h1`
  font-family: Trebuchet MS;
  font-size: 50px;
  font-weight: 700;
  line-height: 80.25px;
  text-align: left;
`
const HomeButton = styled.button`
  background: #5843e4;
  border-radius: 29px;
  box-shadow: none;
  border: none;
  height: 40px;
  width: 261px;
  color: white;
  font-size: 20px;
`
const HomePicture = styled.img`
  width: 541px;
  height: 506px;
`

function Home() {
  return (
    <HomeContainer>
      <div>
        <HomeTitle>
          Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents
        </HomeTitle>
        <HomeButton>Faire le test</HomeButton>
      </div>
      <div>
        <HomePicture src={homeImage} />
      </div>
    </HomeContainer>
  )
}

export default Home
