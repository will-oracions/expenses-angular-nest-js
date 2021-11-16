import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor() {}

  substring(lenght: number, value: string): string {
    return value.substr(0, lenght);
  }
}
