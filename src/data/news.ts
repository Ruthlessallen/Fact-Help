export interface NewsArticle {
  id: number;
  title: string;
  story: string;
  source: string;
  sourceType: "nacional" | "local";
  location: string;
  publishedAt: string;
  url: string;
}

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    "id": 1,
    "title": "Moren la mare i la filla ferides per la caiguda d'un mur a Roda de Berà durant els aiguats",
    "story": "Aiguats de Roda de Berà",
    "source": "ARA",
    "sourceType": "nacional",
    "location": "Roda de Berà, Tarragona",
    "publishedAt": "2026-08-26",
    "url": "https://www.ara.cat/medi-i-crisi-climatica/"
  },
  {
    "id": 2,
    "title": "Moren la mare i la filla ferides crítiques als aiguats de la Costa Daurada",
    "story": "Aiguats de Roda de Berà",
    "source": "La Vanguardia",
    "sourceType": "nacional",
    "location": "Roda de Berà, Tarragona",
    "publishedAt": "2026-08-27",
    "url": "https://epaper.lavanguardia.com/la-vanguardia/la-vanguardia-catala/2026-08-27"
  },
  {
    "id": 3,
    "title": "Moren les dues dones, mare i filla, sobre les quals va caure un mur a Roda de Berà",
    "story": "Aiguats de Roda de Berà",
    "source": "El Periódico",
    "sourceType": "nacional",
    "location": "Roda de Berà, Tarragona",
    "publishedAt": "2026-08-26",
    "url": "https://www.elperiodico.cat/tarragona/20260826/moren-dones-mare-filla-cayo-mur-roda-bera-tarragona-133661973"
  },
  {
    "id": 4,
    "title": "Moren les dues dones que estaven en estat crític per la caiguda d'un mur pels aiguats de dissabte a Roda de Berà",
    "story": "Aiguats de Roda de Berà",
    "source": "3Cat / 3CatInfo",
    "sourceType": "nacional",
    "location": "Roda de Berà, Tarragona",
    "publishedAt": "2026-08-26",
    "url": "https://www.3cat.cat/3catinfo/moren-dues-dones-a-qui-va-caure-un-mur-pels-aiguats-de-dissabte-a-roda-de-bera/noticia-amp/3425821/"
  },
  {
    "id": 5,
    "title": "Moren la mare i la filla que van quedar atrapades sota un mur pels aiguats",
    "story": "Aiguats de Roda de Berà",
    "source": "RAC1",
    "sourceType": "nacional",
    "location": "Roda de Berà, Tarragona",
    "publishedAt": "2026-08-26",
    "url": "https://www.rac1.cat/successos/20260826/367843/moren-mare-filla-quedar-atrapades-mur-pels-aiguats-dissabte-roda-bera.html"
  },
  {
    "id": 6,
    "title": "Moren la mare i la filla sobre les qui va caure un mur dissabte a Roda de Berà",
    "story": "Aiguats de Roda de Berà",
    "source": "Segre",
    "sourceType": "local",
    "location": "Roda de Berà, Tarragona",
    "publishedAt": "2026-08-25",
    "url": "https://www.segre.com/"
  },
  {
    "id": 7,
    "title": "Información sobre la muerte de la madre y la hija tras los aiguats de Roda de Berà",
    "story": "Aiguats de Roda de Berà",
    "source": "Diari de Girona",
    "sourceType": "local",
    "location": "Roda de Berà, Tarragona",
    "publishedAt": "2026-08-26",
    "url": "https://www.diaridegirona.cat/"
  },
  {
    "id": 8,
    "title": "Cobertura de la muerte de las dos víctimas de Roda de Berà",
    "story": "Aiguats de Roda de Berà",
    "source": "TV3 / 3Cat",
    "sourceType": "nacional",
    "location": "Roda de Berà, Tarragona",
    "publishedAt": "2026-08-26",
    "url": "https://www.3cat.cat/3catinfo/"
  },
  {
    "id": 9,
    "title": "El Govern admite \"errores\" por el colapso de Renfe el día del eclipse",
    "story": "Colapso ferroviario durante el eclipse",
    "source": "El País",
    "sourceType": "nacional",
    "location": "Catalunya",
    "publishedAt": "2026-08-14",
    "url": "https://elpais.com/espana/catalunya/2026-08-14/el-govern-admite-errores-por-el-colapso-de-renfe-el-dia-del-eclipse.html"
  },
  {
    "id": 10,
    "title": "Cobertura de la valoración del Govern sobre el colapso ferroviario durante el eclipse",
    "story": "Colapso ferroviario durante el eclipse",
    "source": "ACN",
    "sourceType": "nacional",
    "location": "Catalunya",
    "publishedAt": "2026-08-13",
    "url": "https://www.acn.cat/"
  },
  {
    "id": 11,
    "title": "Cobertura del colapso de Rodalies/Renfe durante el eclipse solar",
    "story": "Colapso ferroviario durante el eclipse",
    "source": "3Cat / 3CatInfo",
    "sourceType": "nacional",
    "location": "Catalunya",
    "publishedAt": "2026-08-12",
    "url": "https://www.3cat.cat/"
  },
  {
    "id": 12,
    "title": "Cobertura informativa del dispositivo de transporte y las incidencias del eclipse",
    "story": "Colapso ferroviario durante el eclipse",
    "source": "TV3 / 3Cat",
    "sourceType": "nacional",
    "location": "Catalunya",
    "publishedAt": "2026-08-12",
    "url": "https://www.3cat.cat/"
  },
  {
    "id": 13,
    "title": "Cobertura de las incidencias ferroviarias durante el eclipse",
    "story": "Colapso ferroviario durante el eclipse",
    "source": "RAC1",
    "sourceType": "nacional",
    "location": "Catalunya",
    "publishedAt": "2026-08-12",
    "url": "https://www.rac1.cat/"
  },
  {
    "id": 14,
    "title": "Cobertura del colapso ferroviario provocado por la afluencia al eclipse",
    "story": "Colapso ferroviario durante el eclipse",
    "source": "La Vanguardia",
    "sourceType": "nacional",
    "location": "Catalunya",
    "publishedAt": "2026-08-12",
    "url": "https://www.lavanguardia.com/"
  },
  {
    "id": 15,
    "title": "Cobertura del colapso de Renfe/Rodalies durante el eclipse",
    "story": "Colapso ferroviario durante el eclipse",
    "source": "El Periódico",
    "sourceType": "nacional",
    "location": "Catalunya",
    "publishedAt": "2026-08-12",
    "url": "https://www.elperiodico.com/"
  },
  {
    "id": 16,
    "title": "Cobertura del dispositivo ferroviario y las incidencias del eclipse",
    "story": "Colapso ferroviario durante el eclipse",
    "source": "ARA",
    "sourceType": "nacional",
    "location": "Catalunya",
    "publishedAt": "2026-08-12",
    "url": "https://www.ara.cat/"
  },
  {
    "id": 17,
    "title": "Els embassaments de les conques internes baixen del 40% i activen noves restriccions",
    "story": "Sequera i restriccions d'aigua",
    "source": "ACN",
    "sourceType": "nacional",
    "location": "Catalunya",
    "publishedAt": "2026-09-08",
    "url": "https://www.acn.cat/"
  },
  {
    "id": 18,
    "title": "El Bages aplica limitacions al reg de parcs i jardins municipals",
    "story": "Sequera i restriccions d'aigua",
    "source": "Regió7",
    "sourceType": "local",
    "location": "Manresa, Bages",
    "publishedAt": "2026-09-08",
    "url": "https://www.regio7.cat/"
  },
  {
    "id": 19,
    "title": "L'ACA avança l'entrada en fase d'excepcionalitat a nou municipis",
    "story": "Sequera i restriccions d'aigua",
    "source": "La Vanguardia",
    "sourceType": "nacional",
    "location": "Catalunya",
    "publishedAt": "2026-09-07",
    "url": "https://www.lavanguardia.com/"
  },
  {
    "id": 20,
    "title": "Els pous de l'Empordà registren els nivells més baixos de la dècada",
    "story": "Sequera i restriccions d'aigua",
    "source": "Diari de Girona",
    "sourceType": "local",
    "location": "Girona",
    "publishedAt": "2026-09-07",
    "url": "https://www.diaridegirona.cat/"
  },
  {
    "id": 21,
    "title": "Setembre arrenca amb temperatures rècord i avís taronja a Ponent",
    "story": "Onada de calor de setembre",
    "source": "TV3 / 3Cat",
    "sourceType": "nacional",
    "location": "Catalunya",
    "publishedAt": "2026-09-06",
    "url": "https://www.3cat.cat/"
  },
  {
    "id": 22,
    "title": "Lleida supera els 40 graus per tercer dia consecutiu",
    "story": "Onada de calor de setembre",
    "source": "Segre",
    "sourceType": "local",
    "location": "Lleida",
    "publishedAt": "2026-09-06",
    "url": "https://www.segre.com/"
  },
  {
    "id": 23,
    "title": "Barcelona activa el pla de refugis climàtics en horari ampliat",
    "story": "Onada de calor de setembre",
    "source": "El Periódico",
    "sourceType": "nacional",
    "location": "Barcelona",
    "publishedAt": "2026-09-05",
    "url": "https://www.elperiodico.com/"
  },
  {
    "id": 24,
    "title": "Les platges del Tarragonès tanquen l'agost més càlid de la sèrie",
    "story": "Onada de calor de setembre",
    "source": "Diari de Tarragona",
    "sourceType": "local",
    "location": "Tarragona",
    "publishedAt": "2026-09-05",
    "url": "https://www.diaridetarragona.com/"
  },
  {
    "id": 25,
    "title": "L'incendi de Sant Fruitós crema 120 hectàrees abans de ser estabilitzat",
    "story": "Incendi forestal al Bages",
    "source": "Regió7",
    "sourceType": "local",
    "location": "Manresa, Bages",
    "publishedAt": "2026-09-04",
    "url": "https://www.regio7.cat/"
  },
  {
    "id": 26,
    "title": "Els Bombers donen per estabilitzat el foc del Bages amb 25 dotacions",
    "story": "Incendi forestal al Bages",
    "source": "ACN",
    "sourceType": "nacional",
    "location": "Bages",
    "publishedAt": "2026-09-04",
    "url": "https://www.acn.cat/"
  },
  {
    "id": 27,
    "title": "El foc del Bages obliga a confinar dues urbanitzacions durant la nit",
    "story": "Incendi forestal al Bages",
    "source": "ARA",
    "sourceType": "nacional",
    "location": "Catalunya",
    "publishedAt": "2026-09-03",
    "url": "https://www.ara.cat/"
  },
  {
    "id": 28,
    "title": "Cobertura del dispositiu d'extinció a Sant Fruitós de Bages",
    "story": "Incendi forestal al Bages",
    "source": "RAC1",
    "sourceType": "nacional",
    "location": "Bages",
    "publishedAt": "2026-09-03",
    "url": "https://www.rac1.cat/"
  },
  {
    "id": 29,
    "title": "El Govern presenta unos presupuestos con un 12% más para vivienda",
    "story": "Pressupostos de la Generalitat 2027",
    "source": "El País",
    "sourceType": "nacional",
    "location": "Catalunya",
    "publishedAt": "2026-09-02",
    "url": "https://elpais.com/espana/catalunya/"
  },
  {
    "id": 30,
    "title": "Els comptes del 2027 destinen 1.400 milions a transport públic",
    "story": "Pressupostos de la Generalitat 2027",
    "source": "El Punt Avui",
    "sourceType": "nacional",
    "location": "Catalunya",
    "publishedAt": "2026-09-02",
    "url": "https://www.elpuntavui.cat/"
  },
  {
    "id": 31,
    "title": "L'oposició avisa que no donarà suport als pressupostos sense inversió en Rodalies",
    "story": "Pressupostos de la Generalitat 2027",
    "source": "Nació Digital",
    "sourceType": "nacional",
    "location": "Catalunya",
    "publishedAt": "2026-09-01",
    "url": "https://www.naciodigital.cat/"
  },
  {
    "id": 32,
    "title": "Anàlisi de les principals partides pressupostàries per al 2027",
    "story": "Pressupostos de la Generalitat 2027",
    "source": "Catalunya Ràdio",
    "sourceType": "nacional",
    "location": "Catalunya",
    "publishedAt": "2026-09-01",
    "url": "https://www.ccma.cat/catradio/"
  },
  {
    "id": 33,
    "title": "El desdoblament de l'R3 arriba a Vic amb dos anys de retard",
    "story": "Ampliació de Rodalies R3",
    "source": "La Vanguardia",
    "sourceType": "nacional",
    "location": "Catalunya",
    "publishedAt": "2026-08-31",
    "url": "https://www.lavanguardia.com/"
  },
  {
    "id": 34,
    "title": "Osona reclama més freqüències a l'R3 un cop acabades les obres",
    "story": "Ampliació de Rodalies R3",
    "source": "El 9 Nou",
    "sourceType": "local",
    "location": "Vic, Osona",
    "publishedAt": "2026-08-31",
    "url": "https://el9nou.cat/"
  },
  {
    "id": 35,
    "title": "Renfe programa 14 trens diaris més a la línia R3 a partir d'octubre",
    "story": "Ampliació de Rodalies R3",
    "source": "ACN",
    "sourceType": "nacional",
    "location": "Catalunya",
    "publishedAt": "2026-08-30",
    "url": "https://www.acn.cat/"
  },
  {
    "id": 36,
    "title": "Les obres de l'R3 encaren l'últim tram entre Centelles i Vic",
    "story": "Ampliació de Rodalies R3",
    "source": "VilaWeb",
    "sourceType": "nacional",
    "location": "Catalunya",
    "publishedAt": "2026-08-30",
    "url": "https://www.vilaweb.cat/"
  },
  {
    "id": 37,
    "title": "El lloguer mitjà a Barcelona se situa en 1.180 euros, un 4% més que fa un any",
    "story": "Preus del lloguer a Barcelona",
    "source": "Betevé",
    "sourceType": "local",
    "location": "Barcelona",
    "publishedAt": "2026-08-29",
    "url": "https://beteve.cat/"
  },
  {
    "id": 38,
    "title": "Els contractes de lloguer cauen un 9% al primer semestre a la ciutat",
    "story": "Preus del lloguer a Barcelona",
    "source": "El Periódico",
    "sourceType": "nacional",
    "location": "Barcelona",
    "publishedAt": "2026-08-29",
    "url": "https://www.elperiodico.com/"
  },
  {
    "id": 39,
    "title": "Sabadell registra el major increment del lloguer del Vallès",
    "story": "Preus del lloguer a Barcelona",
    "source": "Diari de Sabadell",
    "sourceType": "local",
    "location": "Sabadell, Vallès Occidental",
    "publishedAt": "2026-08-29",
    "url": "https://www.diaridesabadell.com/"
  },
  {
    "id": 40,
    "title": "La regulación de precios cumple dos años con resultados desiguales",
    "story": "Preus del lloguer a Barcelona",
    "source": "El País",
    "sourceType": "nacional",
    "location": "Barcelona",
    "publishedAt": "2026-08-28",
    "url": "https://elpais.com/espana/catalunya/"
  },
  {
    "id": 41,
    "title": "Circulen imatges manipulades dels aiguats de la Costa Daurada",
    "story": "Desinformació sobre els aiguats",
    "source": "VilaWeb",
    "sourceType": "nacional",
    "location": "Tarragona",
    "publishedAt": "2026-08-28",
    "url": "https://www.vilaweb.cat/"
  },
  {
    "id": 42,
    "title": "Verificació: les imatges virals atribuïdes a Roda de Berà són antigues",
    "story": "Desinformació sobre els aiguats",
    "source": "3Cat / 3CatInfo",
    "sourceType": "nacional",
    "location": "Catalunya",
    "publishedAt": "2026-08-27",
    "url": "https://www.3cat.cat/"
  },
  {
    "id": 43,
    "title": "Protecció Civil demana no difondre informació no contrastada",
    "story": "Desinformació sobre els aiguats",
    "source": "Diari de Tarragona",
    "sourceType": "local",
    "location": "Tarragona",
    "publishedAt": "2026-08-27",
    "url": "https://www.diaridetarragona.com/"
  },
  {
    "id": 44,
    "title": "El MWC 2027 preveu superar els 100.000 assistents",
    "story": "Mobile World Congress 2027",
    "source": "Betevé",
    "sourceType": "local",
    "location": "Barcelona",
    "publishedAt": "2026-08-26",
    "url": "https://beteve.cat/"
  },
  {
    "id": 45,
    "title": "Fira de Barcelona amplia el recinte de Gran Via per al MWC",
    "story": "Mobile World Congress 2027",
    "source": "La Vanguardia",
    "sourceType": "nacional",
    "location": "Barcelona",
    "publishedAt": "2026-08-26",
    "url": "https://www.lavanguardia.com/"
  },
  {
    "id": 46,
    "title": "Empreses del Vallès preparen la seva presència al MWC",
    "story": "Mobile World Congress 2027",
    "source": "Diari de Terrassa",
    "sourceType": "local",
    "location": "Terrassa, Vallès Occidental",
    "publishedAt": "2026-08-25",
    "url": "https://www.diarideterrassa.es/"
  }
];
