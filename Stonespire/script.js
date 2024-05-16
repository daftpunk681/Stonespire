// Define the story segments and choices
const storyData = {
  intro: {
    content: `<img src="images/image1.jpg" alt="Description de l'image"><br><br>Qui êtes-vous ?`,
    choices: [
      { text: "Un humain voleur", next: "segment1" },
      { text: "Un humain paladin", next: "segmentPaladin" },
    ]
  },
  segment1: {
    content: `<img src="images/image3.jpg" alt="Description de l'image"><br><br>Vous êtes un humain voleur et vous décidez de vous rendre au Village de Stonespire.`,
    choices: [
      { text: "En passant par la forêt de Darkvale", next: "segmentDarkvale" },
      { text: "En passant près du lac de Drowned Witch", next: "segmentDrownedWitch" },
    ]
  },
  segmentPaladin: {
    content: `<img src="images/imagepaladin.jpg" alt="Description de l'image"><br><br>Vous êtes un humain paladin, il n'y a que les blaireaux qui jouent paladin. Vous vous sentez honteux.`,
    choices: [
      { text: "Continuer", next: "mort" },
    ]
  },
  segmentDarkvale: {
    content: `<img src="images/imagedarkvale.jpg" alt="Description de l'image"><br><br>Des bandits vous abordent.`,
    choices: [
      { text: "Vous les attaquez", next: "mort" },
      { text: "Vous engagez la conversation", next: "segmentConversation" },
    ]
  },
  segmentConversation: {
    content: `<img src="images/imageconversation.jpg" alt="Description de l'image"><br><br>Vous parlez avec ce groupe de bandit et remarquez un écusson que vous connaissez`,
    choices: [
      { text: "Vous tentez de les convaincre que vous êtes un voleur de la guilde de Darkholden", next: "segmentStonespireNord" },
      { text: "Vous les insultez, les membres de leur guilde sont responsables de pillage et de meurtres ", next: "mort" },
    ]
  },
    segmentStonespireNord: {
    content: `<img src="images/imageStonespireNord.jpg" alt="Description de l'image"><br><br>Ils font partie bien de la guilde de Darkholden, Vous arrivez à Stonespire par la porte Nord pour rencontrer le chef de leur groupe.Vous êtes dans la maison de la guilde de Darkholden.`,
    choices: [
      { text: "Vous attendez qu'on vous introduise au chef de la guilde", next: "segmentAttenteChef" },
      { text: "Vous ne voulez pas que l'on remarque que vous ne faites pas partie de la guilde et vous fuyez", next: "mort" },
    ]
  },
  segmentAttenteChef: {
    content: `<img src="images/imageattentechef.jpg" alt="Description de l'image"><br><br>Vous attendez que le chef vous reçoive. Un des garde vous demande le mot de passe`,
    choices: [
      { text: "Vous dites Vae Victis", next: "segmentAudienceChef" },
      { text: "Vous dites Vade in pace", next: "mort" },
    ]
  },
  segmentAudienceChef: {
    content: `<img src="images/imageAudienceChef.jpg" alt="Description de l'image"><br><br>Vous vous êtes souvenu de ce mot de passe que vous avez entendu il y a fort longtemps. Le chef vous recoit.`,
    choices: [
      { text: "Vous le suivez dans son office", next: "segmentBravo" },
      { text: "Vous l'attaquez", next: "mort" },
    ]
  },
  segmentBravo: {
    content: `<img src="images/imagebravo.jpg" alt="Description de l'image"><br><br>Le chef de guilde vous reçoit et il vous propose de travailler pour lui`,
choices: [
      { text: "Vous acceptez", next: "segmentMission" },
      { text: "Vous refusez et tentez de l'attaquer", next: "mort" },
    ]
  },
segmentMission: {
    content: `<img src="images/imagemission.jpg" alt="Description de l'image"><br><br>Il vous demande de retrouver sa fille qui a disparu, il pense qu'on pourra vous renseigner à la taverne`,
    choices: [
      { text: "Vous acceptez", next: "segmentTaverne" },
      { text: "Vous refusez finalement et l'attaquez", next: "segmentmort" },
    ]
  },	
  segmentDrownedWitch: {
    content: `<img src="images/imageDrownedwitch.jpg" alt="Description de l'image"><br><br>Un noyeur gris vous attaque.`,
    choices: [
      { text: "Vous fuyez la goule", next: "segmentFuite" },
      { text: "Vous attaquez la goule", next: "segmentAttaqueGoule" },
    ]
  },
  segmentFuite: {
    content: `<img src="images/imagefuite.jpg" alt="Description de l'image"><br><br>Vous arrivez à Stonespire par la porte Sud. Qui n'est pas gardée`,
choices: [
      { text: "Vous décidez d'aller au marché pour y chercher votre compagnon", next: "segmentMarché" },
      { text: "Vous décidez d'aller à la taverne pour y chercher votre compagnon", next: "segmentTaverne" },
    ]
  },
segmentMarché: {
    content: `<img src="images/imagemarché.jpg" alt="Description de l'image"><br><br>Vous arrivez au marché de Stonespire`,
choices: [
      { text: "Vous interrogez un groupe de bandits qui arborent un écusson que vous pensez reconnaitre", next: "segmentConversation" },
      { text: "Vous  ne trouvez pas votre compagnon et décidez d'aller à la taverne pour y chercher votre compagnon", next: "segmentTaverne" },
    ]
  },
segmentTaverne: {
    content: `<img src="images/imagetaverne.jpg" alt="Description de l'image"><br><br>Vous arrivez à la taverne de Stonespire`,
choices: [
      { text: "Vous commandez une bière en attendant la nuit", next: "segmentTaverneNuit" },
      { text: "Vous commandez une bière et entreprenez d'interroger des clients", next: "segmentBar" },
    ]
  },
  segmentAttaqueGoule: {
    content: `<img src="images/imageattaquegoule.jpg" alt="Description de l'image"><br><br>Vous attaquez le noyeur.`,
    choices: [
      { text: "Vous l'attaquez à mains nues", next: "mort" },
      { text: "Vous l'attaquez avec votre dague", next: "segmentAttaqueGouleDague" },
    ]
  },
  segmentAttaqueGouleDague: {
    content: `<img src="images/imageattaquegouledague.jpg" alt="Description de l'image"><br><br>Vous lui plantez votre dague.`,
    choices: [
      { text: "Dans le coeur", next: "segmentGoulemorte" },
      { text: "Dans le ventre", next: "mort" },
    ]
  },
segmentGoulemorte: {
    content: `<img src="images/imagegoulemorte.jpg" alt="Description de l'image"><br><br>La goule est morte et vous trouvez un papier et une fiole verte sur son corps`,
    choices: [
      { text: "Partir vers la ville avec le papier", next: "segmentPorteEst" },
      { text: "Boire la fiole", next: "mort" },
    ]
  },
  segmentPorteEst: {
    content: `<img src="images/imageporteest.jpg" alt="Description de l'image"><br><br>Vous arrivez à Stonespire par la porte Est. Elle est lourdement gardée et les gardes zélés vous demandent un laissez-passer`,
choices: [
      { text: "Vous leur tendez un papier trouvé sur la goule ", next: "segmentMarché" },
      { text: "Vous les insultez", next: "mort" },
    ] 
  },
const deathMusic = document.getElementById('death-music');
if (segmentId === 'mort') {
    deathMusic.play(); // Démarrer la lecture de la musique de mort
} else {
    deathMusic.pause(); // Mettre en pause la musique si ce n'est pas la page "mort"
}
  mort: {
    content: `<img src="images/imagemort.jpg" alt="Description de l'image"><br><br>Vous êtes mort.`,
choices: [
      { text: "Retour", next: "intro" },
    ] 
  }
};

