import './Information.css'
import Contact from '../../Buttons/Contact/Contact'
import New from '../../Buttons/New/New'
import { EmailIcon, DateIcon, LocationIcon } from '../../Icons/svg'

const Information = ({ user }) => {
  const {
    first_name,
    last_name,
    email,
    date_of_birth,
    address: { city, country },
  } = user

  const formattedDate = date_of_birth.split('').reverse().join('').replaceAll('-', '/')
  return (
    <div className='info'>
      <div className='fullname-container'>
        <span className='fullname'>
          {first_name} {last_name}
        </span>
        <div className='new-container'>
          <New />
        </div>
      </div>
      <div className='horizontal-line' />
      <div className='details'>
        <div className='email-container'>
          <span>
            <EmailIcon />
          </span>
          <span className='email'>{email}</span>
        </div>
        <div className='location-container'>
          <span>
            <LocationIcon />
          </span>
          <span className='location'>
            {city}, {country}
          </span>
        </div>
        <div className='date-container'>
          <span>
            <DateIcon />
          </span>
          <span className='date'> {formattedDate}</span>
        </div>
      </div>
      <div className='contact'>
        <Contact />
      </div>
    </div>
  )
}

export default Information
