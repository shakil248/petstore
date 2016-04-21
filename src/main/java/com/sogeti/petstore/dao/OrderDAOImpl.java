package com.sogeti.petstore.dao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import com.sogeti.petstore.OrderStatus;
import com.sogeti.petstore.model.Order;
import com.sogeti.petstore.model.OrderDetail;

@Repository
public class OrderDAOImpl extends BaseDAO implements OrderDAO {

	@Override
	public void createOrder(Order order) {
		persist(order);
	}

	@Override
	public void updateOrder(Order order) {
		update(order);
	}

	@Override
	public List<Order> getOrder(String userId) {
		Criteria cr = getSession().createCriteria(Order.class);
		cr.add(Restrictions.eq("userId", userId));
		cr.add(Restrictions.eq("status", OrderStatus.INPROGRES.getStatusCode()));
		if(cr.list().size()>0){
			return cr.list();
		}
		return null;
	}

	
	@Override
	public List<Order> getAllOrders() {
		return getAll(Order.class);
	}

	@Override
	public List<Order> getOrderHistory(String userId) {
		Criteria cr = getSession().createCriteria(Order.class);
		cr.add(Restrictions.eq("userId", userId));
		cr.add(Restrictions.eq("status", OrderStatus.COMPLETED.getStatusCode()));
		if(cr.list().size()>0){
			return cr.list();
		}
		return null;
	}
	
}
