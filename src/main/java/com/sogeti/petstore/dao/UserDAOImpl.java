package com.sogeti.petstore.dao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import com.sogeti.petstore.model.User;

@Repository
public class UserDAOImpl extends BaseDAO implements UserDAO {

	@Override
	public void saveOrUpdateUser(User user) {
		saveOrUpdate(user);
	}

	@Override
	public User getUser(String id) {
		return get(User.class, id);		
	}
	
	@Override
	public User getUserByUserId(String userId){
		Criteria cr = getSession().createCriteria(User.class);
		cr.add(Restrictions.eq("userId", userId));
		if(cr.list().size()>0){
			return (User) cr.list().get(0);
		}
		return null;
		
	}

	@Override
	public List<User> getAllUsers() {
		return getAll(User.class);
	}

}
