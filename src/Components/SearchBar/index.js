import React, { Component, Fragment } from 'react';
import { Input, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../../Actions';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }

        this.handleSearch = this.handleSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSearch = () => {
        this.props.search(this.state.keyword);
    }

    handleChange = (event) => {
        this.setState({
            keyword: event.target.value
        })
    }

    render() {
        return (
            <Fragment>
                <Input icon={<Icon name='search' inverted circular link onClick={this.handleSearch} />} placeholder='Search...' onChange={(event) => this.handleChange(event)} style={{marginLeft: 0}} />
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        strSearch: state.strSearch
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        search: (strSearch) => {
            dispatch(actions.searchAction(strSearch));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);