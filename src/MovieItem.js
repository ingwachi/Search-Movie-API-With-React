/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'

export default class MovieItem extends Component {
    
    constructor(props) {
        super(props)
    }

    render() {

        const { id, poster_src, title, overview } = this.props.movie;
        return (
            <table key={ id } style={{textAlign: "left"}}>
                <tbody>
                    <tr>
                        <td>
                            <img src={ poster_src } alt="poster"/>
                        </td>
                        <td>
                            <strong>{ title }</strong>
                            <p>{ overview }</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}
