package com.sogeti.petstore.service;

import java.util.List;

import com.sogeti.petstore.model.User;

public interface UserService {
	
	public void saveOrUpdateUser(User user);
	public User getUser(String id);
	public boolean doLogin(String userId, String password);
	public User getUserByUserId(String userId);
	public List<User> getAllUsers();

}
