const products = [
  { id: 1, title: "Mercedes Benz", category: 1, description: "Auto Aleman", stock: 10, price:100, pictureUrl: "https://www.cnet.com/a/img/resize/86d2c574284b5195c507cc8fbd97199f33761f1e/hub/2022/07/18/2addf4c5-4792-4bec-99a2-7b0d6a622d32/2022-mercedes-benz-s500-111.jpg?auto=webp&width=1200" },
  { id: 2, title: "Fiat", category: 1 , description: "Auto Italiano", stock: 30 ,price:100, pictureUrl: "https://resizer.iproimg.com/unsafe/880x/filters:format(webp)/https://assets.iprofesional.com/assets/jpg/2021/08/522672.jpg" },
  { id: 3, title: "Ford", category: 1 , description: "Auto Norteamericano", stock: 5, price:100, pictureUrl: "https://cdn.nettiauto.com/live/2022/03/21/649394167557e93c-large.jpg" },
  { id: 4, title: "Harley Davidson", category: 2 , description: "Auto Norteamericano", stock: 5, price:100, pictureUrl: "https://i.pinimg.com/originals/28/6f/2a/286f2a01d1c1e24345e603dfcb3d24c8.jpg" }
];

export const getProducts = () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      return resolve(products);
    },2000);

  });

  return promise;
};


export const getProductById  = (id) => {
  const promise = new Promise((resolve) => {
    const result = products.find((product) => product.id === parseInt(id));
    setTimeout(() => {
      return resolve(result);
    },2000);

  });

  return promise;
};

export const getProductsByCategory  = (categoryId) => {
  const promise = new Promise((resolve) => {
    const result = products.filter((product) => product.category === categoryId);
    setTimeout(() => {
      return resolve(result);
    },2000);
  });

  return promise;
};