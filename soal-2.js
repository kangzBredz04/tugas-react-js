const hewanBuas = ["Harimau", "Singa", "Beruang", "Serigala"];
const hewanJinak = ["Kucing", "Kelinci", "Ayam"];
const groupAnimals = [...hewanBuas, ...hewanJinak];

const animals = () => console.log(groupAnimals);

// animals();

const favoriteFood = () => {
  let ikan, wortel, huut;
  [ikan, wortel, huut] = hewanJinak;
  console.log("Ikan : " + ikan);
  console.log("Wortel : " + wortel);
  console.log("Huut : " + huut);
};

favoriteFood();

const cetak = new Promise((a) => {
  setTimeout(() => {
    a(animals());
  }, 5000);
});
