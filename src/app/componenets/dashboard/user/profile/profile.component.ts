import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as Chart from '../../../../../assets/plugins/chart.chartjs/Chart.min.js';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, AfterViewInit {
  line_chart: any;

  lineChartCanvas = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "Test", "January", "February", "March", "April", "May", "June", "July", "Test"],
    datasets: [
      {
        label: "My First dataset",
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: [65, 59, 90, 81, 56, 55, 40, 25, 28, 48, 40, 19, 96, 27, 100, 45]
      },
      {
        label: "My Second dataset",
        fillColor: "rgba(151,187,205,0.2)",
        strokeColor: "rgba(151,187,205,1)",
        pointColor: "rgba(151,187,205,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(151,187,205,1)",
        showLine: true,
        data: [28, 48, 40, 19, 96, 27, 100, 45, 65, 59, 90, 81, 56, 55, 40, 25]
      }
    ]
  };

  constructor(public translate: TranslateService) { }

  ngOnInit() {
    var canvas: any = document.getElementById("lineChartCanvas");
    var ctx = canvas.getContext("2d");
    console.log(ctx);
    var options = {
      multiTooltipTemplate: "<%= datasetLabel %>: <%= value %>",
      title: {
        display: true,
        text: 'Custom Chart Title'
      },
      legend: {
        display: true,
        enabled: true,
        position: 'top',
        legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>; width=10px; height=10px;\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>",
        labels: {
          fontColor: "#000080",
        }
      },
    }
    this.line_chart = new Chart(ctx).Line(this.lineChartCanvas, options);
    
  }

  ngAfterViewInit() {
    document.getElementById('my-lineChartCanvas-legend').innerHTML = this.line_chart.generateLegend();
    var status_legend_list = document.getElementById('my-lineChartCanvas-legend').getElementsByTagName("li");

    for (var s in status_legend_list) {
      var element: any = status_legend_list[s];
      if (!element.style){ break; }
      element.style.margin = "0 5px";
      element.getElementsByTagName("span")[0].style.padding = "8px";
      status_legend_list[s].getElementsByTagName("span")[0].style.margin = "0 2px";
      status_legend_list[s].getElementsByTagName("span")[0].style.display = "inline-block";
      document.getElementById('my-lineChartCanvas-legend').getElementsByTagName("ul")[0].style.listStyleType = "none";
    }
  }

}
