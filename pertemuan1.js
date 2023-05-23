// Anonymous function
const helloWorld = function () {
  console.log("Hello World !!!");
};

helloWorld();

function fungsi1() {
  console.log("Ini fungsi1");
}

fungsi1(function () {
  console.log("Memanggil fungsi1 dengan argumen berupa Anonymous function");
});

// Arrow function
// const wahyu = (nama) => console.log("Hai " + nama);

// wahyu("Wahyu");

// let numbers = [10, 3, 7, 5];
// numbers.sort((a, b) => b - a);
// console.log(numbers);

// const promise1 = new Promise((berhasil, gagal) => {
//   setTimeout(() => {
//     berhasil("Alhamdulillah");
//   }, 1000);
// });
// promise1.then((pesan) => {
//   console.log(pesan);
// });

const promise2 = new Promise((berhasil, gagal) => {
  setTimeout(() => {
    const sekarang = new Date();
    if (sekarang.getSeconds() % 2 === 0) {
      gagal("Innalillah");
    } else {
      berhasil("Alhamdulillah");
    }
  }, 1000);
});
promise2
  .then((pesan) => {
    console.log(`then() telah dipanggil dengan pesan: ${pesan}`);
  })
  .catch((pesan) => {
    console.log(`catch() telah dipanggil dengan pesan: ${pesan}`);
  });
