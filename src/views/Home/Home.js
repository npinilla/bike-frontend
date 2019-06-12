import React, { Component } from 'react';
import API from '../../utils/API';
import CanvasJSReact from '../../utils/canvasjs.react';
import { CurrentUsage } from '../../components/CurrentUsage';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var lastUpdate;

class Home extends Component{
  state = {
    usage: [],
    perMinute: true
  }

  componentDidMount(){
    API.get('/usage').then(result =>
      this.setState(() => ({
        usage: result.data,
        perMinute: true
      }))
    );
  }

  changeGraph = event => {
    let button = event.target;
    if (this.state.perMinute){
      API.get('/usage/hourly').then(result =>
        this.setState(() => ({
          usage: result.data,
          perMinute: false
        }))
      );
      button.innerHTML = "Ver por minuto";
    }else{
      lastUpdate = null;
      API.get('/usage').then(result =>
        this.setState(() => ({
          usage: result.data,
          perMinute: true
        }))
      );
      button.innerHTML = "Ver por hora";
    }
  }

  render() {
    const { usage, perMinute } = this.state;
    lastUpdate = lastUpdate ? (lastUpdate) : (usage[usage.length - 1]);
    usage.forEach(e => {e.x = new Date(e.x)});
		const options = {
			animationEnabled: true,
			title:{
				text: "Uso de bicicletas Bike Santiago"
			},
			axisX: {
        valueFormatString: "hh:mm",
        title: perMinute ? ("Por minuto") : ("Por hora")
			},
			axisY: {
				title: "Bicicletas utilizadas",
        includeZero: false
			},
			data: [{
				xValueFormatString: "DD MMM hh:mm",
				type: "spline",
				dataPoints: usage
			}]
		}
		return (
		<div>
      {lastUpdate ? (
        <CurrentUsage lastUpdate={lastUpdate} />
      ) : (
        <div></div>
      )
      }
			<CanvasJSChart options = {options} />
      <button type="button" onClick={this.changeGraph}>
        Ver por hora
      </button>
		</div>
		);
	}
};

export default Home;
