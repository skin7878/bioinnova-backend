module.exports = {
  async send(ctx) {
    try {
      const { name, email, message } = ctx.request.body;

      await strapi.plugins['email'].services.email.send({
        to: email,
        subject: 'Your Subject',
        text: `Hello ${name},\n\n${message}`,
      });

      ctx.send({
        message: 'Email sent successfully',
      });
    } catch (error) {
      ctx.status = 500;
      ctx.send({
        error: 'Email sending failed',
      });
    }
  },
};
