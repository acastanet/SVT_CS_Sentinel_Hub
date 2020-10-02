//About Sentinel-2 L1C Data
//Measurement: Top of the atmosphere (TOA) reflectance
//About Sentinel-2 L2A Data
//Measurement: Bottom of the atmosphere (BOA) reflectance, processed from L1C with Sen2Cor
//More informations: https://earth.esa.int/web/sentinel/user-guides/sentinel-2-msi/product-types/level-2a

//Chacune des 3 couleurs du pixel reçois un canal de la caméra multispectrale, valeur entre 0 e 1.
// l'affichage se fera ensuite automatiquemment, en multipliant par 255.
var rouge	= B04;
var vert	= B03;
var bleu	= B02;

//Calcul d'une image en niveau de gris par attribution aux 3 couleurs la même valeur.
var n_gris	= (rouge+vert+bleu)/3;

//Combinaison des bande spectrale
var NDVI	= (B08 - B04)/(B08 + B04);
var NDWI 	= (B03 - B08)/(B03 + B08);
var NDWI_H	= (B8A - B11)/(B8A + B11);

// Utilisation de l'infrarouge pour les volcans
// avec la fonction Math.max pour faire ressortir la lave
// à partir des valeurs maximales de l'infrarouge.
var v_rouge	= B04*2.5 + Math.max(0,B12-0.1);
var v_vert	= B03*2.5 + Math.max(0,B11-0.1);
var v_bleu	= B02*2.5;

// Passage au négatif. Attention, nous travaillons en pourcentage (entre 0 et 1) de RVB
// l'affichage se fera ensuite automatiquemment, en multipliant par 255 
// Pas besoin de facteur
var irouge	= 1-rouge;
var ivert	= 1-vert;
var ibleu	= 1-bleu;

// Arrosage : mise en valeur des cultures en vert, plus les zone arrosées (NDWI_H) en vert clair
var vert_arrosage = vert * 2 + NDVI + (Math.max(0,NDWI_H-0.1)*3)

//Fonction d'affichage de l'image : chacune des 3 valeurs correspond
//au traitement fait sur chaque couleur du pixel du tableau.
//Le tableau représente l'image ou chaque case est un pixel à 3 valeurs.

return [rouge	* 2.5,//2.5 est le facteur de gain* il peut être nécessaire de le suprimer (* 1) ou de le modifier pour adapter la luminosité.
        vert	* 2.5,
        bleu	* 2.5];

//*The default gain factor is set to 2.5,
//which corresponds to white-point reflectance of 40%
//(a pixel with 40% or more reflectance in all three bands
//will appear white in the resulting image).
