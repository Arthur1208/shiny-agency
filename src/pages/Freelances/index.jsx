import DefaultPicture from '../../assets/profile.png'
import Card from '../../components/Card'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { Loader } from '../../utils/styles/Atoms'
const freelanceProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'Devops',
    picture: DefaultPicture,
  },
  {
    name: 'John Doe',
    jobTitle: 'Developpeur frontend',
    picture: DefaultPicture,
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeuse Fullstack',
    picture: DefaultPicture,
  },
]

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  width: 748px;
`

const FreelanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`
const TitleContainer = styled.div`
  margin-bottom: 50px;
  margin-top: 50px;
  text-align: center;
`

function Freelances() {
  const [freelance, setFreelance] = useState([])
  const [isDataLoading, setDataLoading] = useState(false)

  useEffect(() => {
    async function fetchFreelance() {
      setDataLoading(true)
      try {
        const response = await fetch(`http://localhost:8000/freelances`)
        const { freelancersList } = await response.json()
        setFreelance(freelancersList)
      } catch (err) {
        console.log(err)
      } finally {
        setDataLoading(false)
      }
    }
    fetchFreelance()
  }, [])

  return (
    <FreelanceContainer>
      <TitleContainer>
        <h1>Trouvez votre prestataire</h1>
        <p>Chez Shiny nous réunissons les meilleurs profils pour vous.</p>
      </TitleContainer>
      {isDataLoading ? (
        <Loader data-testid="loader" />
      ) : (
        <CardsContainer>
          {freelance.map(({ name, job, picture }, index) => (
            <Card key={index} label={job} title={name} picture={picture}></Card>
          ))}
        </CardsContainer>
      )}
    </FreelanceContainer>
  )
}
export default Freelances
