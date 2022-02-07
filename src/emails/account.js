const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'amitava.mukherji@greentreelearning.com',
        subject: 'Welcome to the leading Task App!',
        text: `Welcome to the Task App, ${name}. Keep us posted on your experiences with it.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'amitava.mukherji@greentreelearning.com',
        subject: 'Your subscription has been cancelled',
        text: `Goodbye, ${name}. Please do suggest what we could have done to retain you. We are upgrading our services. Looking forward to your return in the future.`
    })
}
module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}
