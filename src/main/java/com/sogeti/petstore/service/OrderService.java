package com.sogeti.petstore.service;

import java.util.List;

import com.sogeti.petstore.model.Order;
import com.sogeti.petstore.model.OrderDetail;

public interface OrderService {

	public void createOrder(Order order);
	public void updateOrder(Order order);
	public List<Order> getOrder(String userId);
	public List<Order> getAllOrders();
	public List<Order> getOrderHistory(String userId);
}
