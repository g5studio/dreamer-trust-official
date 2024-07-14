export enum C2CDepositFlow {
  PrepareStep = 0,
  AmountRangeStep = 1,
  SingleAmountStep = 2,
  DepositInfoStep = 3,
}

export enum C2CWithdrawStep {
  ReserveTimeStep = 'reserveTime',
  AmountInputStep = 'amountInput',
  AuditingStep = 'auditing',
  WithdrawalInstructionStep = 'withdrawalInstruction',
}

export enum C2CDepositReceiptImgType {
  JPG = 'jpg',
  JPEG = 'jpeg',
  PNG = 'png',
}
