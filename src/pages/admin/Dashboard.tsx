import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingBag, 
  TrendingUp, 
  Users, 
  Calendar,
  DollarSign,
  Package,
  Clock
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';
import { orders } from '../../data/orders';

const Dashboard = () => {
  const [timeFrame, setTimeFrame] = useState<'daily' | 'weekly' | 'monthly'>('weekly');
  
  // Mock data for dashboard
  const salesData = [
    { name: 'Week 1', sales: 24000 },
    { name: 'Week 2', sales: 18000 },
    { name: 'Week 3', sales: 32000 },
    { name: 'Week 4', sales: 27000 },
  ];
  
  const revenueData = [
    { name: 'Jan', revenue: 45000 },
    { name: 'Feb', revenue: 52000 },
    { name: 'Mar', revenue: 48000 },
    { name: 'Apr', revenue: 61000 },
    { name: 'May', revenue: 55000 },
    { name: 'Jun', revenue: 67000 },
  ];
  
  const productPerformanceData = [
    { name: 'Powder Pack', value: 35 },
    { name: 'Ready-to-Drink', value: 25 },
    { name: 'Mini Sachets', value: 20 },
    { name: 'Family Pack', value: 15 },
    { name: 'Gift Box', value: 5 },
  ];
  
  const COLORS = ['#E85D04', '#F59E0B', '#FFBA08', '#FAA307', '#F48C06'];
  
  // Dashboard stats
  const stats = [
    {
      title: 'Total Revenue',
      value: '₹2,58,000',
      change: '+12%',
      trend: 'up',
      icon: <DollarSign className="h-5 w-5 text-white" />
    },
    {
      title: 'Total Orders',
      value: '384',
      change: '+8%',
      trend: 'up',
      icon: <ShoppingBag className="h-5 w-5 text-white" />
    },
    {
      title: 'Total Customers',
      value: '246',
      change: '+15%',
      trend: 'up',
      icon: <Users className="h-5 w-5 text-white" />
    },
    {
      title: 'Products Sold',
      value: '1,024',
      change: '+6%',
      trend: 'up',
      icon: <Package className="h-5 w-5 text-white" />
    }
  ];
  
  // Recent orders for the dashboard
  const recentOrders = orders.slice(0, 5);

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Dashboard</h1>
        <p className="text-neutral-600">Welcome to your Bitewala admin dashboard.</p>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-neutral-500 text-sm mb-1">{stat.title}</p>
                <h3 className="text-2xl font-bold mb-2">{stat.value}</h3>
                <p className={`text-sm flex items-center ${
                  stat.trend === 'up' ? 'text-success-500' : 'text-error-500'
                }`}>
                  <TrendingUp className={`h-3 w-3 mr-1 ${
                    stat.trend === 'up' ? '' : 'transform rotate-180'
                  }`} />
                  {stat.change} from last month
                </p>
              </div>
              <div className={`p-3 rounded-full bg-primary-600`}>
                {stat.icon}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Sales Chart */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Sales Overview</h2>
            <div className="flex space-x-2">
              <button 
                onClick={() => setTimeFrame('daily')}
                className={`px-3 py-1 text-xs rounded-md ${
                  timeFrame === 'daily' 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                Daily
              </button>
              <button 
                onClick={() => setTimeFrame('weekly')}
                className={`px-3 py-1 text-xs rounded-md ${
                  timeFrame === 'weekly' 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                Weekly
              </button>
              <button 
                onClick={() => setTimeFrame('monthly')}
                className={`px-3 py-1 text-xs rounded-md ${
                  timeFrame === 'monthly' 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                Monthly
              </button>
            </div>
          </div>
          
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={salesData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#E85D04" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
        
        {/* Revenue Chart */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <h2 className="text-lg font-semibold mb-6">Revenue Trends</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={revenueData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#FFBA08" 
                  strokeWidth={3}
                  dot={{ fill: '#FFBA08', r: 6 }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Product Performance */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <h2 className="text-lg font-semibold mb-6">Product Performance</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={productPerformanceData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {productPerformanceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
        
        {/* Recent Orders */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="bg-white rounded-lg shadow-md p-6 lg:col-span-2"
        >
          <h2 className="text-lg font-semibold mb-6">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-200">
                {recentOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-neutral-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary-600">
                      {order.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-700">
                      {order.customer.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-700">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-700">
                      ₹{order.totalAmount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        order.status === 'delivered' ? 'bg-success-100 text-success-800' :
                        order.status === 'shipped' ? 'bg-primary-100 text-primary-800' :
                        order.status === 'packed' ? 'bg-secondary-100 text-secondary-800' :
                        order.status === 'pending' ? 'bg-warning-100 text-warning-800' :
                        'bg-error-100 text-error-800'
                      }`}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;