export class Expense {
  constructor(
    public id: string,

    public lastModified: Date,

    public date: string,
    public expenditure1: string,
    public cost1: string,

    public expenditure2?: string,
    public cost2?: string,

    public expenditure3?: string,
    public cost3?: string,

    public expenditure4?: string,
    public cost4?: string,

    public expenditure5?: string,
    public cost5?: string
  ) {}
}
