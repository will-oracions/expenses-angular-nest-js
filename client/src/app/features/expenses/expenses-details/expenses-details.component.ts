import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { ExpenseService } from '@Services/http/expenses/expense.service';

@Component({
  selector: 'app-expenses-details',
  templateUrl: './expenses-details.component.html',
  styleUrls: ['./expenses-details.component.scss'],
})
export class ExpensesDetailsComponent implements OnInit {
  loadingGet: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private expenseService: ExpenseService
  ) {
    this.loadingGet = false;
  }

  async ngOnInit(): Promise<void> {
    try {
      this.loadingGet = true;
      const id = await this.activatedRoute.snapshot.params.id;
      const response = await this.expenseService.GetById(id).toPromise();
      console.log(response);
    } catch (error) {
      //
      this.loadingGet = false;
    }
  }
}
