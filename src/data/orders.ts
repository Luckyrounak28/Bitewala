export interface Order {
  id: string;
  customer: {
    name: string;
    email: string;
    phone: string;
  };
  products: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    variant: string;
  }[];
  shipping: {
    address: string;
    city: string;
    state: string;
    zip: string;
  };
  payment: {
    method: 'cod' | 'online';
    status: 'pending' | 'completed' | 'failed';
    transactionId?: string;
  };
  status: 'pending' | 'packed' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
  totalAmount: number;
}

export const orders: Order[] = [
  {
    id: 'ORD001',
    customer: {
      name: 'Rahul Sharma',
      email: 'rahul.sharma@example.com',
      phone: '+91 9876543210',
    },
    products: [
      {
        id: '1',
        name: 'Kaccha Cooler Powder Pack',
        price: 99,
        quantity: 2,
        variant: '100g Powder Pack',
      },
      {
        id: '3',
        name: 'Kaccha Cooler Ready-to-Drink Bottle',
        price: 49,
        quantity: 4,
        variant: '150ml Bottle',
      },
    ],
    shipping: {
      address: '123 Main Street, Apartment 4B',
      city: 'Mumbai',
      state: 'Maharashtra',
      zip: '400001',
    },
    payment: {
      method: 'online',
      status: 'completed',
      transactionId: 'TXN123456789',
    },
    status: 'delivered',
    createdAt: '2025-04-15T09:24:00',
    totalAmount: 394,
  },
  {
    id: 'ORD002',
    customer: {
      name: 'Priya Patel',
      email: 'priya.patel@example.com',
      phone: '+91 8765432109',
    },
    products: [
      {
        id: '4',
        name: 'Kaccha Cooler Family Pack',
        price: 249,
        quantity: 1,
        variant: '250g Family Pack',
      },
    ],
    shipping: {
      address: '456 Park Avenue, Villa 7',
      city: 'Bangalore',
      state: 'Karnataka',
      zip: '560001',
    },
    payment: {
      method: 'cod',
      status: 'pending',
    },
    status: 'shipped',
    createdAt: '2025-04-16T14:35:00',
    totalAmount: 249,
  },
  {
    id: 'ORD003',
    customer: {
      name: 'Aditya Singh',
      email: 'aditya.singh@example.com',
      phone: '+91 7654321098',
    },
    products: [
      {
        id: '2',
        name: 'Kaccha Cooler Mini Sachets',
        price: 149,
        quantity: 3,
        variant: 'Box of 10 Sachets',
      },
      {
        id: '5',
        name: 'Kaccha Cooler Premium Gift Box',
        price: 599,
        quantity: 1,
        variant: 'Premium Gift Box',
      },
    ],
    shipping: {
      address: '789 Lake Road, Tower B, Floor 9',
      city: 'Delhi',
      state: 'Delhi',
      zip: '110001',
    },
    payment: {
      method: 'online',
      status: 'completed',
      transactionId: 'TXN987654321',
    },
    status: 'pending',
    createdAt: '2025-04-17T11:12:00',
    totalAmount: 1046,
  },
  {
    id: 'ORD004',
    customer: {
      name: 'Meera Reddy',
      email: 'meera.reddy@example.com',
      phone: '+91 6543210987',
    },
    products: [
      {
        id: '6',
        name: 'Kaccha Cooler Sugar-Free',
        price: 129,
        quantity: 2,
        variant: '100g Sugar-Free Pack',
      },
    ],
    shipping: {
      address: '101 Green Street, Apartment 12C',
      city: 'Chennai',
      state: 'Tamil Nadu',
      zip: '600001',
    },
    payment: {
      method: 'cod',
      status: 'pending',
    },
    status: 'packed',
    createdAt: '2025-04-18T16:48:00',
    totalAmount: 258,
  },
  {
    id: 'ORD005',
    customer: {
      name: 'Vikram Joshi',
      email: 'vikram.joshi@example.com',
      phone: '+91 5432109876',
    },
    products: [
      {
        id: '1',
        name: 'Kaccha Cooler Powder Pack',
        price: 99,
        quantity: 1,
        variant: '100g Powder Pack',
      },
      {
        id: '3',
        name: 'Kaccha Cooler Ready-to-Drink Bottle',
        price: 49,
        quantity: 6,
        variant: '150ml Bottle',
      },
      {
        id: '4',
        name: 'Kaccha Cooler Family Pack',
        price: 249,
        quantity: 1,
        variant: '250g Family Pack',
      },
    ],
    shipping: {
      address: '222 River View, Building D',
      city: 'Hyderabad',
      state: 'Telangana',
      zip: '500001',
    },
    payment: {
      method: 'online',
      status: 'completed',
      transactionId: 'TXN567890123',
    },
    status: 'cancelled',
    createdAt: '2025-04-14T10:30:00',
    totalAmount: 642,
  }
];