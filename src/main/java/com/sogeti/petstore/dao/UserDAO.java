package com.sogeti.petstore.dao;

import java.util.List;

import com.sogeti.petstore.model.User;

public interface UserDAO {

	public void saveOrUpdateUser(User user);
	public User getUser(String id);
	public User getUserByUserId(String userId);
	public List<User> getAllUsers();
	
}
