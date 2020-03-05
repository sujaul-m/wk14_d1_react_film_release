import React, {Component} from 'react';
import Film from './Film';

class FilmList extends Component {
  render() {
    const filmNodes = this.props.data.map(film => {
      return(<Film link = {film.url}>{film.name}</Film>)
    })

    return(
      <ul className = "film-list">
        {filmNodes}
      </ul>
    )
  }
}

export default FilmList;
