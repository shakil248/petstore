package com.sogeti.petstore.model;

import java.util.List;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;

import com.sogeti.petstore.dao.OrderDAOImpl;
import com.sogeti.petstore.spring.AppConfig;

public class Main {

	public static void main(String[] args) {
		
//		JdbcConnectionPool cp = JdbcConnectionPool.create("jdbc:h2:~/test", "sa", "");
////	         for (String sql : args) {
//	             Connection conn;
//				try {
//					conn = cp.getConnection();
//		             conn.createStatement().execute("create table test2(name varchar(100))");
//		             conn.close();
//
//				} catch (SQLException e) {
//					e.printStackTrace();
//				}
////	         }
//	         cp.dispose();
	     
		
		AbstractApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
        
		OrderDAOImpl orderDAOImpl = context.getBean(OrderDAOImpl.class);
		List<Order> orders = orderDAOImpl.getAll(Order.class);
		System.out.println(orders.size());
        context.close();

	}

}
