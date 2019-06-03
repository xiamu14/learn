class HashTable {
  table = []
  constructor() {
    this.table = []
  }
  put(key:string, value:any) {
    const position = this.loseloseHashCode(key)
    this.table[position] = value
  }
  remove(key: string) {
    this.table[this.loseloseHashCode(key)] = undefined
  }
  get(key:string) {
    return this.table[this.loseloseHashCode(key)]
  }
  private loseloseHashCode(key:string) {
    let hash = 0
    const keys = Array.from(key)
    keys.map((item, index) => {
      hash += key.charCodeAt(index)
    })
    return hash % 37
  }
}

const hash = new HashTable();
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');

console.log(hash.get('Tyrion'))
