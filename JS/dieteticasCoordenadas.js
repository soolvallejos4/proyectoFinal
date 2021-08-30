//La variable diet va a estar conectada con el archivo leaflets.js
let diet = [
  [
      -34.62010988097318,
      -58.44162956027965,
      `Nombre: Dietetica Rojas.`,
      `Dirección: Rojas 12, CABA.`,
      `Teléfono: +54 11-4902-9975`
  ],

  [
      -34.63291833037018,
      -58.44931857381396,
      "Nombre: Gran Dietética",
      "Dirección: Curapaligüe 770,CABA",
      "Teléfono: +54 9 11-6954-1126 "

  ],
  [
      -34.63273700244979,
      -58.48112444499763,
      "Nombre: Dietetica La Floresta",
      "Dirección: Av. Rivadavia 8357, CABA",
      "Teléfono: +54 011 46721979"
  ],
  [
      -34.59987494835027,
      -58.379010916144715,
      "Nombre: Dietética Viamonte",
      "Dirección: Viamonte 859, C1053 CABA",
      "Teléfono: +54 11-4322-9380",
  ],
  [
      -34.63071596048988,
      -58.469109490719035,
      "Nombre: Dietéticas Tomy",
      "Dirección: Av. Rivadavia 7390,CABA",
      "Teléfono: Sin información",
  ],
  //Zona Norte
  [
      -34.536104175010855,
      -58.477015513409086,
      "Nombre: Dietéticas Tomi",
      "Dirección: Av. Maipú 201, Vicente López",
      "Teléfono: 011 4719-7600",
  ],
  [-34.50582366843237,
  -58.493164431243976,
      "Nombre: Dietética Señor Sol",
      "Dirección: Av. Maipú 3239, Vicente López",
      "Teléfono: 011 4799-5548",
  ],
  [-34.508288143631255,
  -58.481228602020444,
      "Nombre: Nutralgica",
      "Dirección: Corrientes 681, Olivos",
      "Teléfono: 011 4711-3909",
  ],
  [
      -34.51566124116742,
      -58.542769204014036,
      "Nombre: La nueva Dietética",
      "Dirección: Av. de Mayo 893, zona norte",
      "Teléfono: 011 6459-9574",
  ],
  [
      -34.47129788767244,
      -58.5157251612748,
      "Nombre: Sanas Delícias",
      "Dirección: Av. Centenario 416, San Isidro",
      "Teléfono: 011 4732-0916"
  ],
  [
      -34.48865072077361,
      -58.498272699250805,
      "Nombre: Dietética Arenales",
      "Dirección: Arenales 2040, Martínez",
      "Teléfono: 011 4798-2087"],
  // [

  //     "Nombre: ",
  //     "Dirección: ",
  //     "Teléfono:"
  // ],
  //agregar aca si quiero de zona Norte

  //Comienzo Zona Oeste
  [
      -34.62714924220614,
      -58.78571889842443,
      "Nombre: Dietética Nomadas",
      "Dirección: Marcos de Bueno 530, Moreno",
      "Teléfono Sin información:"
  ],
  [
      -34.65138345157452,
      -58.79205808256709,
      "Nombre: Dietética Pepita y Sesamo",
      "Dirección: Claudio María Joly 2888, Moreno",
      "Teléfono: 011 4144-9016"
  ],
  [-34.59320529146491,
  -58.63638496544457,
      "Nombre: Buen día, día",
      "Dirección: Av. Gdor. Vergara 4088, Hurlingham",
      "Teléfono: 011 3765-8244"
  ],
  [
      -34.603496068124215,
      -58.63517582556727,
      "Nombre: Dietética La Aldea",
      "Dirección: Av. Gdor. Vergara 3223",
      "Teléfono: 011 7395-5997"
  ],
  [
      -34.67585860490331,
      -58.56399582804794,
      "Nombre: Dietética La Mezcla",
      "Dirección: Av. Pres. Dr. Arturo Umberto Illia 2494, San Justo",
      "Teléfono: 011 4441-2185"],
  [
      -34.699798846150664,
      -58.591731249938874,
      "Nombre: Fuerza Natural Dietética",
      "Dirección: República de Portugal 2450, Isidro Casanova",
      "Teléfono: Sin información"
  ],
  // [
  //     "Nombre: ",
  //     "Dirección: ",
  //     "Teléfono:"
  // ],
  //Fin zona Oeste
  //Comienzo Zona Sur
  [
      -34.82211002533352,
      -58.2769296259346,
      "Nombre: Dietética Lola",
      "Dirección: Av. Eva Perón 4430, Florencio Varela",
      "Teléfono: 011 5976-9922"],
  [
      -34.717307041006464,
      -58.33315104414564,
      "Nombre: Alimnat",
      "Dirección: Fabián Onsari 1481, Wilde",
      "Teléfono: 011 3874-4352"],
  [
      -34.852591747241384,
      -58.52059744740566, 
      "Nombre: Almacén Conciente",
      "Dirección: Av. Conquista del desierto 127, Ezeiza",
      "Teléfono: Sin información"],
  [
      -34.771034254407574,
      -58.22652304555185,
      "Nombre: La Naturaleza Dietética & Herborista",
      "Dirección: Av. 14 3161, Berazategui",
      "Teléfono: 011 4226-8833"],
  [
      -34.72658704606302,
      -58.24994458593026,
      "Nombre: Dietética El Ceibo",
      "Dirección: Av. Mitre 984, Quilmes",
      "Teléfono: 011 4224-8469"],
//   [
//       ,
//       ,
//       "Nombre: ",
//       "Dirección: ",
//       "Teléfono: "],
  // ["Nombre: ",
  //     "Dirección: ",
  //     "Teléfono:"],
  // ["Nombre: ",
  //     "Dirección: ",
  //     "Teléfono:"],
  // ["Nombre: ",
  //     "Dirección: ",
  //     "Teléfono:"],
  // ["Nombre: ",
  //     "Dirección: ",
  //     "Teléfono:"],



]
