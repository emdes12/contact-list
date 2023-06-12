import FullList from "../modal/FullList";

interface DOMList {
  ul: HTMLUListElement;
  clear(): void;
  render(FullList: FullList): void;
}

export default class ListTemaplate implements DOMList {
  ul: HTMLUListElement;

  static instance: ListTemaplate = new ListTemaplate();

  private constructor() {
    this.ul = document.getElementById("list-contact") as HTMLUListElement;
  }

  clear(): void {
    this.ul.innerHTML = "";
  }

  render(fullList: FullList): void {
    this.clear();

    fullList.list.forEach((contact) => {
      const li = document.createElement("li") as HTMLLIElement;
      li.className = "contact";

      const div = document.createElement("div") as HTMLDivElement;
      div.className = "contact-name";
      div.innerHTML = contact.Getname;
      li.append(div);

      const span = document.createElement("span") as HTMLSpanElement;
      span.className = "contact-group";
      span.innerHTML = contact.Getgroup;
      li.append(span);

      this.ul.append(li);
    });
  }
}
