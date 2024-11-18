import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'courseHub';

  data: any[] = [];

  constructor(private dataService: DataService) {}

  /* ngOnInit(): void {
    this.dataService.fetchData().subscribe({
      next: (response) => {
        this.data = response as any[];
        console.log(this.data);
      },
      error: (error) => {
        console.error("Error:", error);
      }
    });
  } */

 /*  ngOnInit() {
    this.dataService.fetchData().subscribe(response => {
      this.data = response as any[];
    });
  } */

  ngOnInit(): void {
    this.dataService.getData().subscribe({
      next: (data) => {
        this.data = data.data,
        console.log(data)
      },
      error: (console) => console.error("Error: ", Error)
    });
  }

}
