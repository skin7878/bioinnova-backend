module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        service: 'Gmail',
        host:  'smtp.gmail.com',
        ssl: false,
        tls: false,
        port: 465,
        auth: {
          user: 'kalinichenko.andriy.smr@gmail.com',
          pass: env('USER_PASSWORD'),
        },
      },
      settings: {
        defaultFrom: 'kalinichenko.andriy.smr@gmail.com',
        defaultReplyTo: 'kalinichenko.andriy.smr@gmail.com',
      },
    },
  },
});
