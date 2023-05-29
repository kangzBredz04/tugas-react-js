let dataDiri = {
  nama: "Wahyu",
  nim: "01022111023",
  email: "wabredz1234@gmail.com",
};

let { nama, nim, email } = dataDiri;

console.log("Nama : " + nama + "\nNIM : " + nim + "\nEmail :" + email);

const teman1 = ["Dimas", "Dimun"];
const teman2 = ["Tigana", "Rey"];
const teman3 = ["Nanda", "Nando"];

const freinds = [...teman1, ...teman2, ...teman3];
console.log(freinds);
