import './Card.css'
import BackgroundImage from './Components/BackgroundImage'
import Information from './Components/Information'

const Card = ({ user }) => {
  const { avatar } = user
  return (
    <div className='card'>
      <BackgroundImage avatar={avatar} />
      <Information user={user} />
    </div>
  )
}

export default Card
