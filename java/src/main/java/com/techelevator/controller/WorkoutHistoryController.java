package com.techelevator.controller;

import com.techelevator.dao.WorkoutHistoryDao;
import com.techelevator.model.WorkoutHistory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:8080")
@RequestMapping("/workout/history")
public class WorkoutHistoryController {

    @Autowired
    private WorkoutHistoryDao workoutHistoryDao;

    @PostMapping("/add")
    public void addWorkoutHistory(@RequestBody WorkoutHistory workoutHistory) {
        workoutHistoryDao.addWorkoutHistory(workoutHistory);
    }

    @GetMapping("/user/{userId}")
    public List<WorkoutHistory> getWorkoutHistoryByUserId(@PathVariable int userId) {
        return workoutHistoryDao.getWorkoutHistoryByUserId(userId);
    }

    @GetMapping("/{workoutHistoryId}")
    public WorkoutHistory getWorkoutHistoryById(@PathVariable int workoutHistoryId) {
        return workoutHistoryDao.getWorkoutHistoryById(workoutHistoryId);
    }
}

