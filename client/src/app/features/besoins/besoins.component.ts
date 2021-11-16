import { Component, OnInit } from '@angular/core';
import {
  BesoinModel,
  BesoinPriority,
  BesoinStatus,
} from '@Models/besoins/besoin.model';

@Component({
  selector: 'app-besoins',
  templateUrl: './besoins.component.html',
  styleUrls: ['./besoins.component.scss'],
})
export class BesoinsComponent implements OnInit {
  besoins: BesoinModel[];

  constructor() {
    this.besoins = [
      new BesoinModel(
        'Passport',
        'Passport express dans les deux prochainsmois pour mener à bien un projet crutiale ( dans huits mois)',
        130000,
        //  Devise: null,
        //  Expense: null,
        undefined,
        undefined,
        undefined,
        BesoinPriority.PRIMARY
      ),
      new BesoinModel(
        'Smartphone',
        'Passport express dans les deux prochains mois pour mener à bien un projet crutiale ( dans huits mois)',
        130000,
        //  Devise: null,
        //  Expense: null,
        undefined,
        undefined,
        undefined,
        BesoinPriority.PRIMARY
      ),
      new BesoinModel(
        'Mac Book Pro',
        'Passport express dans les deux prochains mois pour mener à bien un projet crutiale ( dans huits mois)',
        130000,
        //  Devise: null,
        //  Expense: null,
        undefined,
        undefined,
        undefined,
        BesoinPriority.PRIMARY
      ),
      new BesoinModel(
        'Clavier',
        'Passport express dans les deux prochains mois pour mener à bien un projet crutiale ( dans huits mois)',
        130000,
        //  Devise: null,
        //  Expense: null,
        undefined,
        undefined,
        undefined,
        BesoinPriority.PRIMARY
      ),
    ];
  }

  ngOnInit(): void {}
}
