const cardData = [
  {
    title:
      "Hacking Tutorial | 24-Hour Marathon of Beginner to Advanced Hacking!",
    cName: "HackerWorldzzz",
    views: "999K",
    monthsOld: "10 Years Ago",
    duration: "23:59:59",
    thumbnail:
      "https://images.unsplash.com/photo-1559705421-4ae9bf6fabb5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Mastering Cybersecurity | Protecting Your Digital Fortress",
    cName: "DigitalDefenders",
    views: "750K",
    monthsOld: "2 Years Ago",
    duration: "18:30:45",
    thumbnail:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title:
      "Ethical Hacking Essentials | Unveiling the Power of White Hat Techniques",
    cName: "EthicalHacks",
    views: "1M",
    monthsOld: "3 Years Ago",
    duration: "12:45:30",
    thumbnail:
      "https://images.unsplash.com/photo-1618171889969-0feeb769fe78?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title:
      "Cybersecurity Fundamentals | Understanding the Basics of Digital Defense",
    cName: "CyberShield",
    views: "500K",
    monthsOld: "1 Year Ago",
    duration: "08:15:20",
    thumbnail:
      "https://images.unsplash.com/photo-1533709752211-118fcaf03312?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Advanced Network Security | Strengthening Your Digital Perimeter",
    cName: "NetworkGuardians",
    views: "1.2M",
    monthsOld: "4 Years Ago",
    duration: "20:00:00",
    thumbnail:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title:
      "Penetration Testing Demystified | Exploring the Depths of Cyber Vulnerabilities",
    cName: "HackExplorers",
    views: "800K",
    monthsOld: "2 Years Ago",
    duration: "15:30:10",
    thumbnail:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function createCard(cardIndex) {
    const card = cardData[cardIndex];
    const cardsContainer = document.querySelector(".container");
    
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
  
    cardElement.innerHTML = `
      <div class="card-item">
        <img id="thumbnail" src="${card.thumbnail}" alt="Video" />
        <div id="timeStamp" class="duration">${card.duration}</div>
      </div>
      <div class="card-content">
        <h3 id="title">${card.title}</h3>
        <div class="cDetails">
          <h4 id="cName">${card.cName}</h4>
          <div class="dot">•</div>
          <h4 id="views">${card.views}</h4>
          <div class="dot">•</div>
          <h4 id="timeUpload">${card.monthsOld}</h4>
        </div>
      </div>
    `;
  
    cardsContainer.appendChild(cardElement);
  }
  
  function handleButtonClick() {
    if (typeof(handleButtonClick.cardIndex) === 'undefined') {
      handleButtonClick.cardIndex = 0;
    }
    createCard(handleButtonClick.cardIndex);
    handleButtonClick.cardIndex = (handleButtonClick.cardIndex + 1) % cardData.length;
  }
  
  const createCardButton = document.getElementById('createCardButton');
  createCardButton.addEventListener('click', handleButtonClick);
  