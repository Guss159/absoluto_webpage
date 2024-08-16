let placeHolder = "https://placehold.co/400x400";

export const dataHighlights = [
  {
    name: "Highlight 1",
  },
  {
    name: "Highlight 2",
  },
  {
    name: "Highlight 3",
  },
  {
    name: "Highlight 4",
  },
];

let counter = 1;
dataHighlights.forEach((obj) => {
  obj.id = counter++;
  obj.image = placeHolder;
  obj.imageDesc = "Picture of " + obj.name;
  obj.text =
    "Pellentesque facilisis ex eget massa pretium finibus. Aliquam eu ultrices nulla, vel sodales arcu. Fusce maximus orci rhoncus tempus accumsan. Morbi vehicula accumsan nisi, vel suscipit magna vulputate sit amet. Curabitur vel sem vulputate, aliquet erat id, cursus urna. Donec sodales, elit in vulputate pharetra, dolor sapien sodales nibh, nec interdum risus sapien ut diam.";
});
