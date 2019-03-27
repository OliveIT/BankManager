export interface BankItem {
  id: string,
  account: string,
  employee: string,
  bank: string,
  branch: string,
  accType: string,
  accNumber: string,
  empNumber: string,
  lastUpdate: string,
  [key: string]: string;
}