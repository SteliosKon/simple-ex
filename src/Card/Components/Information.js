import './Information.css'
import Contact from '../../Buttons/Contact/Contact'
import New from '../../Buttons/New/New'
import { EmailIcon, DateIcon, LocationIcon } from '../../Icons/svg'
import dateFormatter from '../../Utils/dateFormatter'

const Information = ({ user }) => {
  const {
    first_name,
    last_name,
    email,
    date_of_birth,
    address: { city, country },
  } = user

  const formattedDate = dateFormatter(date_of_birth)

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
          <EmailIcon />
          <span className='mb-8'>{email}</span>
        </div>
        <div className='location-container'>
          <LocationIcon />
          <span className='mb-8'>
            {city}, {country}
          </span>
        </div>
        <div className='date-container'>
          <DateIcon />
          <span className='mb-8'> {formattedDate}</span>
        </div>
      </div>
      <div className='contact-container'>
        <Contact />
      </div>
    </div>
  )
}

export default Information
