package com.onehit.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.onehit.domain.User;
import com.onehit.service.UserService;

@RestController
public class OnehitController {
	
	@Autowired
	UserService userService;
	
	@RequestMapping(value = "/users", method = RequestMethod.GET)
	public List<User> getUsers(){
		return userService.getUsers();	
	}
}
