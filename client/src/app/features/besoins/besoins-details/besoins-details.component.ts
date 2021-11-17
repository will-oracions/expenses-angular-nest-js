import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BesoinService } from '@Services/http/besoins/besoin.service';

@Component({
  selector: 'app-besoins-details',
  templateUrl: './besoins-details.component.html',
  styleUrls: ['./besoins-details.component.scss'],
})
export class BesoinsDetailsComponent implements OnInit {
  loadingGet: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private besoinService: BesoinService
  ) {
    this.loadingGet = false;
  }

  async ngOnInit(): Promise<void> {
    try {
      this.loadingGet = true;
      const id = await this.activatedRoute.snapshot.params.id;
      const response = await this.besoinService.GetById(id).toPromise();
      console.log(response);
    } catch (error) {
      //
      this.loadingGet = false;
    }
  }
}
