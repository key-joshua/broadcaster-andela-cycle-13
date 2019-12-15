import nodemailer from 'nodemailer';
import africastalking from 'africastalking';


class Emailhelp {
  async emailing(names, toEmail, recTitle, recStatus) {
    const transporter = nodemailer.createTransport(
      {
        service: 'gmail',
        auth: {
          user: 'broadcastandelacycle13@gmail.com',
          pass: 'mvgiewjdlfdwtojb',
        },
        logger: false,
        debug: false,
      },
      {
        from: 'Broadcast Application <broadcastandelacycle13@gmail.com>',
      },
    );

    const messageObj = {
      to: `${names} <${toEmail}>`,
      subject: 'Record Status Changed',
      text: `Hello ${names}`,
      html: `<p><h3>Hello ${names}</h3> Your record "${recTitle}"  has changed status to "${recStatus}" now</p>`,
    };

    await transporter.sendMail(messageObj);
  }

  sms(toNum, names, recTitle, recStatus) {
    const tomessage = `Hello ${names} Your record "${recTitle}"  has changed status to "${recStatus}" now `;
    const AfricasTalking = new africastalking({
      apiKey: 'd5db7093d51d9b97b4688d57100dcfd27db4de3176b85a73670686c730b0382f',
      username: 'broadcaster',
    },
    { debug: true });
    const sms = AfricasTalking.SMS;
    sms.send({ to: `+25${toNum}`, message: tomessage })
      .then()
      .catch();
  }
}

const expEmail = new Emailhelp();
export default expEmail;
