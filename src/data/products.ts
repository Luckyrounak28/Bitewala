import { ProductType } from '../context/CartContext';

export const products: ProductType[] = [
  {
    id: '1',
    name: 'Kaccha Cooler Powder Pack',
    price: 99,
    image: 'https://images.pexels.com/photos/5946081/pexels-photo-5946081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Our signature refreshing Kaccha Cooler in a convenient powder pack. Just mix with water and enjoy the perfect balance of tangy and sweet flavors. Made with natural ingredients and no preservatives.',
    variant: '100g Powder Pack',
    quantity: 1
  },
  {
    id: '2',
    name: 'Kaccha Cooler Mini Sachets',
    price: 149,
    image: 'https://images.pexels.com/photos/8471703/pexels-photo-8471703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Perfect for on-the-go refreshment. Each box contains 10 sachets of our signature Kaccha Cooler mix. Easy to carry and prepare anywhere. Just tear, pour, and mix with water.',
    variant: 'Box of 10 Sachets',
    quantity: 1
  },
  {
    id: '3',
    name: 'Kaccha Cooler Ready-to-Drink Bottle',
    price: 49,
    image: 'https://images.pexels.com/photos/5947023/pexels-photo-5947023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Enjoy our refreshing Kaccha Cooler instantly with our ready-to-drink bottles. Perfect for picnics, office breaks, or anytime you need a quick refreshment. Made with natural ingredients and no artificial preservatives.',
    variant: '150ml Bottle',
    quantity: 1
  },
  {
    id: '4',
    name: 'Kaccha Cooler Family Pack',
    price: 249,
    image: 'https://images.pexels.com/photos/5946603/pexels-photo-5946603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'The perfect pack for family gatherings and parties. Our large pack contains enough Kaccha Cooler mix to make 2 liters of refreshing beverage. Comes with a measuring scoop for perfect preparation every time.',
    variant: '250g Family Pack',
    quantity: 1
  },
  {
    id: '5',
    name: 'Kaccha Cooler Premium Gift Box',
    price: 599,
    image: 'https://images.pexels.com/photos/6064947/pexels-photo-6064947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'A luxurious gift box featuring our signature Kaccha Cooler in three variants, along with a branded glass and stirrer. Perfect for gifting to friends and family who appreciate natural refreshment.',
    variant: 'Premium Gift Box',
    quantity: 1
  },
  {
    id: '6',
    name: 'Kaccha Cooler Sugar-Free',
    price: 129,
    image: 'https://images.pexels.com/photos/4394612/pexels-photo-4394612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Enjoy the same refreshing taste of our classic Kaccha Cooler but with zero sugar. Sweetened with natural stevia extract, this version is perfect for those monitoring their sugar intake.',
    variant: '100g Sugar-Free Pack',
    quantity: 1
  }
];

export const featuredProducts = products.slice(0, 3);

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};