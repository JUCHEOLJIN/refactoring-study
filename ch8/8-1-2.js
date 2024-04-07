export class Account {
  constructor(type, daysOverdrawn) {
    this._type = type
    this._daysOverdrawn = daysOverdrawn;
  }

  get isPremium() {
    return this._type === 'Premium';
  }

  get bankCharge() {
    let result = 4.5;
    if (this._daysOverdrawn > 0) result += this.overdraftCharge;
    return result;
  }

  get overdraftCharge() {
    if(!this.isPremium) return this._daysOverdrawn * 1.75;

    const baseCharge = 10;
    return this._daysOverdrawn <= 7 ? baseCharge : baseCharge + (this._daysOverdrawn - 7) * 0.85;
  }

  get daysOverdrawn() {
    return this._daysOverdrawn;
  }
}

export class AccountType {
  constructor(type) {
    this._type = type;
  }
  get isPremium() {
    return this._type === 'Premium';
  }
}
