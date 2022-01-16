class DefaultMap<K, D> extends Map<K, D> {
  private getDefault: () => D;
  constructor(props: { getDefault: () => D }) {
    super();
    this.getDefault = props.getDefault;
  }
  get(key: K): D {
    let value = super.get(key);
    if (!value) {
      value = this.getDefault();
      super.set(key, value);
    }
    return value;
  }
}

export default DefaultMap;
