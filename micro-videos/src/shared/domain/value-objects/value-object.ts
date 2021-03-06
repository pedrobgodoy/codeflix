import { deepFreeze } from '../utils/object';

export default abstract class ValueObject<Value = any> {
  protected readonly _value: Value;

  constructor(value: Value) {
    this._value = deepFreeze(value);
  }

  get value(): Value {
    return this._value;
  }

  toString = (): string => {
    if (typeof this._value !== 'object' || this._value === null) {
      try {
        return this.value.toString();
      } catch (e) {
        return this._value + '';
      }
    }
    const valueStr = this.value.toString();
    return valueStr === '[object Object]' ? JSON.stringify(this._value) : valueStr;
  };
}
