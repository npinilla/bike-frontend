import React, { Component } from 'react';
import API from '../../utils/API';
import { StationDetail } from '../../components/StationDetail';

class StationList extends Component{
  state = {
    stations: []
  }

  componentDidMount(){
    API.get('/stations').then(result =>
      this.setState(() => ({
        stations: result.data
      }))
    );
  }

  render (){
    const { stations } = this.state;
    return (
      <div>
        <h2>Lista de estaciones</h2>
        <ul>
          {stations.map(station => (<StationDetail station={station} />))}
        </ul>
      </div>
    )
  }
};

export default StationList;
