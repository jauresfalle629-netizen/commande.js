const nom_client = "awa";
const nom_produit = "ordinateur";
const prix_unitaire = 250000;
const quantite = 2;
const frais_livraison = 5000;
const taux_TVA = 18;

const montant_produit = prix_unitaire * quantite;
const montant_TVA = montant_produit * taux_TVA / 100;
const montant_TTC = montant_produit + montant_TVA;
const total_a_payer = montant_TTC + frais_livraison;
const remise = 10000;
const total_apres_remise = total_a_payer- remise;
const prix_moyen_TTC = montant_TTC / quantite;
console.log(" ");
console.log("==== REÇU_DE_COMMANDE ====");
console.log(" ");
console.log("Client :", nom_client);
console.log("Produit :", nom_produit);
console.log("prix_unitaire :", prix_unitaire, "Fcfa");
console.log("Quantite :", quantite);
console.log(" ")
console.log("Montant_des_produit:", montant_produit, "Fcfa");
console.log("TVA (18%) :", montant_TVA,"Fcfa");
console.log("Montant_TTC :", montant_TTC, "Fcfa");
console.log("Livraison :", frais_livraison, "FCFA");
console.log("TOTAL_A_PAYER :", total_a_payer, "FCFA");
console.log("Remise :", remise, "Fcfa");
console.log("TOTAL_APRES_REMISE :", total_apres_remise, "Fcfa");
console.log(" ")
console.log("Prix_moyen_TTC_par_produit :", prix_moyen_TTC, "FCFA");

console.log("Type_du_nom :", typeof nom_client);
console.log("Type_du_produit :", typeof nom_produit);
console.log("Type_du_prix :", typeof prix_unitaire);
console.log("Type_de_la_quantite :", typeof quantite);
console.log("Type_de_la_TVA :", typeof taux_TVA);
console.log("Type_du_total_à_payer :", typeof total_a_payer);