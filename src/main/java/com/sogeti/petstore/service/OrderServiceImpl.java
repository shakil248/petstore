package com.sogeti.petstore.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sogeti.petstore.dao.OrderDAO;
import com.sogeti.petstore.model.Cart;
import com.sogeti.petstore.model.Order;
import com.sogeti.petstore.model.OrderDetail;
import com.sogeti.petstore.model.Product;

@Service
@Transactional
public class OrderServiceImpl implements OrderService {

	@Autowired
	OrderDAO orderDAO;
	
	@Autowired
	CartService cartService;
	
	@Autowired
	ProductService productService;
	
	@Override
	public void createOrder(Order order) {
		for(OrderDetail orderDetail:order.getOrderDetails()){
			Product product = productService.getProduct(orderDetail.getProductId());
			product.setInStock(product.getInStock()-orderDetail.getQuantity());
			productService.createOrUpdateProduct(product);
		}
		 
		orderDAO.createOrder(order);
		Cart cart = cartService.getCart(order.getUserId());
		cartService.deleteCart(cart);
		
		
	}

	@Override
	public void updateOrder(Order order) {
		orderDAO.updateOrder(order);
	}

	@Override
	public List<Order> getOrder(String userId) {
		return orderDAO.getOrder(userId);
	}

	@Override
	public List<Order> getAllOrders() {
		return orderDAO.getAllOrders();
	}

	@Override
	public List<Order> getOrderHistory(String userId) {
		return orderDAO.getOrderHistory(userId);
	}

	
}
