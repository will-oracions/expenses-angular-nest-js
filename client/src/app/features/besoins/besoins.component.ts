import { Component, OnInit } from '@angular/core';
import { BesoinModel } from '@Models/besoins/besoin.model';
import { BesoinService } from '@Services/http/besoins/besoin.service';

@Component({
  selector: 'app-besoins',
  templateUrl: './besoins.component.html',
  styleUrls: ['./besoins.component.scss'],
})
export class BesoinsComponent implements OnInit {
  loadingGet: boolean;
  besoins: BesoinModel[];

  constructor(private besoinService: BesoinService) {
    this.loadingGet = false;
    this.besoins = [];
  }

  async ngOnInit(): Promise<void> {
    try {
      this.loadingGet = true;
      const response = await this.besoinService.GetLazy().toPromise();
      this.besoins = response;
      console.log(response);
    } catch (error) {
      //
      this.loadingGet = false;
    }
  }
}
