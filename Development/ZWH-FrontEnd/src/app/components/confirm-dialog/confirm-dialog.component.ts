/* Contenitore principale: centra la card sia orizzontalmente che verticalmente */
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55vh; /* Altezza relativa alla finestra */
  width: 55%; /* Larghezza relativa */
  max-width: 1200px; /* Limita la larghezza massima */
  margin: 0 auto; /* Centra orizzontalmente */
}

/* Card centrale per il login */
.login-card {
  display: flex;
  flex-direction: column; /* Posiziona i contenuti in colonna */
  justify-content: space-between; /* Distribuisce gli spazi */
  align-items: center;
  background-color: rgba(0, 0, 0, 0); /* Sfondo trasparente */
  padding: 20px;
  border-radius: 10px; /* Angoli arrotondati */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Effetto ombra */
  text-align: center;
  color: black;
  width: 40%;
  max-width: 300px;
  min-width: 200px;
  min-height: 300px;
  max-height: 600px;
  overflow: hidden; /* Nasconde contenuti che escono */
  background-image: url('/assets/img/background.jpg'); /* Immagine di sfondo */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover; /* Adatta l'immagine */
}

/* Stile per i messaggi di errore */
.error {
  color: red; /* Colore rosso per indicare errori */
  font-size: 1rem; /* Testo di dimensione media */
  font-weight: bold; /* Grassetto */
  margin-top: 0.25rem; /* Spaziatura sopra il messaggio */
  display: block;
  min-height: 1.2rem; /* Impedisce spostamenti del layout */
}

/* Titolo del form */
.login-card h1 {
  font-size: 2rem;
  margin-bottom: 1rem; /* Spaziatura sotto il titolo */
  color: #000000;
}

/* Media query per dispositivi mobili */
@media (max-width: 768px) {
  .login-card {
    width: 100%; /* Usa tutta la larghezza */
    max-width: none;
  }
}

/* Stile per il gruppo di input */
.input-group {
  margin-bottom: 1.5rem; /* Spaziatura tra i gruppi */
  text-align: left; /* Allinea il testo a sinistra */
  width: 100%;
}

.input-group label {
  display: block; /* Visualizza l'etichetta sopra l'input */
  margin-bottom: 0.5rem;
  font-weight: bold; /* Testo in grassetto */
}

.input-group input {
  width: 100%; /* Input a tutta larghezza */
  padding: 0.75rem; /* Spaziatura interna */
  border-radius: 5px; /* Angoli arrotondati */
  border: none; /* Rimuove il bordo */
  font-size: 1rem; /* Dimensione standard del testo */
}

/* Pulsanti */
.button-group {
  display: flex; /* Allinea i pulsanti in riga */
  justify-content: space-between; /* Spazio uniforme tra i pulsanti */
  width: 100%;
}

.p-button {
  width: 48%; /* Pulsanti larghi metà del contenitore */
  padding: 0.75rem;
  font-size: 1rem;
  border: none; /* Nessun bordo */
  border-radius: 5px; /* Angoli arrotondati */
  background-color: #45413c; /* Colore di base */
  color: white;
  cursor: pointer; /* Cambia il puntatore al passaggio del mouse */
  transition: background-color 0.3s ease; /* Animazione del colore */
}

.p-button:hover {
  background-color: #45413c; /* Colore più scuro al passaggio */
}

/* Stile del dialog */
.p-dialog {
  border-radius: 12px !important; /* Angoli arrotondati */
  background-color: #f4f4f4 !important; /* Sfondo grigio chiaro */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3) !important; /* Ombra pronunciata */
}

.p-dialog .p-dialog-header {
  background-color: #45413c !important; /* Header blu */
  color: white !important; /* Testo bianco */
  text-align: center !important;
  font-size: 1.5rem !important; /* Testo grande */
  padding: 1rem !important;
}

.p-dialog .p-dialog-content {
  text-align: center !important; /* Testo centrato */
  font-size: 1rem;
  color: #333 !important; /* Testo grigio scuro */
}

.p-dialog .p-button-primary {
  background-color: #45413c !important; /* Colore blu per il pulsante */
  border: none !important;
  border-radius: 5px !important;
  font-size: 1rem !important;
  padding: 10px 20px !important; /* Spaziatura interna */
  transition: background-color 0.3s ease !important; /* Effetto hover */
}

.p-dialog .p-button-primary:hover {
  background-color: #005fa3 !important; /* Colore più scuro al passaggio */
}
