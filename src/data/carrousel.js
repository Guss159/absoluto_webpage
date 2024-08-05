let placeHolder = "https://placehold.co/600x400";

export const data = [
  {
    name: "Material 1",
  },
  {
    name: "Material 2",
  },
  {
    name: "Material 3",
  },
  {
    name: "Material 4",
  },
  {
    name: "Material 5",
  },
  {
    name: "Material 6",
  },
];

let counter = 1;
data.forEach((obj) => {
  obj.id = counter++;
  obj.imgDesc = "Picture of " + obj.name;
  obj.img = placeHolder;
});
