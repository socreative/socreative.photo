import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
      user: "hyperscapeuk@gmail.com",
      pass: "ahkkvlqmjlzfjtjs"
  }
})

export const sendEmail = async (data: any) => {
  const message = {
    from: 'contact@socreativeohoto.com',
    to: 'egor.sc@outlook.com',
    subject: `Socreative Photography website contact form`, 
    text: `FROM: \n ${ data.name } - ${ data.email } \n\n MESSAGE: \n ${ data.message }`
  }

  await new Promise((resolve, reject) => { 
    transporter.sendMail(message, (err: any, info: any) => {
      if (err) {
        console.log('Something went wrong. Email wasn\'t sent. Trying again')
        console.log(err)
        reject(err);
      } else {
        console.log(info)
        resolve(info)
      }
    })
  })
}