import { Component } from '@angular/core';
import { CrimService } from './crim.service';
import {Chart } from 'chart.js';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent  {
  title = 'crimeApp';
  chartTx = [];
  chartWa = [];



  constructor(private crimService: CrimService) {

  }
  ngOnInit () {
    this.crimService.hateCrimeTx().subscribe(res => {
      let antiHispanicTx = res['results'].map(res => res.anti_hispanic)
      let antiBlacksTx = res['results'].map(res => res.anti_black)
      let antiWhitesTx = res['results'].map(res => res.anti_white)
      let antiArabTx = res['results'].map(res => res.anti_arab)
      let antiGayTx = res['results'].map(res => res.anti_gay_mixed && res.anti_lesbian && res.anti_gay_male)
      let crimeDatesTx = res['results'].map(res => res.data_year)
      crimeDatesTx.sort();


      this.crimService.hateCrimeWa().subscribe(res => {
        let antiHispanicWa = res['results'].map(res => res.anti_hispanic)
        let antiBlacksWa = res['results'].map(res => res.anti_black)
        let antiWhitesWa = res['results'].map(res => res.anti_white)
        let antiArabWa = res['results'].map(res => res.anti_arab)
        let antiGayWa = res['results'].map(res => res.anti_gay_mixed && res.anti_lesbian && res.anti_gay_male)
        let crimeDatesWa = res['results'].map(res => res.data_year)
        crimeDatesWa.sort();

    
       new Chart('canvas', {
        type: 'line',
        data: {
          labels: crimeDatesTx,
          datasets: [
            {
              label: "Anti Hispanic",
              backgroundColor: 'red',
              data: antiHispanicTx,
              borderColor: 'red',
              fill: false
            },
            {
              label: "Anti Blacks",
              backgroundColor: 'black',
              data: antiBlacksTx,
              borderColor: 'black',
              fill: false
            },
            {
              label: "Anti Whites",
              backgroundColor: 'blue',
              data: antiWhitesTx,
              borderColor: 'blue',
              fill: false
            },
            {
              label: "Anti Arab",
              backgroundColor: 'green',
              data: antiArabTx,
              borderColor: 'green',
              fill: false
            },
            {
              label: "Anti Gay",
              backgroundColor: 'pink',
              data: antiGayTx,
              borderColor: 'pink',
              fill: false
            },
          ]
      },


      options: {
        legend: {
          display: true
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }]
        }
      }
    })


    new Chart('washington', {
      type: 'line',
      data: {
        labels: crimeDatesWa,
        datasets: [
          {
            label: "Anti Hispanic",
            backgroundColor: 'red',
            data: antiHispanicWa,
            borderColor: 'red',
            fill: false
          },
          {
            label: "Anti Blacks",
            backgroundColor: 'black',
            data: antiBlacksWa,
            borderColor: 'black',
            fill: false
          },
          {
            label: "Anti Whites",
            backgroundColor: 'blue',
            data: antiWhitesWa,
            borderColor: 'blue',
            fill: false
          },
          {
            label: "Anti Arab",
            backgroundColor: 'green',
            data: antiArabWa,
            borderColor: 'green',
            fill: false
          },
          {
            label: "Anti Gay",
            backgroundColor: 'pink',
            data: antiGayWa,
            borderColor: 'pink',
            fill: false
          },
        ]
    },


    options: {
      legend: {
        display: true
      },
      scales: {
        xAxes: [{
          display: true
        }],
        yAxes: [{
          display: true
        }]
      }
    }
  })




    })

}

  )
}
}
