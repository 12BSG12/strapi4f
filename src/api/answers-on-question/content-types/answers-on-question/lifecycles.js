module.exports = {
  async afterCreate(event) {    // Connected to "Save" button in admin panel
      const { result } = event;

      try{
          await strapi.plugins['email'].services.email.send({
            to: 'b5g12@yandex.ru',
            from: 'carlj8335@gmail.com', // e.g. single sender verification in SendGrid
            cc: 'valid email address',
            bcc: 'valid email address',
            replyTo: 'valid email address',
            subject: 'The Strapi Email plugin worked successfully',
            text: '${fieldName}', // Replace with a valid field ID
            html: 'Hello world!', 
              
          })
      } catch(err) {
          console.log(err);
      }
  }
}