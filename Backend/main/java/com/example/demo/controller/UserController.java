//controller
package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.service.UserService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@CrossOrigin
@RestController
public class UserController {
    @Autowired
    public UserService Userservice;

    @PostMapping("/users")
    public User registerUser(@RequestBody User user) {
        return Userservice.saveuser(user);
    }
    
    @GetMapping("/userstttt")
     public List<User> getAlluser()
     {
        return Userservice.getalluser();
     }
     @GetMapping("/user/login/{email}/{password}")
     public Optional<User> getCredential(@PathVariable String email,@PathVariable String password)
     {
        return Userservice.findUser(email, password);
     }
     
  
}