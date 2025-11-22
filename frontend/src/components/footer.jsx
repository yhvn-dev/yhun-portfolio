import React from 'react';
import { Mail, Phone, Github, Instagram, Facebook, MessageCircle } from 'lucide-react';
import Logo from  "../assets/Images/jhvn_1_LOGO.png"
import { shadow } from 'three/tsl';

function Footer() {
  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/yhvn-dev', label: 'yhvn-dev' },
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/__jhvn/', label: '@yourusername' },
    { name: 'Facebook', icon: Facebook, url: '#', label: 'https://www.facebook.com/jhunguide.flores.2025' }
  ];
  const contactInfo = [
    { icon: Mail, label: 'jhunguidef@gmail.com', url: 'jhunguidef@gmail.com' },
    { icon: Phone, label: '+639684368475', url: 'tel:+639684368475' },
  ];


  
  return (
    <footer 
      className="row-start-8 row-end-8">
      
      <main className="max-w-7xl mx-auto px-8 py-12 rounded-2xl m-12 "
       style={{
          boxShadow: "inset 0px 10px 10px -5px rgba(255,255,255,0.2),0px 14px 5px 1px rgba(0,0,0,0.2)"
       }}>

        {/* Main Footer Content */}
        <div className='center-l col-start-4 col-end-4 my-4'>
            <img className='h-5 w-5'  src={Logo} alt=""/>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-base font-semibold mb-3 text-[var(--main-white)]">
              About
            </h3>
            <p className="text-sm leading-relaxed text-[var(--main-white)]" >
              Fullstack Web Developer - Freelancer
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-base font-semibold mb-3 text-[var(--main-white)]  " >
              Contact
            </h3>
            <div className="space-y-2">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.url}
                  className="flex items-center gap-2 text-sm transition-colors duration-200 hover:opacity-80 text-[var(--main-white)]"
              
                >
                  <contact.icon size={16} />
                  <span>{contact.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-3 text-[var(--main-white)]" >
              Navigate
            </h3>
            <ul className="space-y-2">
              {['Home', 'Projects', 'About', 'Contact'].map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm transition-colors duration-200 hover:opacity-80 text-[var(--main-white)]"
                    
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      

        {/* Divider */}
        <div 
          className="h-px mb-6"
          style={{ 
            background: 'linear-gradient(90deg, transparent, hsl(204, 16%, 45%) 50%, transparent)'
          }}
        />



        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-200 hover:scale-110 text-[var(--main-white)]"
            
                aria-label={social.name}
                title={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-sm z-50" style={{ color: 'hsl(240, 2%, 53%)' }}>
            © {new Date().getFullYear()} jhvn. All rights reserved.
          </div>
          
        </div>      
      </main>

    </footer>
  );
}

export default Footer;