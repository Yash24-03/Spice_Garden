// import icons
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaDiscord,
} from 'react-icons/fa';
// import images
import AboutImg from '../src/assets/img/about/plate.png';
import ModelWhiteImg from '../src/assets/img/model-white.png';
import ModelBlackImg from '../src/assets/img/model-black.png';
import MenuImg1 from '../src/assets/img/menu/1.png';
import MenuImg2 from '../src/assets/img/menu/2.png';
import MenuImg3 from '../src/assets/img/menu/3.png';
import MenuImg4 from '../src/assets/img/menu/4.png';
import SignatureImg from '../src/assets/img/team/signature.png';
import ChefImg from '../src/assets/img/team/chef.png';
import Avatar1 from '../src/assets/img/testimonial/avatar1.png';
import Avatar2 from '../src/assets/img/testimonial/avatar2.png';
import Avatar3 from '../src/assets/img/testimonial/avatar3.png';

export const navData = [
  { href: '/', name: 'home' },
  { href: '/', name: 'about' },
  { href: '/', name: 'menu' },
  { href: '/', name: 'team' },
  { href: '/', name: 'testimonials' },
  { href: '/', name: 'book a table' },
  { href: '/', name: 'contact' },
];

export const heroData = {
  pretitle: 'Nothing brings people together like',
  title: 'Spice Garden',
  subtitle:
    'Discover a culinary journey that delights your taste buds and creates memorable experiences.',
  btnText: 'Find out more',
};


export const socialData = [
  { href: '/', icon: <FaYoutube /> },
  { href: '/', icon: <FaFacebookF /> },
  { href: '/', icon: <FaInstagram /> },
  { href: '/', icon: <FaPinterestP /> },
  { href: '/', icon: <FaDiscord /> },
];

export const aboutData = {
  pretitle: 'our story',
  title: 'who we are',
  subtitle:
    'At Spice Garden, we are passionate about creating extraordinary dining experiences. Our team of talented chefs and dedicated staff strive to deliver impeccable service and authentic flavors to our valued guests. With a commitment to quality ingredients and culinary expertise, we take pride in offering a memorable journey through the rich and diverse Indian cuisine.',
  btnText: 'find out more',
  image: AboutImg,
};


export const menuData = {
  title: 'delicious flavour of autumn',
  subtitle: 'view all menu for tasty meal today',
  modelImg: ModelWhiteImg,
  btnText: 'view complete menu',
  menuItems: [
    {
      image: MenuImg1,
      name: 'Shahi Tukda',
      price: '₹500',
      description: 'A royal Indian dessert with fried bread, saffron-infused syrup, and rich milk garnished with nuts.',
      },
      {
      image: MenuImg2,
      name: 'Kesari Phirni',
      price: '₹350',
      description: 'A luxurious rice-based dessert flavored with saffron, cardamom, and nuts.',
      },
      {
      image: MenuImg3,
      name: 'Dum Pukht Biryani',
      price: '₹1,500',
      description: 'Fragrant rice layered with marinated meat and aromatic spices, slow-cooked in a sealed pot.',
      },
      {
      image: MenuImg4,
      name: 'Nalli Nihari',
      price: '₹2,800',
      description: 'Slow-cooked lamb shanks in a rich and flavorful gravy with spices.',
      }
  ],
};

export const teamData = {
  pretitle: 'our team',
  title: 'meet our chef',
  sub1: 'With years of culinary expertise and a passion for creating exceptional dining experiences, our talented chef at Spice Garden brings a wealth of knowledge and creativity to the kitchen. They have honed their skills through extensive training and experience in renowned establishments.',
  sub2: 'Driven by a commitment to culinary excellence, our chef continuously pushes the boundaries of flavor and presentation to deliver remarkable dishes. Their dedication to crafting unique and delightful culinary creations is what sets them apart.',
  name: 'Gunnet Singh',
  occupation: 'Executive Chef',
  signatureImg: SignatureImg,
  chefImg: ChefImg,
};


export const testimonialData = {
  title: "what client's say ",
  subtitle: '1500+ statisfied clients',
  modelImg: ModelWhiteImg,
  slider: [
    {
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.',
      image: Avatar1,
      name: 'Rick Thompson',
      occupation: 'CEO of Delightful',
    },
    {
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.',
      image: Avatar2,
      name: 'John Doe',
      occupation: 'CEO of Delightful',
    },
    {
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.',
      image: Avatar3,
      name: 'Henry A.',
      occupation: 'CEO of Delightful',
    },
  ],
};

export const reservationData = {
  title: 'booking form',
  subtitle:
    'Call (800) 123-4567 from 5AM - 11PM daily, or book online with OpenTable.Reservations required for parties of 6 or more.',
  modelImg: ModelBlackImg,
  btnText: 'make a reservation',
};

export const newsletterData = {
  title: 'join our newsletter',
  subtitle: 'Get latest news & updates in your inbox.',
  placeholder: 'Subscribe our delicious dishes',
  btnText: 'subscribe now',
};

export const footerData = {
  contact: {
    title: 'contact location',
    address: '1234 Spice Garden Street, Mumbai, Maharashtra, India',
    phone: '+91 1234567890',
  },
  hours: {
    title: 'working hours',
    program: [
      {
        days: 'monday - friday',
        hours: '09:00 AM - 10:00 PM',
      },
      {
        days: 'saturday - sunday',
        hours: '09:00 AM - 11:00 PM',
      },
    ],
  },
  social: {
    title: 'social network',
    icons: [
      { href: '/', icon: <FaYoutube /> },
      { href: '/', icon: <FaFacebookF /> },
      { href: '/', icon: <FaInstagram /> },
      { href: '/', icon: <FaPinterestP /> },
      { href: '/', icon: <FaDiscord /> },
    ],
  },
};
