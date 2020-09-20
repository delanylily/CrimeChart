import { Component, OnInit } from '@angular/core';
import { CrimService } from '../crim.service';
import {Chart } from 'chart.js';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hateCrimeTx',
  templateUrl: './hateCrimeTx.component.html',
  styleUrls: ['./hateCrimeTx.component.css']
})
export class HateCrimeTxComponent implements OnInit {

  chart = [];

  constructor(private crimService: CrimService, private activatedRoute: ActivatedRoute) {
  }
  crimestats: any [];
  ngOnInit () {


this.activatedRoute.data.subscribe((data: {crimestats: any}) => {
  this.crimestats = data.crimestats;
})

    this.crimService.hateCrimeTx().subscribe((res:any) => {
      let antiHispanic = res.results.map(res => res.anti_hispanic)
      let antiBlacks = res.results.map(res => res.anti_black)
      let antiWhites = res.results.map(res => res.anti_white)
      let antiArab = res.results.map(res => res.anti_arab)
      let antiGay = res.results.map(res => res.anti_gay_mixed && res.anti_lesbian && res.anti_gay_male)
      let crimeDates = res.results.map(res => res.data_year)
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
