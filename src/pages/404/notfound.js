import React, {Component} from 'react'

import BrokenIcon from './Computer_on_fire.svg'

export default class NotFound extends Component {
    render() {
        return(
            <div>
                <img src={BrokenIcon} alt='BrokenIcon' />
                <div>Something went wrong!</div>
            </div>
        )
    }
}