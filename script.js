document.addEventListener("DOMContentLoaded", () => {
  
  const translations = {
  it: {
    hero_title: "Tecnologia sotto controllo",
    hero_sub: "Sviluppiamo soluzioni software enterprise dedicate alla gestione avanzata dei processi aziendali e delle infrastrutture digitali complesse. Le nostre piattaforme sono progettate per integrarsi in ecosistemi già esistenti senza interrompere i flussi operativi, migliorando progressivamente efficienza, sicurezza e qualità del controllo sui dati. L’obiettivo è costruire sistemi scalabili, affidabili e sostenibili nel tempo, capaci di adattarsi alla crescita delle organizzazioni e all’evoluzione delle loro esigenze operative.",
    hero_cta: "Contattaci",

    numbers_title: "Affidabilità dimostrata",
    num1: "oltre 250 aziende supportate in diversi settori industriali, con soluzioni software personalizzate progettate per ottimizzare processi complessi, ridurre inefficienze operative e migliorare la gestione centralizzata dei dati in ambienti ad alta intensità tecnologica.",
    num2: "più di 1200 infrastrutture software attive gestite con continuità operativa, monitoraggio costante delle performance e aggiornamenti progressivi progettati per garantire stabilità, sicurezza e scalabilità anche in sistemi enterprise di grande complessità.",
    num3: "oltre 15 anni di esperienza nello sviluppo di sistemi digitali avanzati per aziende strutturate, con un approccio orientato alla risoluzione di problemi reali, all’ottimizzazione dei processi e alla costruzione di architetture software robuste e durature.",

    soft_title: "Ottimizzazione dei processi",
    soft_text: "Le nostre soluzioni software sono progettate per intervenire in modo diretto sui flussi operativi aziendali, identificando colli di bottiglia, inefficienze e ridondanze nei processi esistenti. Attraverso automazioni intelligenti, integrazione tra sistemi eterogenei e interfacce ottimizzate per l’utilizzo quotidiano, rendiamo possibile la gestione di operazioni complesse in modo più semplice, veloce e controllato. Questo permette alle aziende di ridurre tempi operativi, migliorare la qualità delle decisioni e aumentare la produttività complessiva senza compromettere il controllo sui dati.",

    sec_title: "Sicurezza e privacy",
    sec_text: "La sicurezza dei dati rappresenta uno dei pilastri fondamentali della nostra architettura software. Ogni soluzione viene progettata con un approccio security-by-design, integrando sistemi di crittografia avanzata, gestione granulare dei permessi e monitoraggio continuo delle attività. Le infrastrutture sono costruite per prevenire accessi non autorizzati, rilevare anomalie e garantire la conformità agli standard di sicurezza internazionali. L’obiettivo non è solo proteggere i dati, ma garantire alle aziende un controllo completo e trasparente delle proprie informazioni.",

    comm_title: "Comunicazione interna",
    comm_text: "Una comunicazione interna efficiente è essenziale per il funzionamento delle organizzazioni moderne. Le nostre piattaforme facilitano lo scambio di informazioni tra reparti, automatizzano la distribuzione dei dati e riducono drasticamente i tempi di coordinamento tra team differenti. Questo consente di eliminare ambiguità operative, migliorare la collaborazione e aumentare la velocità decisionale. Il risultato è un ambiente aziendale più connesso, coerente e produttivo, in cui le informazioni fluiscono in modo chiaro e strutturato.",
    
    maps_title: "Dove trovarci?",
    maps_text: "> LOCATION: ROMA, ITALIA\n> STATUS: ACTIVE\n> NETWORK: STABLE",

    contact_cta: "contattaci",

    contact_general: "Contatti generali",
    contact_general_text: "Per richieste di carattere informativo, supporto tecnico o comunicazioni non commerciali, il nostro team è disponibile tramite il canale generale. Gestiamo queste richieste con priorità di risposta entro tempi brevi, garantendo supporto chiaro e preciso su tutte le informazioni relative ai nostri servizi e alle nostre soluzioni software.",
    contact_gmail_general: "Apri Gmail con destinatario precompilato",

    contact_business: "Area commerciale",
    contact_business_text: "Per collaborazioni aziendali, richieste di preventivo, integrazioni software o partnership strategiche, è disponibile il nostro reparto commerciale. Ogni richiesta viene analizzata da un team dedicato per valutare esigenze tecniche, compatibilità e possibili soluzioni personalizzate su scala enterprise.",
    contact_gmail_business: "Apri Gmail per richiesta commerciale",

    contact_phone_title: "Contatto telefonico",
    contact_phone_text: "Il contatto telefonico è disponibile per comunicazioni dirette, richieste urgenti o confronti rapidi con il nostro team. Rispondiamo durante gli orari lavorativi per garantire supporto immediato e una gestione efficiente delle richieste più sensibili."
  },

  en: {
    hero_title: "Technology under control",
    hero_sub: "We develop enterprise software solutions dedicated to advanced business process management and complex digital infrastructures. Our platforms are designed to integrate seamlessly into existing ecosystems without disrupting operational workflows, progressively improving efficiency, security and data control quality. The goal is to build scalable, reliable and sustainable systems capable of adapting to organizational growth and evolving operational needs over time.",
    hero_cta: "Contact us",

    numbers_title: "Proven reliability",
    num1: "250+ companies supported across multiple industries with tailored software solutions designed to optimize complex processes, reduce operational inefficiencies and improve centralized data management in high-demand technological environments.",
    num2: "more than 1200 active software infrastructures managed with continuous operational oversight, constant performance monitoring and progressive updates designed to ensure stability, security and scalability in highly complex enterprise systems.",
    num3: "over 15 years of experience in developing advanced digital systems for structured enterprises, focused on solving real-world problems, optimizing workflows and building robust and long-lasting software architectures.",

    soft_title: "Process optimization",
    soft_text: "Our software solutions are designed to directly improve enterprise workflows by identifying bottlenecks, inefficiencies and redundancies within existing processes. Through intelligent automation, system integration and optimized user interfaces, we enable the management of complex operations in a simpler, faster and more controlled way. This allows companies to reduce operational time, improve decision quality and increase overall productivity without losing control over critical data.",

    sec_title: "Security & privacy",
    sec_text: "Data security is one of the core pillars of our software architecture. Every solution is designed with a security-by-design approach, integrating advanced encryption systems, granular permission management and continuous activity monitoring. Our infrastructures are built to prevent unauthorized access, detect anomalies and ensure compliance with international security standards. The goal is not only to protect data, but to give organizations full and transparent control over their information.",

    comm_title: "Internal communication",
    comm_text: "Efficient internal communication is essential for modern organizations. Our platforms streamline information exchange between departments, automate data distribution and significantly reduce coordination time across teams. This eliminates operational ambiguity, improves collaboration and increases decision-making speed. The result is a more connected, consistent and productive business environment where information flows clearly and efficiently.",
    
    maps_title: "Where to find us?",
    maps_text: "> LOCATION: ROME, ITALY\n> STATUS: ACTIVE\n> NETWORK: STABLE",

    contact_cta: "contact us",

    contact_general: "General inquiries",
    contact_general_text: "For informational requests, technical support or non-commercial communication, our team is available through the general channel. We handle these requests with fast response times, ensuring clear and precise support regarding our services and software solutions.",
    contact_gmail_general: "Open Gmail with pre-filled recipient",

    contact_business: "Business department",
    contact_business_text: "For business collaborations, quotations, software integrations or strategic partnerships, our dedicated commercial team is available. Each request is analyzed to evaluate technical requirements, compatibility and potential customized enterprise-level solutions.",
    contact_gmail_business: "Open Gmail for business inquiries",

    contact_phone_title: "Phone contact",
    contact_phone_text: "Phone support is available for direct communication, urgent requests or quick discussions with our team. We respond during working hours to ensure immediate assistance and efficient handling of time-sensitive matters."
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