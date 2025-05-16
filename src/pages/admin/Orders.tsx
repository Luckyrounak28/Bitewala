import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Eye, Truck, XCircle, Check, PackageCheck } from 'lucide-react';
import { orders, Order } from '../../data/orders';

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  
  const filteredOrders = orders.filter(order => {
    const matchesSearch = 
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });
  
  const handleOrderSelect = (order: Order) => {
    setSelectedOrder(order);
    setShowOrderDetails(true);
  };
  
  const handleStatusChange = (orderId: string, newStatus: Order['status']) => {
    // In a real application, this would make an API call to update the order status
    console.log(`Update order ${orderId} status to ${newStatus}`);
    
    // Close the details modal after status change
    setShowOrderDetails(false);
  };
  
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Order Management</h1>
        <p className="text-neutral-600">View and manage all customer orders.</p>
      </div>
      
      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="relative w-full md:w-72">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-neutral-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search orders..."
              className="input pl-10"
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-neutral-500" />
              <span className="text-sm text-neutral-600">Status:</span>
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="input py-2"
            >
              <option value="all">All</option>
              <option value="pending">Pending</option>
              <option value="packed">Packed</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Orders Table */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white rounded-lg shadow-md overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-neutral-200">
            <thead className="bg-neutral-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Customer
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Payment
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-neutral-200">
              {filteredOrders.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-4 text-center text-neutral-500">
                    No orders found matching your criteria
                  </td>
                </tr>
              ) : (
                filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-neutral-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary-600">
                      {order.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-700">
                      <div>{order.customer.name}</div>
                      <div className="text-neutral-500 text-xs">{order.customer.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-700">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-700">
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
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-700">
                      <div className="flex items-center">
                        <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
                          order.payment.status === 'completed' ? 'bg-success-500' : 
                          order.payment.status === 'pending' ? 'bg-warning-500' : 
                          'bg-error-500'
                        }`}></span>
                        {order.payment.method === 'cod' ? 'Cash on Delivery' : 'Online'}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button 
                        onClick={() => handleOrderSelect(order)}
                        className="text-primary-600 hover:text-primary-900 mr-3"
                      >
                        <Eye className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </motion.div>
      
      {/* Order Details Modal */}
      {showOrderDetails && selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6 border-b">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold mb-1">Order #{selectedOrder.id}</h2>
                  <p className="text-neutral-500">
                    Placed on {new Date(selectedOrder.createdAt).toLocaleDateString()} at {new Date(selectedOrder.createdAt).toLocaleTimeString()}
                  </p>
                </div>
                <button 
                  onClick={() => setShowOrderDetails(false)}
                  className="text-neutral-400 hover:text-neutral-500"
                >
                  <XCircle className="h-6 w-6" />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Customer Information */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Customer Information</h3>
                  <div className="bg-neutral-50 p-4 rounded-md">
                    <p className="font-medium">{selectedOrder.customer.name}</p>
                    <p>{selectedOrder.customer.email}</p>
                    <p>{selectedOrder.customer.phone}</p>
                  </div>
                </div>
                
                {/* Shipping Information */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Shipping Address</h3>
                  <div className="bg-neutral-50 p-4 rounded-md">
                    <p>{selectedOrder.shipping.address}</p>
                    <p>{selectedOrder.shipping.city}, {selectedOrder.shipping.state}</p>
                    <p>{selectedOrder.shipping.zip}</p>
                  </div>
                </div>
              </div>
              
              {/* Order Items */}
              <h3 className="text-lg font-semibold mb-3">Order Items</h3>
              <div className="bg-neutral-50 rounded-md mb-8 overflow-hidden">
                <table className="min-w-full divide-y divide-neutral-200">
                  <thead className="bg-neutral-100">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                        Product
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                        Variant
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                        Quantity
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200">
                    {selectedOrder.products.map((product) => (
                      <tr key={product.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-700">
                          {product.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-700">
                          {product.variant}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-700">
                          ₹{product.price}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-700">
                          {product.quantity}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-700">
                          ₹{product.price * product.quantity}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot className="bg-neutral-100">
                    <tr>
                      <td colSpan={4} className="px-6 py-3 text-right text-sm font-medium text-neutral-700">
                        Total Amount:
                      </td>
                      <td className="px-6 py-3 text-left text-sm font-bold text-neutral-900">
                        ₹{selectedOrder.totalAmount}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              
              {/* Payment Information */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3">Payment Information</h3>
                <div className="bg-neutral-50 p-4 rounded-md">
                  <div className="flex justify-between">
                    <p className="text-neutral-700">Payment Method:</p>
                    <p className="font-medium">
                      {selectedOrder.payment.method === 'cod' ? 'Cash on Delivery' : 'Online Payment'}
                    </p>
                  </div>
                  <div className="flex justify-between mt-2">
                    <p className="text-neutral-700">Payment Status:</p>
                    <p className={`font-medium ${
                      selectedOrder.payment.status === 'completed' ? 'text-success-600' : 
                      selectedOrder.payment.status === 'pending' ? 'text-warning-600' : 
                      'text-error-600'
                    }`}>
                      {selectedOrder.payment.status.charAt(0).toUpperCase() + selectedOrder.payment.status.slice(1)}
                    </p>
                  </div>
                  {selectedOrder.payment.transactionId && (
                    <div className="flex justify-between mt-2">
                      <p className="text-neutral-700">Transaction ID:</p>
                      <p className="font-medium">{selectedOrder.payment.transactionId}</p>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Order Status */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Update Order Status</h3>
                <div className="flex flex-wrap gap-2">
                  <button 
                    onClick={() => handleStatusChange(selectedOrder.id, 'pending')}
                    className={`btn ${
                      selectedOrder.status === 'pending' 
                        ? 'bg-warning-500 text-white' 
                        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                    }`}
                  >
                    Pending
                  </button>
                  <button 
                    onClick={() => handleStatusChange(selectedOrder.id, 'packed')}
                    className={`btn ${
                      selectedOrder.status === 'packed' 
                        ? 'bg-secondary-500 text-white' 
                        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                    }`}
                  >
                    <PackageCheck className="h-4 w-4 mr-2" />
                    Packed
                  </button>
                  <button 
                    onClick={() => handleStatusChange(selectedOrder.id, 'shipped')}
                    className={`btn ${
                      selectedOrder.status === 'shipped' 
                        ? 'bg-primary-600 text-white' 
                        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                    }`}
                  >
                    <Truck className="h-4 w-4 mr-2" />
                    Shipped
                  </button>
                  <button 
                    onClick={() => handleStatusChange(selectedOrder.id, 'delivered')}
                    className={`btn ${
                      selectedOrder.status === 'delivered' 
                        ? 'bg-success-500 text-white' 
                        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                    }`}
                  >
                    <Check className="h-4 w-4 mr-2" />
                    Delivered
                  </button>
                  <button 
                    onClick={() => handleStatusChange(selectedOrder.id, 'cancelled')}
                    className={`btn ${
                      selectedOrder.status === 'cancelled' 
                        ? 'bg-error-500 text-white' 
                        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                    }`}
                  >
                    <XCircle className="h-4 w-4 mr-2" />
                    Cancelled
                  </button>
                </div>
              </div>
            </div>
            
            <div className="p-6 border-t flex justify-end">
              <button 
                onClick={() => setShowOrderDetails(false)}
                className="px-4 py-2 border border-neutral-300 text-neutral-700 rounded-md hover:bg-neutral-50"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Orders;