import ListContact from "./ListContact";

interface List {
  list: ListContact[];
  load(): void;
  save(): void;
  clearList(): void;
  addItem(itemObj: ListContact): void;
  removeItem(id: string): void;
}

export default class FullList implements List {
  static instance: FullList = new FullList();

  private constructor(private _list: ListContact[] = []) {}

  get list(): ListContact[] {
    return this._list;
  }

  load(): void {
    const storedList: string | null = localStorage.getItem("contacts");
    if (typeof storedList !== "string") return;

    const parsedList: {
      _id: string;
      _name: string;
      _email: string;
      _group: string;
      _number: number;
    }[] = JSON.parse(storedList);

    parsedList.forEach((itemObj) => {
      const newListContact = new ListContact(
        itemObj._id,
        itemObj._name,
        itemObj._email,
        itemObj._group,
        itemObj._number
      );
      FullList.instance.addItem(newListContact);
    });
  }

  save(): void {
    localStorage.setItem("contacts", JSON.stringify(this._list));
  }

  clearList(): void {
    this._list = [];
    this.save();
  }

  addItem(itemObj: ListContact): void {
    this._list.push(itemObj);
    this.save();
  }

  removeItem(id: string): void {
    this._list = this._list.filter((obj) => obj.Getid !== id);
  }
}
