import Button from './Button'

const Header = ({getData}) => {
  return (
    <div>
        <h1 className='text-center mt-2 mb-4'>Task Tracker</h1>
        <Button getData={getData}/>
    </div>
  )
}

export default Header