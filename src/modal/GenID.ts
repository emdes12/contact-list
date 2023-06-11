export default {
  generateID(): string {
    const alpha = "abcdefghijklmnopqrstuvwxyz1234567890";

    const id = [];

    for (let i = 0; i < 20; i++) {
      id.push(alpha[Math.floor(Math.random() * alpha.length)]);
    }
    const newID = id.join("");

    return newID;
  },
};
