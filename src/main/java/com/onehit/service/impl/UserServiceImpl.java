package com.onehit.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.onehit.domain.User;
import com.onehit.service.UserService;

@Service
public class UserServiceImpl implements UserService{

	@Override
	public List<User> getUsers() {

		List<User> list = new ArrayList<User>();
		
		/**
		 * TODO: hibernate
		 */
		//Hardcoded user starts
	
		User user = new User();
		user.setId(1);
		user.setName("Rui Lu");
		list.add(user);
		
		user = new User();
		user.setId(2);
		user.setName("Jiaming Liu");
		list.add(user);
		
		//HardCoded user end
		return list;
	} 
	
	
}
