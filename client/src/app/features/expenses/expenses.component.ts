import { Component, OnInit } from '@angular/core';
import { ExpenseModel } from '@Models/expenses/expense.model';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss'],
})
export class ExpensesComponent implements OnInit {
  expenses: ExpenseModel[];

  constructor() {
    this.expenses = [
      new ExpenseModel(
        "Réparation de l'afficheur du téléphone",
        'Checking the network cables, modem, and router Reconnecting to Wi-F',
        20000,
        undefined
      ),
      new ExpenseModel(
        "Réparation de l'afficheur du téléphone",
        'Checking the network cables, modem, and router Reconnecting to Wi-F',
        20000,
        undefined
      ),
      new ExpenseModel(
        "Réparation de l'afficheur du téléphone",
        'Checking the network cables, modem, and router Reconnecting to Wi-F',
        20000,
        undefined
      ),
      new ExpenseModel(
        "Réparation de l'afficheur du téléphone",
        'Checking the network cables, modem, and router Reconnecting to Wi-F',
        20000,
        undefined
      ),
      new ExpenseModel(
        "Réparation de l'afficheur du téléphone",
        'Checking the network cables, modem, and router Reconnecting to Wi-F',
        20000,
        undefined
      ),
      new ExpenseModel(
        "Réparation de l'afficheur du téléphone",
        'Checking the network cables, modem, and router Reconnecting to Wi-F',
        20000,
        undefined
      ),
      new ExpenseModel(
        "Réparation de l'afficheur du téléphone",
        'Checking the network cables, modem, and router Reconnecting to Wi-F',
        20000,
        undefined
      ),
    ];
  }

  ngOnInit(): void {}
}
