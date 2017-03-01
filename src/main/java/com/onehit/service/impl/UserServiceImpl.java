package com.onehit.service.impl;

import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onehit.domain.User;
import com.onehit.service.UserService;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	private SessionFactory sessionFactory;
	
	@Transactional
	@SuppressWarnings("unchecked")
	@Override
	public List<User> getUsers() {
		Session session = sessionFactory.getCurrentSession();
		Criteria critera = session.createCriteria(User.class);
		List<User> users = critera.list();
		return users;
	}
	
	
}
