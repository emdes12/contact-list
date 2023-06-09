export interface Contact {
  id: string;
  name: string;
  email: string;
  group: string;
  number: number;
}

export default class ListContact implements Contact {
  constructor(
    private _id: string = "",
    private _name: string = "",
    private _email: string = "",
    private _group: string = "",
    private _number: number = 0
  ) {}

  get Getid() {
    return this._id;
  }
  set Setid(id: string) {
    this._id = id;
  }

  get Getname() {
    return this._name;
  }
  set Setname(name: string) {
    this._name = name;
  }

  get Getemail() {
    return this._email;
  }
  set Setemail(email: string) {
    this._email = email;
  }

  get Getgroup() {
    return this._group;
  }
  set Setgroup(group: string) {
    this._group = group;
  }

  get Getnumber() {
    return this._number;
  }
  set Setnumber(number: number) {
    this._number = number;
  }
}
