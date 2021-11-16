import { Component, OnInit } from '@angular/core';
import { ExpenseModel } from '@Models/expenses/expense.model';
import { ExpenseService } from '@Services/http/expenses/expense.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss'],
})
export class ExpensesComponent implements OnInit {
  expenses: ExpenseModel[];
  loadingGet: boolean;

  constructor(private expenseService: ExpenseService) {
    this.loadingGet = true;
    this.expenses = [];
    // this.expenses = [
    //   new ExpenseModel(
    //     "Réparation de l'afficheur du téléphone",
    //     'Checking the network cables, modem, and router Reconnecting to Wi-F',
    //     20000,
    //     undefined
    //   ),
    //   new ExpenseModel(
    //     "Réparation de l'afficheur du téléphone",
    //     'Checking the network cables, modem, and router Reconnecting to Wi-F',
    //     20000,
    //     undefined
    //   ),
    //   new ExpenseModel(
    //     "Réparation de l'afficheur du téléphone",
    //     'Checking the network cables, modem, and router Reconnecting to Wi-F',
    //     20000,
    //     undefined
    //   ),
    //   new ExpenseModel(
    //     "Réparation de l'afficheur du téléphone",
    //     'Checking the network cables, modem, and router Reconnecting to Wi-F',
    //     20000,
    //     undefined
    //   ),
    //   new ExpenseModel(
    //     "Réparation de l'afficheur du téléphone",
    //     'Checking the network cables, modem, and router Reconnecting to Wi-F',
    //     20000,
    //     undefined
    //   ),
    //   new ExpenseModel(
    //     "Réparation de l'afficheur du téléphone",
    //     'Checking the network cables, modem, and router Reconnecting to Wi-F',
    //     20000,
    //     undefined
    //   ),
    //   new ExpenseModel(
    //     "Réparation de l'afficheur du téléphone",
    //     'Checking the network cables, modem, and router Reconnecting to Wi-F',
    //     20000,
    //     undefined
    //   ),
    // ];
  }

  async ngOnInit(): Promise<void> {
    try {
      this.loadingGet = true;
      const response = await this.expenseService.GetLazy().toPromise();
      console.log('Get All: ', response);
      this.expenses = response;
      this.loadingGet = false;
    } catch (error) {
      //
    }
  }
}
