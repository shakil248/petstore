package com.sogeti.petstore.dao;

import java.util.List;

import com.sogeti.petstore.model.Order;

public interface OrderDAO {
	
	public void createOrder(Order order);
	public void updateOrder(Order order);
	public List<Order> getOrder(String userId);
	public List<Order> getAllOrders();
	public List<Order> getOrderHistory(String userId);

}
