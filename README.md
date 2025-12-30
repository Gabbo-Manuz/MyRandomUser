### --- Documentazione MyRandomUser ---

## Generazione Utenti

La generazione degli utenti avviene grazie a una funzione chiamata LoadData. Quest'ultima è una funzione  async, così da permettere il funzionamento dell'await. Infatti alla funzione SendRequest è posto davanti il costrutto await che aspetta che la funzione a cui è assegnato sia finita così da permettere al server di randomuser di rispondere e così infine restituire i dati.

## Card

Ogni carta è formata da una zona frontale e una posteriore. La faccia frontale è composta da un immagine dello user, il suo nome e cognome e una stellina, posizionata in alto a destra, per salvarsi lo utente generato. 
La faccia posteriore è composta da una piccola immagine dell'utente posta in alto a sinistra, in basso lungo la carta abbiamo dei tasti di navigazione che permettono la visualizzazione di limitate caratteristiche dell'utente tramite l'hover o il click su di essi e, infine, un icona di un libro posta in alto a destra, che se cliccata mostra maggiori dettagli dell'utente tramite un modal. 
Nel modal dei dettagli vengono inserite alcune delle caratteristiche già visibili nel retro della carta, per permettere all'utente di potersi copiare qualche informazione dell'utente generato. 
Ad ogni carta è associato l'evento click che permette di girarla e mostrare alternativamente le due faccie. 

##  Tasti e Funzionalità

Ci sono tre pulsanti principali: Customize, Stars e Chronology.

| Nome | Funzionamento |
| :--- | ---: |
| Customize | Mostra l'interfaccia di generazioni degli utenti. Il riquadropermette di generare tutti gli utenti che vuoi potendo selezionare il numero, genere e nazionalità (il box delle nazionalità e card basta scrollare e si vedeno anche le altre nazionalità) |
| Anna | 30 |
| Luca | 22 | 

##  Responsive

