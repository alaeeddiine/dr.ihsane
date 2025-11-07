import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null); // ✅ Ajout d'un state pour gérer l'ouverture FAQ
  const sectionRefs = useRef({});

  const scrollToSection = (id) => {
    setActiveSection(id);
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "about", "services", "FAQ", "testimonials", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  
  return (
    <div className="App">
      {/* HEADER */}
      <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <h1 className="logo">Dr. Ihsane Mamou</h1>
          
          {/* Mobile Menu Button */}
          <button 
            className={`mobile-menu-btn ${isMenuOpen ? "active" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
            <ul>
              {["home", "about", "services","FAQ" ,"testimonials", "contact"].map((section) => (
                <li 
                  key={section}
                  className={activeSection === section ? "active" : ""}
                  onClick={() => scrollToSection(section)}
                >
                  {section === "home" ? "Accueil" : 
                   section === "about" ? "À propos" :
                   section === "services" ? "Services" :
                   section === "FAQ" ? "FAQ" :
                   section === "testimonials" ? "Témoignages" : "Contact"}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="home" className="hero">
        <div className="hero-background">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
          </div>
        </div>
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-badge">
                <span>Psychologue & Psychothérapeute</span>
              </div>
              <h2 className="hero-title">
                <span className="title-line">Bienvenue au cabinet</span>
                <span className="title-line highlight">Dr. Ihsane Mamou</span>
              </h2>
              <p className="hero-description">
                Psychologue clinicienne à Meknès, accompagne enfants, adolescents et adultes avec empathie et expertise. 
                Spécialisée en thérapie cognitive et comportementale, elle aide ses patients à surmonter anxiété, dépression, 
                troubles d’apprentissage et dépendances, en mettant l’accent sur l’écoute et le bien-être.
              </p>
              <div className="hero-actions">
                <button 
                  className="cta-button primary"
                  onClick={() => scrollToSection("contact")}
                >
                  <span>Prendre rendez-vous</span>
                  <div className="button-background"></div>
                </button>
                <button 
                  className="cta-button secondary"
                  onClick={() => scrollToSection("services")}
                >
                  <span>Découvrir les services</span>
                </button>
              </div>
            </div>
            <div className="hero-visual">
              <div className="doctor-avatar">
                <div className="avatar-circle">
                  <div className="avatar-image"></div>
                </div>
                <div className="avatar-decoration">
                  <div className="decoration-item"></div>
                  <div className="decoration-item"></div>
                  <div className="decoration-item"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="scroll-indicator">
            <div className="scroll-line"></div>
            <span>Scroll pour découvrir</span>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">À propos de la docteure</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">Expertise et bienveillance au service de votre santé mentale</p>
          </div>
          <div className="about-content">
            <div className="about-text">
              <div className="about-intro">
                <p>
                  La <strong>Dr. Ihsane Mamou</strong> accompagne ses patients avec écoute et bienveillance.
                  Forte de plusieurs années d'expérience en Psychologie et psychothérapie,
                  elle s'engage à offrir un suivi humain et adapté à chaque individu.
                </p>
                <p>
                  Sa mission : aider chaque patient à retrouver sérénité, confiance
                  et équilibre intérieur grâce à une approche personnalisée et respectueuse.
                </p>
              </div>
              <div className="about-features">
                <div className="feature-card">
                  <div className="feature-icon">🎓</div>
                  <div className="feature-content">
                    <h4>Diplômée et certifiée</h4>
                    <p>Formation médicale complète et certifications spécialisées</p>
                  </div>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">💫</div>
                  <div className="feature-content">
                    <h4>Approche bienveillante</h4>
                    <p>Écoute active et accompagnement personnalisé</p>
                  </div>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">⚖️</div>
                  <div className="feature-content">
                    <h4>Équilibre émotionnel</h4>
                    <p>Vers un mieux-être durable et épanouissant</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-visual">
              <div className="photo-frame">
                <div className="photo-content">
                  <div className="experience-badge">
                    <span className="years">9+</span>
                    <span className="text">Ans d'expérience</span>
                  </div>
                </div>
                <div className="frame-decoration"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Services proposés</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">Des solutions adaptées à vos besoins en santé mentale</p>
          </div>
          <div className="service-cards">
            <div className="service-card">
              <div className="card-inner">
                <div className="card-front">
                  <div className="card-icon">🧠</div>
                  <h3>Consultation psychiatrique</h3>
                  <p>Évaluation et traitement des troubles anxieux, dépressifs et émotionnels avec une approche médicale spécialisée.</p>
                  <div className="card-cta">En savoir plus</div>
                </div>
                <div className="card-back">
                  <h4>Ce qui est inclus :</h4>
                  <ul>
                    <li>Évaluation complète</li>
                    <li>Plan de traitement personnalisé</li>
                    <li>Suivi médical régulier</li>
                    <li>Prescription si nécessaire</li>
                  </ul>
                </div>
              </div>
              <div className="card-background"></div>
            </div>
            
            <div className="service-card">
              <div className="card-inner">
                <div className="card-front">
                  <div className="card-icon">💭</div>
                  <h3>Psychothérapie</h3>
                  <p>Thérapie individuelle et accompagnement personnalisé pour améliorer la qualité de vie et le bien-être.</p>
                  <div className="card-cta">En savoir plus</div>
                </div>
                <div className="card-back">
                  <h4>Approches utilisées :</h4>
                  <ul>
                    <li>Thérapie cognitive-comportementale</li>
                    <li>Thérapie d'acceptation et d'engagement</li>
                    <li>Thérapie centrée sur les solutions</li>
                    <li>Techniques de pleine conscience</li>
                  </ul>
                </div>
              </div>
              <div className="card-background"></div>
            </div>
            
            <div className="service-card">
              <div className="card-inner">
                <div className="card-front">
                  <div className="card-icon">💻</div>
                  <h3>Suivi en ligne</h3>
                  <p>Consultations à distance pour un accompagnement flexible, confidentiel et accessible où que vous soyez.</p>
                  <div className="card-cta">En savoir plus</div>
                </div>
                <div className="card-back">
                  <h4>Avantages :</h4>
                  <ul>
                    <li>Flexibilité horaire</li>
                    <li>Confidentialité garantie</li>
                    <li>Économie de temps</li>
                    <li>Accès facile</li>
                  </ul>
                </div>
              </div>
              <div className="card-background"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ Section ===== */}
      <section id="FAQ" className="FAQ">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Questions Fréquentes</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Les réponses aux questions les plus posées par nos patients
            </p>
          </div>

          <div className="faq-container">
            {[
              {
                question: " Quelle est la différence entre un psychiatre et un psychologue ?",
                answer:
                  "Le psychiatre est un médecin pouvant prescrire des médicaments, tandis que le psychologue se concentre sur la thérapie par la parole et l'accompagnement psychologique.",
              },
              {
                question: " Comment se déroule la première consultation ?",
                answer:
                  "La première séance permet d’exprimer vos difficultés en toute confiance. C’est un échange bienveillant où l’on détermine ensemble la meilleure approche thérapeutique.",
              },
              {
                question: " Quelle est la durée d’une séance ?",
                answer:
                  "Les consultations durent en moyenne entre 45 minutes et 1 heure, selon vos besoins et la nature du suivi.",
              },
              {
                question: " Faut-il prendre rendez-vous à l’avance ?",
                answer:
                  "Oui, afin d’assurer un accompagnement personnalisé, il est recommandé de réserver votre séance à l’avance.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className={`faq-item ${openFaq === i ? "active" : ""}`}
                onClick={() => toggleFaq(i)}
              >
                <div className="faq-header">
                  <h3>{faq.question}</h3>
                  <span className="faq-icon">{openFaq === i ? "−" : "+"}</span>
                </div>
                <div
                  className="faq-body"
                  style={{
                    maxHeight: openFaq === i ? "200px" : "0",
                    opacity: openFaq === i ? "1" : "0",
                  }}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Ils témoignent</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">Retours d'expérience de patients accompagnés</p>
          </div>
          <div className="testimony-cards">
            <div className="testimony-card">
              <div className="testimony-content">
                <div className="quote-icon">❝</div>
                <p className="testimony-text">
                  "Je suis très  satisfait  et ravi
                    d'encourage chaque  personne en difficulté  à  franchir  le pas de la thérapie.je recommande  une thérapie  chez Mme Ihsane"
                </p>
                <div className="testimony-author">
                  <div className="author-avatar"></div>
                  <div className="author-info">
                    <span className="author-name">Reda ya.</span>
                    <span className="author-desc">Patient depuis 2 ans</span>
                  </div>
                </div>
              </div>
              <div className="testimony-background"></div>
            </div>
            
            <div className="testimony-card">
              <div className="testimony-content">
                <div className="quote-icon">❝</div>
                <p className="testimony-text">
                  "Tres belle experience, Mme Mamou est tres a l'écoute et a su comment me mettre a
                   l’aise et en confiance, moi qui souffrait tant à l'époque. Je recommande vivement."
                </p>
                <div className="testimony-author">
                  <div className="author-avatar"></div>
                  <div className="author-info">
                    <span className="author-name">Khaoula s.</span>
                    <span className="author-desc">Patient depuis 2 an</span>
                  </div>
                </div>
              </div>
              <div className="testimony-background"></div>
            </div>
            
            <div className="testimony-card">
              <div className="testimony-content">
                <div className="quote-icon">❝</div>
                <p className="testimony-text">
                  "Un accompagnement exceptionnel. La Dr. Mamou a su me redonner 
                  espoir et m'aider à surmonter mes défis personnels avec douceur et professionnalisme."
                </p>
                <div className="testimony-author">
                  <div className="author-avatar"></div>
                  <div className="author-info">
                    <span className="author-name">Safae f.</span>
                    <span className="author-desc">Patient depuis 1 ans</span>
                  </div>
                </div>
              </div>
              <div className="testimony-background"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Contact & Rendez-vous</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">Prenez le premier pas vers votre bien-être</p>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <div className="info-card">
                <h3>Informations de contact</h3>
                <div className="contact-items">
                  <div className="contact-item">
                    <div className="contact-icon">📍</div>
                    <div className="contact-details">
                      <strong>Adresse</strong>
                      <span>19 Rue Pasteur, Meknès 50000, Maroc</span>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon">📞</div>
                    <div className="contact-details">
                      <strong>Téléphone</strong>
                      <span>+212 6 70 96 43 77</span>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon">✉️</div>
                    <div className="contact-details">
                      <strong>Email</strong>
                      <span>ihsane.mamou@gmail.com</span>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon">🕒</div>
                    <div className="contact-details">
                      <strong>Horaires</strong>
                      <span>Lun - Ven: 9h - 17h</span>
                      <span>Sam: 9h - 12h</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map Integration */}
              <div className="map-container">
                <div className="map-placeholder">
                  <div className="map-overlay">
                    <h4>Cabinet Dr. Ihsane Mamou</h4>
                    <p>Meknes, Maroc</p>
                    <a href="https://maps.app.goo.gl/D9fv352jEQLaoFZM9" className="map-button" target="_blank" rel="noopener noreferrer">
                      Voir sur Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <form className="contact-form">
              <h3>Demande de rendez-vous</h3>
              <div className="form-row">
                <div className="form-group">
                  <input type="text" placeholder="Nom complet" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Adresse email" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <input type="tel" placeholder="Numéro de téléphone" />
                </div>
                <div className="form-group">
                  <select>
                    <option value="">Type de consultation</option>
                    <option value="psychiatry">Consultation psychiatrique</option>
                    <option value="therapy">Psychothérapie</option>
                    <option value="online">Suivi en ligne</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <textarea placeholder="Votre message ou préférence de rendez-vous..." rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-button">
                <span>Envoyer la demande</span>
                <div className="button-background"></div>
              </button>
              <div class="social-media-container">
                <h3 class="social-media-title">N'oubliez pas de nous rejoindre sur :</h3>
                <div class="social-icons">
                  <a href="https://instagram.com/dr.ihsanemamou.psy/" target="_blank" class="social-icon instagram">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a href="https://linkedin.com/in/dr-ihsane-mamou-b11521180/" target="_blank" class="social-icon linkedin">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://www.facebook.com/people/Psychologue-Psychoth%C3%A9rapeute-Mamou-Ihsane/100057822962574/" target="_blank" class="social-icon facebook">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://wa.me/+212670964377" target="_blank" class="social-icon whatsapp">
                    <i class="fab fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-main">
              <div className="footer-info">
                <h3>Dr. Ihsane Mamou</h3>
                <p>Votre partenaire en santé mentale et bien-être émotionnel à Meknès.

                "Prendre soin de son esprit, c’est ouvrir la voie vers une vie plus sereine et épanouie."</p>
              </div>
              <div className="footer-links">
                <div className="link-group">
                  <h4>Navigation</h4>
                  <a onClick={() => scrollToSection("home")}>Accueil</a>
                  <a onClick={() => scrollToSection("about")}>À propos</a>
                  <a onClick={() => scrollToSection("services")}>Services</a>
                </div>
                <div className="link-group">
                  <h4>Contact</h4>
                  <a onClick={() => scrollToSection("contact")}>Prendre RDV</a>
                  <a href="#contact">Informations</a>
                  <a href="https://wa.me/+212670964377">Urgences</a>
                </div>
              </div>
            </div>
            <div className="footer-copyright">
              <p>© {new Date().getFullYear()} Dr. Ihsane Mamou - Tous droits réservés.</p>
              <p>Site créé avec bienveillance pour votre bien-être</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;