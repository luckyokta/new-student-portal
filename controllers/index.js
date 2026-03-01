const express = require('express')
const router = express.Router()
const Student = require('../models')

// GET ALL
router.get('/', (req, res) => {
    Student.find({})
    .then(students => {
        res.status(200).json(students)
    })
    .catch(err => {
        res.status(500).json({error: 'Failed to get students', details: err.message})
    })
})

// GET BY ID
router.get('/:id', (req, res) => {
    Student.findById(req.params.id)
    .then(student => {
        if(!student) {
            return res.status(404).json({error: `Student with id ${re.params.id} not found`})
        }
        res.status(200).json(student)
    })
    .catch(err => {
        res.status(500).json({error: `Failet to get student`, details: err.message})
    })
})

// CREATE
router.post('/', (req, res) => {
    const { name, dateOfBirth, studentNumber, email, department, courses } = req.body
    Student.create({ name, dateOfBirth, studentNumber, email, department, courses })
    .then(student => {
        res.status(201).json(student)
    })
    .catch(err => {
        res.status(400).json({error: 'Failed to create student', details: err.message})
    })
})

// UPDATE
router.put('/:id', (req, res) => {
    const { name, dateOfBirth, studentNumber, email, department, courses } = req.body
    Student.findByIdAndUpdate(req.params.id, { name, dateOfBirth, studentNumber, email, department, courses })
    .then(student => {
        if(!student) {
            return res.status(404).json({error: `Student with id ${req.params.id} not found`})
        }
        res.status(200).json(student)
    })
    .catch(err => {
        res.status(400).json({error: `Failed to update student`, details: err.message})
    })
})

// DELETE
router.delete('/:id', (req, res) => {
    Student.findByIdAndDelete(req.params.id)
    .then(student => {
        if(!student) {
            return res.status(404).json({error: `Student with id ${req.params.id} not found`})
        }
        res.status(200).json({ message: `student with id ${req.params.id} has been deleted`})
    })
    .catch(err => {
        res.status(500).json({error: 'Failed to delete student', details: err.message})
    })
})

module.exports = router