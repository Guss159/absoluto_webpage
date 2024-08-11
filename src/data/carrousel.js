let placeHolder = "https://placehold.co/600x400";

export const data = [
  {
    name: "Slide 1",
  },
  {
    name: "Slide 2",
  },
  {
    name: "Slide 3",
  },
  {
    name: "Slide 4",
  },
  {
    name: "Slide 5",
  },
  {
    name: "Slide 6",
  },
];

let counter = 1;
data.forEach((obj) => {
  obj.id = counter++;
  obj.imgDesc = "Picture of " + obj.name;
  obj.img = placeHolder;
});
