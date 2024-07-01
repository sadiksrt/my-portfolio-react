import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Hadi Birlikte Bir Şeyler Yapalım!</h2>
      <p className="section-description">
      Bir geliştirici olarak kodlamaya olan sevgim ve yeni zorluklara olan arzum beni yönlendiriyor.  İşbirliği fırsatlarınız varsa veya muhteşem bir şey inşa etmek istiyorsanız benimle iletişime geçmekten çekinmeyin!
      </p>
      <a href="mailto:sdksrt1837@gmail.com" className="contact-button">Bana Ulaşın!</a>
    </section>
  );
};

export default Contact;
