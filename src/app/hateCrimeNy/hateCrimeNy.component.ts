import { Component, OnInit } from '@angular/core';
import { CrimService } from '../crim.service';
import {Chart } from 'chart.js';

@Component({
  selector: 'app-hateCrimeNy',
  templateUrl: './hateCrimeNy.component.html',
  styleUrls: ['./hateCrimeNy.component.css']
})
export class HateCrimeNyComponent implements OnInit {
  chart = [];
  constructor(private crimService: CrimService) {

  }

  ngOnInit () {
    this.crimService.hateCrimeTx().subscribe(res => {
      let antiHispanic = res['results'].map(res => res.anti_hispanic)
      let antiBlacks = res['results'].map(res => res.anti_black)
      let antiWhites = res['results'].map(res => res.anti_white)
      let antiArab = res['results'].map(res => res.anti_arab)
      let antiGay = res['results'].map(res => res.anti_gay_mixed && res.anti_lesbian && res.anti_gay_male)
      let crimeDates = res['results'].map(res => res.data_year)
      crimeDates.sort();
    
      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: crimeDates,
          datasets: [
            {
              label: "Anti Hispanic",
              backgroundColor: 'red',
              data: antiHispanic,
              borderColor: 'red',
              fill: false
            },
            {
              label: "Anti Blacks",
              backgroundColor: 'black',
              data: antiBlacks,
              borderColor: 'black',
              fill: false
            },
            {
              label: "Anti Whites",
              backgroundColor: 'blue',
              data: antiWhites,
              borderColor: 'blue',
              fill: false
            },
            {
              label: "Anti Arab",
              backgroundColor: 'green',
              data: antiArab,
              borderColor: 'green',
              fill: false
            },
            {
              label: "Anti Gay",
              backgroundColor: 'pink',
              data: antiGay,
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
}