// Get reference to the toggle music button
const toggleMusicButton = document.getElementById('toggle-music');

// Variable to track if the music is currently playing
let musicPlaying = true;

// Function to toggle music playback
function toggleMusic() {
  if (musicPlaying) {
    backgroundMusic.pause(); // Pause the music
  } else {
    backgroundMusic.play(); // Play the music
  }
  musicPlaying = !musicPlaying; // Inverse the music playing state
  // Change the button text to reflect the current state
  toggleMusicButton.textContent = musicPlaying ? "Désactiver la musique" : "Activer la musique";
}

// Event listener for the toggle music button
toggleMusicButton.addEventListener('click', toggleMusic);

// Get references to the story content and choices containers
const storyContent = document.getElementById('story-content');
const choicesContainer = document.getElementById('choices');
const imageContainer = document.getElementById('image-container');
const backgroundMusic = document.getElementById('background-music');

// Function to display the story segment and choices
function showSegment(segmentId) {
  const segment = storyData[segmentId];
  storyContent.innerHTML = segment.content;
  imageContainer.innerHTML = ''; // Réinitialiser le conteneur d'image

  // Clear previous choices
  choicesContainer.innerHTML = '';

  // Add new choices
  if (segment.choices) {
    segment.choices.forEach(choice => {
      const button = document.createElement('button');
      button.textContent = choice.text;
      button.addEventListener('click', () => showSegment(choice.next));
      choicesContainer.appendChild(button);
    });
  }
}

// Function to start playing the background music
function startBackgroundMusic() {
  backgroundMusic.volume = 0.5; // Volume à 50%
  backgroundMusic.play();
}

// Start the diaporama and the background music
showSegment('intro');
startBackgroundMusic();
