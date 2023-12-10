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

// Trending Artwork Images
import firstArt from "../../public/landing-page-item1.png"
import secondArt from "../../public/landing-page-item2.png"
import thirdArt from "../../public/landing-page-item3.png"
import fourthArt from "../../public/landing-page-item4.png"
import fifthArt from "../../public/landing-page-item5.png"

// Our Paint
import firstPaint from "../../public/abstraction.png";
import secondPaint from "../../public/landscape.png";
import thirdPaint from "../../public/streetart.png";
import fourthPaint from "../../public/portrait.png";
import fifthPaint from "../../public/popculture.png";
import sixthPaint from "../../public/horror.png";

// Popular Piece
import firstPiece from "../../public/landing-page-popular-piece1.png";
import secondPiece from "../../public/landing-page-popular-piece2.png";
import thirdPiece from "../../public/landing-page-popular-piece3.png";
import fourthPiece from "../../public/landing-page-popular-piece4.png";
import fifthPiece from "../../public/landing-page-popular-piece5.png";



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


export const NavBar = [
  {id:"1", link:"Artplace", to:"/artplace"},
  {id:"2", link:"Inspire me", to:"/inspiration"},
  // {id:"3", link:"Trade", to:"/trade"},
]

export const ArtWorks = [

  {id:"1", source:firstArt, name:"Wolf", description:"Painted Art on Canvas", dimension:"220 x 280mm", price:"# 12,000"},
  {id:"2", source:secondArt, name:"Wolf", description:"Painted Art on Canvas", dimension:"220 x 280mm", price:"# 12,000"},
  {id:"3", source:thirdArt, name:"Wolf", description:"Painted Art on Canvas", dimension:"220 x 280mm", price:"# 12,000"},
  {id:"4", source:fourthArt, name:"Wolf", description:"Painted Art on Canvas", dimension:"220 x 280mm", price:"# 12,000"},
]

export const Painting = [

  {id:"1", source:firstPaint, name:"Abstraction"},
  {id:"2", source:secondPaint, name:"Landscape"},
  {id:"3", source:thirdPaint, name:"Street Art"},
  {id:"4", source:fourthPaint, name:"Portrait"},
  {id:"5", source:fifthPaint, name:"Pop Culture"},
  {id:"6", source:sixthPaint, name:"Horror"},

]

export const PopularPiece = [

  {id:"1", source:firstPiece, name:"Photography Art", works:"48 Artworks"},
  {id:"2", source:secondPiece, name:"Inspired By Picasso", works:"42 Artworks"},
  {id:"3", source:thirdPiece, name:"Pop Art", works:"24 Artworks"},
  {id:"4", source:fourthPiece, name:"Love is in the air", works:"33 Artworks"},
  {id:"5", source:fifthPiece, name:"Surrealism Artwork", works:"48 Artworks"},
  

]

export const PricesRange = [
  {id:"1",  name:"up to", price:"#5, 000"},
  {id:"2",  name:"from #1, 000 to", price:"#10, 000"},
  {id:"3", name:"from #5, 000 up to", price:"#20, 000"},
  {id:"4", name:"from", price:"#20, 000+"},

]

export const FAQ = [
  {
    id: "1",
    question: "How do I sell on FarmKart?",
    answer:
      "You sell by signing in to FarmKart, click on the “sell” button on the homepage. Input all necessary details of your product. Ensure all information are correct then click on “Submit Product” button. Once done, our team will review your advert and you’ll get an email notification once it goes live.",
  },
  {
    id: "2",
    question: "What does Ads limit means?",
    answer:
      "You sell by signing in to FarmKart, click on the “sell” button on the homepage. Input all necessary details of your product. Ensure all information are correct then click on “Submit Product” button. Once done, our team will review your advert and you’ll get an email notification once it goes live.",
  },
  {
    id: "3",
    question: "How much do I pay before selling?",
    answer:
      "You sell by signing in to FarmKart, click on the “sell” button on the homepage. Input all necessary details of your product. Ensure all information are correct then click on “Submit Product” button. Once done, our team will review your advert and you’ll get an email notification once it goes live.",
  },
  {
    id: "4",
    question: "How fast is the delivery?",
    answer:
      "You sell by signing in to FarmKart, click on the “sell” button on the homepage. Input all necessary details of your product. Ensure all information are correct then click on “Submit Product” button. Once done, our team will review your advert and you’ll get an email notification once it goes live.",
  },
  {
    id: "5",
    question: "How do I contact support team?",
    answer:
      "You sell by signing in to FarmKart, click on the “sell” button on the homepage. Input all necessary details of your product. Ensure all information are correct then click on “Submit Product” button. Once done, our team will review your advert and you’ll get an email notification once it goes live.",
  },
 
];

export const footer = [
  {id: "1", heading:"About ArtDeco Exchange", child:["About Us", "Our Artists"]},
  {id: "2", heading:"Customer Service", child:["Contact Us", "Customers Testimonial", "My Account", "FAQ"]},
  {id: "3", heading:"Art Services", child:["Free Art Advisory", "Commission An Artist", "Trade"]},
  {id: "4", heading:"For Creator", child:["Log In As a Creator", "Join nexus as an artist", "Join nexus as a buyer"]},
]
