class Storage {
  constructor(items) {
    this.#items = items;
  }

  #items;

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }
  removeItem(itemToRemove) {
    while (this.#items.includes(itemToRemove)) {
      this.#items.splice(1, this.#items.indexOf(itemToRemove));
    }
  }
}
const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem('Scaner');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
