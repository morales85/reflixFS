import React, { Component } from 'react';
// import YouTube from 'react-youtube';
import { BrowserRouter as Route, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import '../style/movie.css'
import '../style/movieDetail.css'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
var moment = require('moment');



class MovieDetail extends Component {


    render() {
        const theme = createMuiTheme({
            palette: {
              primary: { main: '#11cb5f' }, 
              secondary: { main: '#c0392b' }, 
            },
          });
    const title = this.props.match.params.title
    const movie = this.props.movies.find(m => m.title === title)
    // console.log(id)
    console.log(movie)

        return (
                        <div id="movie">
            <h3>{movie.title}({moment(movie.release_date).format('Do of MMMM, YYYY')})</h3> 
            <div className='descPic'>
                <img className="imagen" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                <span className='description'>{movie.overview}</span>
            </div>
            <ThemeProvider theme={theme}>
            <span className='backb'><Link style={{ textDecoration: 'none' }} to="/catalog"><Button variant="outlined" color="secondary" >Back</Button></Link></span>
            </ThemeProvider>
            </div>
        )
    }
}

export default MovieDetail;