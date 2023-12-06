// Signup Artist Images
import firstImage from "../../public/first-signup-image.png";
import secondImage from "../../public/second-signup-image.png";
import thirdImage from "../../public/third-signup-image.png";
import fourthImage from "../../public/fourth-signup-image.png";
import fifthImage from "../../public/fifth-signup-image.png";
import sixthImage from "../../public/sixth-signup-image.png";

// Signup Genre Images
import firstGenre from "../../public/first-genre.png";
import secondGenre from "../../public/second-genre.png";
import thirdGenre from "../../public/third-genre.png";
import fourthGenre from "../../public/fourth-genre.png";
import fifthGenre from "../../public/fifth-genre.png";
import sixthGenre from "../../public/sixth-genre.png";

export const authPage = [
  { id: "1", title: "Registering as", completed: false },
  { id: "2", title: "Profile information", completed: false },
  { id: "3", title: "Customization", completed: false, hide: true },
];

export const Artists = [
  { id: "1", name: "Yayoi Kusama", image: firstImage },
  { id: "2", name: "Gerhard Richter", image: secondImage },
  { id: "3", name: "Jeff Koonst", image: thirdImage },
  { id: "4", name: "Frank Stella", image: fourthImage },
  { id: "5", name: "Kara Walker", image: fifthImage },
  { id: "6", name: "Kehinde Wiley", image: sixthImage },
];

export const Genre = [
  { id: "1", name: "Painting", image: firstGenre },
  { id: "2", name: "Sculpture", image: secondGenre },
  { id: "3", name: "Abstract", image: thirdGenre },
  { id: "4", name: "Photography", image: fourthGenre },
  { id: "5", name: "Impressionism", image: fifthGenre },
  { id: "6", name: "Surrealism", image: sixthGenre },
];
