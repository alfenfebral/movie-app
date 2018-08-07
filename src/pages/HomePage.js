import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { DebounceInput } from 'react-debounce-input';

// components / actions
import * as movieActions from '../actions';
import ListViewItem from '../components/ListViewItem';

class HomePage extends Component {
  componentWillMount() {
    const { actions } = this.props;

    actions.fetchMovie();
  }

  handleSearch(e) {
    const { actions } = this.props;

    if (e.target.value.length > 0) actions.searchMovies(e.target.value);
    else actions.fetchMovie();
  }

  render() {
    const { movies, selectedMovie, isLoading, actions } = this.props;

    const RenderItem = () => {
      if (movies.results !== undefined && movies.results.length > 0) {
        return movies.results.map(item => (
          <div className="movie__col" key={item.id}>
            <ListViewItem
              title={item.title}
              subTitle={item.overview}
              active={selectedMovie === item.id}
              handleOnClick={() => actions.selectMovie(item.id)}
            />
          </div>
        ));
      }
      return <div>No data Available</div>;
    };

    return (
      <div className="movie">
        <h3 className="title">Welcome to Movie App</h3>
        <DebounceInput
          className="search"
          type="text"
          name="q"
          placeholder="Search Movies"
          debounceTimeout={500}
          onChange={e => this.handleSearch(e)}
        />
        <div className="movie__row">
          {!isLoading ? <RenderItem /> : <div>Loading</div>}
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  movies: PropTypes.object.isRequired,
  selectedMovie: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  movies: state.MovieReducer.movies,
  selectedMovie: state.MovieReducer.selectedMovie,
  isLoading: state.MovieReducer.isLoading
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Object.assign({}, movieActions), dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
