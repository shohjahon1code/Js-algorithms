const productList = {
  calculateAllPrice: () => {
    let allPrice = 0;
    for (const key in productList) {
      const product = productList[key];
      if (typeof product === "object") {
        allPrice += product.price * (product.weight || product.amount);
      }
    }
    return allPrice;
  },
  potota: {
    name: "kartoshka",
    weight: 4,
    price: 5000,
  },
  tomato: {
    name: "Pamidor",
    weight: 3,
    price: 15000,
  },
  cucumber: {
    name: "Bodring",
    weight: 2,
    price: 9000,
  },
  meat: {
    name: "Quy goshti",
    weight: 1,
    price: 90000,
  },
  carrot: {
    name: "sabzi",
    weight: 4,
    price: 5000,
  },
  bread: {
    name: "non",
    amount: 4,
    price: 5000,
  },
  cola: {
    name: "Kola",
    amount: 4,
    price: 12000,
  },
};
