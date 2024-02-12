Il prezzo orario per una commissione varia in questo modo:
se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.50€ l’ora
se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.30€ l’ora
se la commissione riguarda l’analisi progettuale di un progetto il prezzo orario è di 33.60€
L’utente potrebbe decidere di utilizzare un codice promozionale tra i seguenti:
YHDNU32
JANJC63
PWKCN25
SJDPO96
POCIE24
Se l’utente inserisce un codice promozionale valido, ha diritto ad uno sconto del 25% sul prezzo finale. Se il codice inserito non è valido, il sito deve informare l’utente che il codice non è valido e il prezzo finale viene calcolato senza applicare sconti.
Il risultato del calcolo del prezzo finale deve essere visualizzato in “forma umana” (con 2 decimali e il simbolo dell’euro) in un apposito tag HTML appena sotto il bottone send.
# Alcuni consigli
Ricordatevi che se non state bene attenti, Javascript vi fa le magie con i tipi :slightly_smiling_face:
Ricordatevi che il form ha un comportamento “strano” quando fate click sul bottone Send che è di tipo submit (type=submit).
# Bonus:
Quando l’utente clicca sul pulsante “Send”, se il codice promozionale inserito non è valido, facciamo diventare quest’ultimo di colore rosso. Se il codice inserito è valido, dopo aver calcolato il prezzo scontato, eliminare quel codice dall’elenco dei codici sconto disponibili, in modo che non sia più utilizzabile.
# Super Bonus:
Creare una struttura dati adeguata per contenere tutte le informazioni relative ai progetti presenti nella sezione “Portfolio”. Rimuovere quindi le card dal markup nel file html e stamparle in pagina dinamicamente tramite l’utilizzo di JavaScript.
