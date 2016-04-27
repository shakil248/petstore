package com.sogeti.petstore.dao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import com.sogeti.petstore.model.Cart;
import com.sogeti.petstore.model.CartDetail;

@Repository
public class CartDAOImpl extends BaseDAO implements CartDAO {

	

	@Override
	public Cart getCart(String userId) {
		Criteria cr = getSession().createCriteria(Cart.class);
		cr.add(Restrictions.eq("userId", userId));
		if(cr.list().size()>0){
			return (Cart) cr.list().get(0);
		}
		return null;
	}

	@Override
	public void saveCart(Cart cart) {
		persist(cart);
		
	}

	@Override
	public void updateCart(Cart cart) {
		saveOrUpdate(cart);
		
	}

	@Override
	public void removeCartItem(CartDetail cartDetail) {
		delete(cartDetail);
		
	}

	@Override
	public void deleteCart(Cart cart) {
		delete(cart);
		
	}

	@Override
	public Integer getCartCount(String userId) {
		Criteria cr = getSession().createCriteria(Cart.class);
		cr.add(Restrictions.eq("userId", userId));
		if(cr.list().size()>0){
			Cart cart = (Cart) cr.list().get(0); 
			int count = 0;
			for(CartDetail cartDetail : cart.getCartDetails()){
				count = count + cartDetail.getQuantity();
			}
			return count;
		}
		return 0;
	}

	

}
