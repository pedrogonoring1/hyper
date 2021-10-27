export class StatusStep {
  public nameStep: string;
  public statusStep: string;

  constructor(params: Partial<StatusStep>) {
    this.nameStep = params.nameStep || '';
    this.statusStep = params.statusStep || '';
  }
}
