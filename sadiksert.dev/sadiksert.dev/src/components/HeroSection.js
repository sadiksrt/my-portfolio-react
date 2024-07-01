import React from 'react';
import './HeroSection.css';
import developerImage from '../assets/developer.png';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="content">
        <p className="intro">Merhaba, Benim Adım</p>
        <h1 className="name">Sadık</h1>
        <h2 className="title">Genç Bir Full Stack Geliştiricisiyim </h2>
        <p className="description">
        Merhaba! Ben Sadık, bir yazılım geliştiricisiyim. Ön yüz, arka yüz ve mobil uygulama geliştirme konularında uzmanım. Kullanıcı dostu ve etkileyici web uygulamaları oluşturmayı seviyorum. Kod yazmanın yanı sıra, yeni teknolojileri öğrenmek ve projeler üzerinde çalışmak benim için büyük bir tutku. Şu anda freelance projeler alıyorum ve iletişime geçmekten çekinmeyin!
        </p>
        <a href="mailto:sdksrt1837@gmail.com" className="contact-button">Bana Ulaşın!</a>
      </div>
      <div className="image-container">
        <img src={developerImage} alt="Developer" className="developer-image" />
      </div>
      <div className="scroll-indicator">
        <p>Kaydır</p>
        <i className="arrow down"></i>
      </div>
    </section>
  );
};

export default HeroSection;
