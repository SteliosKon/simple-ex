import './BackgroundImage.css'

const BackgroundImage = ({ avatar }) => {
  return (
    <div className='bg-image'>
      <img src={avatar} alt='Avatar' width={208} height={270} />
    </div>
  )
}

export default BackgroundImage
