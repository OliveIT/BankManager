export interface BankItem {
  id: number,
  account: string,
  employee: string,
  bank: string,
  branch: string,
  accType: string,
  accNumber: string,
  empNumber: string,
  lastUpdate: Date,
  [key: string]: number | string | Date;
}