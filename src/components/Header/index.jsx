import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/styles/color'
import logo from '../../assets/dark-logo.png'

const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30 33 30 33px;
  align-items: center;
`

const Logo = styled.img`
  width: 187px;
  height: 70px;
`

function Header() {
  return (
    <HeaderContainer>
      <div>
        <Logo src={logo} />
      </div>
      <nav>
        <StyledLink to="/" $isFullLink>
          Accueil
        </StyledLink>
        <StyledLink to="/survey/1">Questionnaire</StyledLink>
        <StyledLink to="/freelances">Freelances</StyledLink>
      </nav>
    </HeaderContainer>
  )
}

export default Header
