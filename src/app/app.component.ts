import { Component} from '@angular/core';

import { Population, Service } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Service]
})
export class AppComponent {
  populationData: Population[];

  constructor(service: Service) {
      this.populationData = service.getPopulationData();
  }

  customizeItems(items) {
      var sortedItems = [];

      items.forEach(function(item) {
          var startIndex = item.series.stack === "male" ? 0 : 3;
          sortedItems.splice(startIndex, 0, item);
      });
      return sortedItems;
  }
}
