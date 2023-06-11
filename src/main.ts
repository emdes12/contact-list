import "./css/style.css";
import FullList from "./modal/FullList";
import ListContact from "./modal/ListContact";
import ListTemaplate from "./templates/ListTemplate";
import GenID from "./modal/GenId";

const initApp = (): void => {
  const fullList = FullList.instance;
  const template = ListTemaplate.instance;

  const contactEntryForm = document.getElementById(
    "contact-form"
  ) as HTMLFormElement;

  contactEntryForm.addEventListener("submit", (event: SubmitEvent): void => {
    event.preventDefault();

    const name = document.getElementById("add-name") as HTMLInputElement;
    const email = document.getElementById("add-email") as HTMLInputElement;
    const group = document.getElementById("add-group") as HTMLInputElement;
    const number = document.getElementById("add-phone") as HTMLInputElement;

    const newname: string = name.value.trim();
    if (!newname.length) return;
    const newemail: string = email.value.trim();
    if (!newemail.length) return;
    const newgroup: string = group.value.trim();
    if (!newgroup.length) return;
    const newnumber: string = number.value;
    // if (!newnumber.length) return;

    const contactId: string = GenID.generateID();
    console.log(contactId);

    const newContact = new ListContact(
      contactId,
      newname,
      newemail,
      newgroup,
      newnumber
    );

    fullList.addItem(newContact);

    template.render(fullList);
  });

  const clearAllBtn = document.getElementById(
    "clearAllBtn"
  ) as HTMLButtonElement;
  clearAllBtn.addEventListener("click", (): void => {
    fullList.clearList();
    // GenID.generateID();
    template.clear();
  });

  fullList.load();
  template.render(fullList);
};

document.addEventListener("DOMContentLoaded", initApp);
