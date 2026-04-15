const express = require('express')
const { UserController, StudentController } = require('../controllers')
const { authentication, authorization } = require('../middlewares/auth')
const router = express.Router()
const { sendEmail } = require('../helpers/mailer')

router.get('/test-email', async(req, res, next) => {
    try {
        await sendEmail({
            to: `${process.env.EMAIL_TO}`,
            subject: 'Test Email for myProject',
            html: '<h3>Hello from myProject Nodemailer</h3>'
        })
        res.json({ message: 'Email sent succesfully' })
    } catch (err) {
        next(err)
    }
})

router.post('/login', UserController.login)

router.post('/register', UserController.register)

router.use(authentication)

router.get('/', StudentController.find)

router.get('/:id', StudentController.findById)

router.post('/', StudentController.create)

router.put('/:id', authorization, StudentController.update)

router.delete('/:id', authorization, StudentController.delete)

module.exports = router