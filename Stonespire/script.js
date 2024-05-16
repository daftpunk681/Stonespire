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
  mort: {
    content: `<img src="images/imagemort.jpg" alt="Description de l'image"><br><br>Vous êtes mort.`,
choices: [
      { text: "Retour", next: "intro" },
    ] 
  }
};
segmentTaverneNuit: {
    content: `<img src="images/imagetavernenuit.jpg" alt="Description de l'image"><br><br>La nuit tombe sur Stonespire et l'atmosphère devient plus sombre.`,
    choices: [
      { text: "Vous continuez à attendre", next: "segmentAttenteNuit" },
      { text: "Vous décidez de partir et de chercher votre compagnon ailleurs", next: "segmentMarchéNuit" },
    ]
  },
  segmentAttenteNuit: {
    content: `<img src="images/imageattentenuit.jpg" alt="Description de l'image"><br><br>Vous attendez, mais personne ne semble se manifester à la taverne.`,
    choices: [
      { text: "Vous décidez d'explorer la ville", next: "segmentRuesSombres" },
      { text: "Vous restez un peu plus longtemps", next: "mort" },
    ]
  },
  segmentRuesSombres: {
    content: `<img src="images/imageruessombres.jpg" alt="Description de l'image"><br><br>Vous vous aventurez dans les rues sombres de Stonespire, méfiant de chaque coin d'ombre.`,
    choices: [
      { text: "Vous entendez des bruits étranges et décidez de vous en approcher", next: "segmentBruits" },
      { text: "Vous continuez à chercher votre compagnon", next: "segmentCompagnon" },
    ]
  },
  segmentBruits: {
    content: `<img src="images/imagebruits.jpg" alt="Description de l'image"><br><br>Vous découvrez un groupe de cultistes en train de réaliser un rituel sombre.`,
    choices: [
      { text: "Vous les affrontez", next: "mort" },
      { text: "Vous vous échappez discrètement", next: "segmentEchappement" },
    ]
  },
  segmentEchappement: {
    content: `<img src="images/imageechappement.jpg" alt="Description de l'image"><br><br>Vous réussissez à vous échapper sans attirer l'attention des cultistes.`,
    choices: [
      { text: "Vous retournez à la taverne pour réfléchir à votre prochain mouvement", next: "segmentTaverneReprise" },
      { text: "Vous poursuivez votre recherche de votre compagnon", next: "segmentCompagnon" },
    ]
  },
  segmentTaverneReprise: {
    content: `<img src="images/imagetavernereprise.jpg" alt="Description de l'image"><br><br>Vous retournez à la taverne pour reprendre vos esprits et élaborer un plan.`,
    choices: [
      { text: "Vous interrogez le tenancier sur les disparitions récentes", next: "segmentTenancier" },
      { text: "Vous décidez de vous reposer pour la nuit", next: "segmentRepos" },
    ]
  },
 segmentCompagnon: {
    content: `<img src="images/imagecompagnon.jpg" alt="Description de l'image"><br><br>Vous trouvez votre compagnon dans une ruelle sombre, grièvement blessé.`,
    choices: [
      { text: "Vous cherchez de l'aide pour le soigner", next: "segmentAide" },
      { text: "Vous tentez de le soigner vous-même", next: "segmentSoins" },
    ]
  },
  segmentAide: {
    content: `<img src="images/imageaide.jpg" alt="Description de l'image"><br><br>Vous cherchez de l'aide dans les rues de Stonespire, désespéré de trouver quelqu'un qui puisse aider votre compagnon.`,
    choices: [
      { text: "Vous trouvez un guérisseur itinérant", next: "segmentGuérisseur" },
      { text: "Vous vous dirigez vers la taverne pour demander de l'aide", next: "segmentTaverneAide" },
    ]
  },
  segmentGuérisseur: {
    content: `<img src="images/imageguerisseur.jpg" alt="Description de l'image"><br><br>Vous trouvez un guérisseur itinérant dans une ruelle sombre. Il accepte de soigner votre compagnon en échange d'une faveur.`,
    choices: [
      { text: "Vous acceptez ses conditions", next: "segmentFaveur" },
      { text: "Vous refusez et cherchez une autre solution", next: "segmentRefus" },
    ]
  },
  segmentFaveur: {
    content: `<img src="images/imagefaveur.jpg" alt="Description de l'image"><br><br>Le guérisseur demande que vous voliez un artefact magique pour lui en échange de ses services.`,
    choices: [
      { text: "Vous acceptez, désespéré", next: "segmentVol" },
      { text: "Vous refusez et partez à la recherche d'une autre aide", next: "segmentRefus" },
    ]
  },
  segmentRefus: {
    content: `<img src="images/imagerefus.jpg" alt="Description de l'image"><br><br>Vous refusez les conditions du guérisseur et cherchez une autre solution pour soigner votre compagnon.`,
    choices: [
      { text: "Vous retournez à la taverne pour chercher de l'aide", next: "segmentTaverneAide" },
      { text: "Vous partez à la recherche d'un autre guérisseur", next: "segmentAutreGuérisseur" },
    ]
  },
  segmentTaverneAide: {
    content: `<img src="images/imagetaverneaide.jpg" alt="Description de l'image"><br><br>Vous entrez dans la taverne et demandez de l'aide aux habitants, espérant trouver quelqu'un capable de soigner votre compagnon.`,
    choices: [
      { text: "Vous trouvez un médecin compatissant", next: "segmentMédecin" },
      { text: "Personne ne semble capable d'aider", next: "segmentDésespoir" },
    ]
  },
  segmentMédecin: {
    content: `<img src="images/imagemedecin.jpg" alt="Description de l'image"><br><br>Un médecin compatissant accepte de soigner votre compagnon gratuitement, reconnaissant votre détresse.`,
    choices: [
      { text: "Vous remerciez le médecin et restez à ses côtés", next: "segmentGratitude" },
      { text: "Vous attendez à l'extérieur de la taverne", next: "segmentAttente" },
    ]
  },


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
