document.addEventListener("DOMContentLoaded", () => {
  
  const translations = {
    it: {
      hero_title: "Tecnologia sotto controllo",
      hero_sub: "Sviluppiamo soluzioni software enterprise per la gestione avanzata dei processi aziendali. Le nostre piattaforme sono progettate per integrarsi nei sistemi esistenti, ridurre complessità operative e migliorare la qualità del controllo sui dati. L’obiettivo è creare infrastrutture digitali stabili, scalabili e sicure nel lungo periodo.",
      hero_cta: "Contattaci",
      
      numbers_title: "Affidabilità dimostrata",
      num1: "oltre 250 aziende supportate",
      num2: "1200 infrastrutture gestite",
      num3: "15 anni di esperienza",
      
      soft_title: "Ottimizzazione dei processi",
      soft_text: "Automazione e semplificazione dei flussi aziendali attraverso sistemi software progettati per ridurre inefficienze e migliorare la produttività complessiva.",
      
      sec_title: "Sicurezza e privacy",
      sec_text: "Architetture sicure, crittografia avanzata e controllo multilivello dei dati aziendali per garantire protezione completa delle informazioni.",
      
      comm_title: "Comunicazione interna",
      comm_text: "Strumenti digitali che migliorano la collaborazione tra reparti, riducono i tempi decisionali e aumentano la coerenza operativa.",
      
      contact_title: "Contatto",
      contact_text: "Per richieste enterprise, integrazioni o collaborazioni puoi contattarci tramite i canali ufficiali sottostanti.",
      contact_mail: "Invia Email",
      contact_gmail: "Apri Gmail"
    },
    
    en: {
      hero_title: "Technology under control",
      hero_sub: "We develop enterprise software solutions for advanced business process management. Our platforms integrate into existing systems, reduce operational complexity and improve data control quality. The goal is to build stable, scalable and secure digital infrastructures over time.",
      hero_cta: "Contact us",
      
      numbers_title: "Proven reliability",
      num1: "250+ companies supported",
      num2: "1200 infrastructures managed",
      num3: "15 years of experience",
      
      soft_title: "Process optimization",
      soft_text: "Automation and simplification of business workflows through software systems designed to reduce inefficiencies and improve overall productivity.",
      
      sec_title: "Security & privacy",
      sec_text: "Secure architectures, advanced encryption and multi-layer data control ensuring full protection of enterprise information.",
      
      comm_title: "Internal communication",
      comm_text: "Digital tools that improve collaboration between teams, reduce decision time and increase operational consistency.",
      
      contact_title: "Contact",
      contact_text: "For enterprise requests, integrations or collaborations you can reach us through the official channels below.",
      contact_mail: "Send Email",
      contact_gmail: "Open Gmail"
    }
  };
  
  function applyLang(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      el.textContent = translations[lang][el.dataset.i18n];
    });
  }
  
  window.setLang = (lang) => {
    localStorage.setItem("lang", lang);
    applyLang(lang);
  };
  
  applyLang(localStorage.getItem("lang") || "it");
  
  const status = document.getElementById("status");
  
  window.addEventListener("scroll", () => {
    if (!status) return;
    status.textContent = window.scrollY > 80 ? "SECURE" : "ONLINE";
  });
  
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add("show");
    });
  }, { threshold: 0.15 });
  
  document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
  
  const counters = document.querySelectorAll(".counter");
  
  const counterObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      
      const el = entry.target;
      const target = +el.dataset.target;
      let c = 0;
      
      const step = target / 100;
      
      const update = () => {
        c += step;
        if (c < target) {
          el.textContent = Math.floor(c);
          requestAnimationFrame(update);
        } else {
          el.textContent = "+" + target;
        }
      };
      
      update();
      counterObs.unobserve(el);
    });
  }, { threshold: 0.5 });
  
  counters.forEach(c => counterObs.observe(c));
});