const typesArray = new Set(['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie']);

export default class Character {
  constructor(name, type) {
    this.name = name;
    if (this.name.length < 2 || this.name.length > 10) {
      throw new Error('Имя должно содержать от 2 до 10 символов');
    }
    this.type = type;
    if (!typesArray.has(type)) {
      throw new Error('Укажите корректный тип персонажа');
    }
    this.health = 100;
    this.level = 1;
    this.attack = null;
    this.defence = null;
    this.special = [];
  }
}
