//service
package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepo;

@Service
public class UserService {
   @Autowired
    private UserRepo Userrepo;

    public  User saveuser(User user)
    {
        return Userrepo.save(user);
    }

    public List<User> getalluser()
    {
        return Userrepo.findAll();
    }


    public Optional<User> findUser(String email,String password)
    {
        return Userrepo.findByEmailAndPassword(email, password);
    }
}