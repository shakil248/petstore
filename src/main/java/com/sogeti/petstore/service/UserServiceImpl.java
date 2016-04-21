package com.sogeti.petstore.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sogeti.petstore.dao.UserDAO;
import com.sogeti.petstore.model.User;

@Service
@Transactional
public class UserServiceImpl implements UserService{
	
	
	
	@Autowired
	UserDAO userDAO;

	@Override
	public void saveOrUpdateUser(User user) {
		userDAO.saveOrUpdateUser(user);
	}

	@Override
	public User getUser(String id) {
		return userDAO.getUser(id);		
	}


	@Override
	public boolean doLogin(String userId, String password) {
			User user = userDAO.getUserByUserId(userId);
			if (null!=user &&  null!=password ){
				if(password.equals(user.getPassword())){
						return true;
				}
			}
		return false;
	}


	@Override
	public User getUserByUserId(String userId) {
		return userDAO.getUserByUserId(userId);
	}

	@Override
	public List<User> getAllUsers() {
		return userDAO.getAllUsers();
	}
	
	
}