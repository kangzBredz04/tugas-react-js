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
