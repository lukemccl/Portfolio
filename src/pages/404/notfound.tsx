import BrokenIcon from './Computer_on_fire.svg'

const NotFound = () => {

    return(
        <div>
            <img src={BrokenIcon} alt='BrokenIcon' />
            <div>Something went wrong!</div>
        </div>
    )
}

export default NotFound;