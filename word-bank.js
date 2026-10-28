// Catálogo editorial de palabras completas. No se generan términos combinando
// listas de raíces: cada entrada contiene la segmentación y el sentido que le
// corresponden a esa palabra concreta.
window.createWordBank = () => {
  const words = [
    { word: "telemetría", definition: "Medición a distancia de magnitudes físicas.", parts: [{ text: "tele", meaning: "lejos, a distancia", origin: "griego", original: "τῆλε" }, { text: "metría", meaning: "medida", origin: "griego", original: "μετρία" }] },
    { word: "microscopio", definition: "Instrumento que permite observar objetos demasiado pequeños para verse a simple vista.", parts: [{ text: "micro", meaning: "pequeño", origin: "griego", original: "μικρός" }, { text: "scopio", meaning: "observar", origin: "griego", original: "σκοπεῖν" }] },
    { word: "biblioteca", definition: "Lugar o colección organizada de libros.", parts: [{ text: "biblio", meaning: "libro", origin: "griego", original: "βιβλίον" }, { text: "teca", meaning: "depósito, caja", origin: "griego", original: "θήκη" }] },
    { word: "aeropuerto", definition: "Terreno destinado al despegue y aterrizaje de aeronaves.", parts: [{ text: "aero", meaning: "aire", origin: "griego", original: "ἀήρ" }, { text: "puerto", meaning: "paso, entrada", origin: "latín", original: "portus" }] },

    { word: "filófago", definition: "Dicho de un animal: que se alimenta de hojas.", parts: [{ text: "filo", display: "filó", meaning: "hoja", origin: "griego", original: "φύλλον" }, { text: "fago", meaning: "que come", origin: "griego", original: "φαγεῖν" }] },
    { word: "fitófago", definition: "Dicho de un animal: que se alimenta de vegetales.", parts: [{ text: "fito", display: "fitó", meaning: "planta", origin: "griego", original: "φυτόν" }, { text: "fago", meaning: "que come", origin: "griego", original: "φαγεῖν" }] },
    { word: "xilófago", definition: "Dicho de un animal: que se alimenta de madera.", parts: [{ text: "xilo", display: "xiló", meaning: "madera", origin: "griego", original: "ξύλον" }, { text: "fago", meaning: "que come", origin: "griego", original: "φαγεῖν" }] },
    { word: "ictiófago", definition: "Dicho de un animal: que se alimenta de peces.", parts: [{ text: "ictio", display: "ictió", meaning: "pez", origin: "griego", original: "ἰχθύς" }, { text: "fago", meaning: "que come", origin: "griego", original: "φαγεῖν" }] },
    { word: "antropófago", definition: "Que se alimenta de carne humana.", parts: [{ text: "antropo", display: "antropó", meaning: "ser humano", origin: "griego", original: "ἄνθρωπος" }, { text: "fago", meaning: "que come", origin: "griego", original: "φαγεῖν" }] },
    { word: "bacteriófago", definition: "Virus que infecta y destruye bacterias.", parts: [{ text: "bacterio", display: "bacterió", meaning: "bacteria", origin: "griego", original: "βακτηρία" }, { text: "fago", meaning: "que come", origin: "griego", original: "φαγεῖν" }] },
    { word: "galactófago", definition: "Que se alimenta de leche.", parts: [{ text: "galacto", display: "galactó", meaning: "leche", origin: "griego", original: "γάλα" }, { text: "fago", meaning: "que come", origin: "griego", original: "φαγεῖν" }] },
    { word: "necrófago", definition: "Que se alimenta de cadáveres.", parts: [{ text: "necro", display: "necró", meaning: "cadáver, muerto", origin: "griego", original: "νεκρός" }, { text: "fago", meaning: "que come", origin: "griego", original: "φαγεῖν" }] },
    { word: "sarcófago", definition: "Sepulcro, especialmente el construido en piedra.", parts: [{ text: "sarco", display: "sarcó", meaning: "carne", origin: "griego", original: "σάρξ" }, { text: "fago", meaning: "que come", origin: "griego", original: "φαγεῖν" }] },
    { word: "macrófago", definition: "Célula que captura y digiere partículas extrañas y restos celulares.", parts: [{ text: "macro", display: "macró", meaning: "grande", origin: "griego", original: "μακρός" }, { text: "fago", meaning: "que come", origin: "griego", original: "φαγεῖν" }] },

    { word: "filología", definition: "Ciencia que estudia una lengua y sus textos.", parts: [{ text: "filo", meaning: "amor, afinidad", origin: "griego", original: "φίλος" }, { text: "logía", meaning: "estudio, tratado", origin: "griego", original: "λογία" }] },
    { word: "filósofo", definition: "Persona que busca la sabiduría o se dedica a la filosofía.", parts: [{ text: "filo", display: "filó", meaning: "amor, afinidad", origin: "griego", original: "φίλος" }, { text: "sofo", meaning: "sabiduría", origin: "griego", original: "σοφία" }] },
    { word: "geografía", definition: "Ciencia que estudia la Tierra y su superficie.", parts: [{ text: "geo", meaning: "tierra", origin: "griego", original: "γῆ" }, { text: "grafía", meaning: "descripción, representación escrita", origin: "griego", original: "γραφία" }] },
    { word: "fotografía", definition: "Técnica de obtener imágenes mediante la acción de la luz.", parts: [{ text: "foto", meaning: "luz", origin: "griego", original: "φῶς" }, { text: "grafía", meaning: "escritura, representación", origin: "griego", original: "γραφία" }] },
    { word: "cartografía", definition: "Arte y ciencia de trazar mapas.", parts: [{ text: "carto", meaning: "mapa", origin: "griego", original: "χάρτης" }, { text: "grafía", meaning: "escritura, representación", origin: "griego", original: "γραφία" }] },
    { word: "biografía", definition: "Historia de la vida de una persona.", parts: [{ text: "bio", meaning: "vida", origin: "griego", original: "βίος" }, { text: "grafía", meaning: "escritura, descripción", origin: "griego", original: "γραφία" }] },
    { word: "bibliografía", definition: "Relación ordenada de libros u otros documentos sobre un asunto.", parts: [{ text: "biblio", meaning: "libro", origin: "griego", original: "βιβλίον" }, { text: "grafía", meaning: "escritura, descripción", origin: "griego", original: "γραφία" }] },
    { word: "topografía", definition: "Conjunto de técnicas para describir y representar un terreno.", parts: [{ text: "topo", meaning: "lugar", origin: "griego", original: "τόπος" }, { text: "grafía", meaning: "descripción, representación", origin: "griego", original: "γραφία" }] },
    { word: "etnografía", definition: "Estudio descriptivo de un pueblo o de sus costumbres.", parts: [{ text: "etno", meaning: "pueblo, grupo", origin: "griego", original: "ἔθνος" }, { text: "grafía", meaning: "descripción, representación", origin: "griego", original: "γραφία" }] },
    { word: "lexicografía", definition: "Técnica de componer diccionarios.", parts: [{ text: "lexico", meaning: "palabra", origin: "griego", original: "λέξις" }, { text: "grafía", meaning: "escritura, descripción", origin: "griego", original: "γραφία" }] },
    { word: "hidrografía", definition: "Estudio y descripción de las aguas de una región.", parts: [{ text: "hidro", meaning: "agua", origin: "griego", original: "ὕδωρ" }, { text: "grafía", meaning: "descripción, representación", origin: "griego", original: "γραφία" }] },

    { word: "cronómetro", definition: "Reloj de gran precisión para medir intervalos de tiempo.", parts: [{ text: "crono", meaning: "tiempo", origin: "griego", original: "χρόνος" }, { text: "metro", meaning: "medida", origin: "griego", original: "μέτρον" }] },
    { word: "termómetro", definition: "Instrumento para medir la temperatura.", parts: [{ text: "termo", meaning: "calor", origin: "griego", original: "θέρμη" }, { text: "metro", meaning: "medida", origin: "griego", original: "μέτρον" }] },
    { word: "barómetro", definition: "Instrumento que mide la presión atmosférica.", parts: [{ text: "baro", meaning: "peso, presión", origin: "griego", original: "βάρος" }, { text: "metro", meaning: "medida", origin: "griego", original: "μέτρον" }] },
    { word: "hidrómetro", definition: "Instrumento que mide la densidad de los líquidos.", parts: [{ text: "hidro", display: "hidró", meaning: "agua", origin: "griego", original: "ὕδωρ" }, { text: "metro", meaning: "medida", origin: "griego", original: "μέτρον" }] },
    { word: "telescopio", definition: "Instrumento óptico para observar objetos muy lejanos.", parts: [{ text: "tele", meaning: "lejos, a distancia", origin: "griego", original: "τῆλε" }, { text: "scopio", meaning: "observar", origin: "griego", original: "σκοπεῖν" }] },
    { word: "endoscopio", definition: "Instrumento para explorar el interior del cuerpo.", parts: [{ text: "endo", meaning: "dentro", origin: "griego", original: "ἔνδον" }, { text: "scopio", meaning: "observar", origin: "griego", original: "σκοπεῖν" }] },
    { word: "periscopio", definition: "Instrumento óptico para observar desde una posición oculta.", parts: [{ text: "peri", meaning: "alrededor", origin: "griego", original: "περί" }, { text: "scopio", meaning: "observar", origin: "griego", original: "σκοπεῖν" }] },
    { word: "teléfono", definition: "Aparato para transmitir sonidos a distancia.", parts: [{ text: "tele", display: "telé", meaning: "lejos, a distancia", origin: "griego", original: "τῆλε" }, { text: "fono", meaning: "sonido, voz", origin: "griego", original: "φωνή" }] },
    { word: "fonógrafo", definition: "Aparato que registra y reproduce sonidos.", parts: [{ text: "fono", display: "fonó", meaning: "sonido, voz", origin: "griego", original: "φωνή" }, { text: "grafo", meaning: "que escribe o registra", origin: "griego", original: "γράφειν" }] },
    { word: "xilófono", definition: "Instrumento musical de láminas de madera que se golpean.", parts: [{ text: "xilo", display: "xiló", meaning: "madera", origin: "griego", original: "ξύλον" }, { text: "fono", meaning: "sonido, voz", origin: "griego", original: "φωνή" }] },

    { word: "democracia", definition: "Sistema político en el que el poder reside en el pueblo.", parts: [{ text: "demo", meaning: "pueblo", origin: "griego", original: "δῆμος" }, { text: "cracia", meaning: "poder, gobierno", origin: "griego", original: "κράτος" }] },
    { word: "aristocracia", definition: "Gobierno ejercido por una minoría considerada la mejor o más distinguida.", parts: [{ text: "aristo", meaning: "mejor, excelente", origin: "griego", original: "ἄριστος" }, { text: "cracia", meaning: "poder, gobierno", origin: "griego", original: "κράτος" }] },
    { word: "teocracia", definition: "Gobierno ejercido en nombre de una divinidad.", parts: [{ text: "teo", meaning: "dios", origin: "griego", original: "θεός" }, { text: "cracia", meaning: "poder, gobierno", origin: "griego", original: "κράτος" }] },
    { word: "cosmopolita", definition: "Persona que considera todos los países como patria suya.", parts: [{ text: "cosmo", meaning: "mundo, universo", origin: "griego", original: "κόσμος" }, { text: "polita", meaning: "ciudadano", origin: "griego", original: "πολίτης" }] },
    { word: "astronomía", definition: "Ciencia que estudia los astros.", parts: [{ text: "astro", meaning: "estrella, astro", origin: "griego", original: "ἄστρον" }, { text: "nomía", meaning: "orden, ley", origin: "griego", original: "νομία" }] },
    { word: "gastronomía", definition: "Arte de preparar una buena comida.", parts: [{ text: "gastro", meaning: "estómago", origin: "griego", original: "γαστήρ" }, { text: "nomía", meaning: "orden, norma", origin: "griego", original: "νομία" }] },
    { word: "economía", definition: "Administración ordenada de los bienes y recursos.", parts: [{ text: "eco", meaning: "casa, hogar", origin: "griego", original: "οἶκος" }, { text: "nomía", meaning: "administración, norma", origin: "griego", original: "νομία" }] },

    { word: "ecología", definition: "Ciencia que estudia las relaciones de los seres vivos con su entorno.", parts: [{ text: "eco", meaning: "casa, entorno", origin: "griego", original: "οἶκος" }, { text: "logía", meaning: "estudio, tratado", origin: "griego", original: "λογία" }] },
    { word: "zoología", definition: "Ciencia que estudia los animales.", parts: [{ text: "zoo", meaning: "animal", origin: "griego", original: "ζῷον" }, { text: "logía", meaning: "estudio, tratado", origin: "griego", original: "λογία" }] },
    { word: "ornitología", definition: "Ciencia que estudia las aves.", parts: [{ text: "ornito", meaning: "ave", origin: "griego", original: "ὄρνις" }, { text: "logía", meaning: "estudio, tratado", origin: "griego", original: "λογία" }] },
    { word: "entomología", definition: "Ciencia que estudia los insectos.", parts: [{ text: "entomo", meaning: "insecto", origin: "griego", original: "ἔντομον" }, { text: "logía", meaning: "estudio, tratado", origin: "griego", original: "λογία" }] },
    { word: "dermatología", definition: "Rama de la medicina que estudia la piel.", parts: [{ text: "dermato", meaning: "piel", origin: "griego", original: "δέρμα" }, { text: "logía", meaning: "estudio, tratado", origin: "griego", original: "λογία" }] },
    { word: "neurología", definition: "Rama de la medicina que estudia el sistema nervioso.", parts: [{ text: "neuro", meaning: "nervio", origin: "griego", original: "νεῦρον" }, { text: "logía", meaning: "estudio, tratado", origin: "griego", original: "λογία" }] },
    { word: "cardiología", definition: "Rama de la medicina que estudia el corazón.", parts: [{ text: "cardio", meaning: "corazón", origin: "griego", original: "καρδία" }, { text: "logía", meaning: "estudio, tratado", origin: "griego", original: "λογία" }] },
    { word: "odontología", definition: "Rama de la medicina que estudia los dientes y su tratamiento.", parts: [{ text: "odonto", meaning: "diente", origin: "griego", original: "ὀδούς" }, { text: "logía", meaning: "estudio, tratado", origin: "griego", original: "λογία" }] },
    { word: "toxicología", definition: "Ciencia que estudia los venenos y sus efectos.", parts: [{ text: "toxico", meaning: "veneno", origin: "griego", original: "τοξικόν" }, { text: "logía", meaning: "estudio, tratado", origin: "griego", original: "λογία" }] },
    { word: "arqueología", definition: "Ciencia que estudia las sociedades del pasado por sus restos materiales.", parts: [{ text: "arqueo", meaning: "antiguo", origin: "griego", original: "ἀρχαῖος" }, { text: "logía", meaning: "estudio, tratado", origin: "griego", original: "λογία" }] },
    { word: "morfología", definition: "Estudio de la forma y estructura de los seres vivos o de las palabras.", parts: [{ text: "morfo", meaning: "forma", origin: "griego", original: "μορφή" }, { text: "logía", meaning: "estudio, tratado", origin: "griego", original: "λογία" }] },
    { word: "psicología", definition: "Ciencia que estudia la mente y el comportamiento.", parts: [{ text: "psico", meaning: "mente, alma", origin: "griego", original: "ψυχή" }, { text: "logía", meaning: "estudio, tratado", origin: "griego", original: "λογία" }] },

    { word: "carnívoro", definition: "Que se alimenta principalmente de carne.", parts: [{ text: "carni", display: "carní", meaning: "carne", origin: "latín", original: "caro, carnis" }, { text: "voro", meaning: "que devora, que come", origin: "latín", original: "vorare" }] },
    { word: "herbívoro", definition: "Que se alimenta de hierbas o plantas.", parts: [{ text: "herbi", display: "herbí", meaning: "hierba", origin: "latín", original: "herba" }, { text: "voro", meaning: "que devora, que come", origin: "latín", original: "vorare" }] },
    { word: "omnívoro", definition: "Que se alimenta de toda clase de sustancias orgánicas.", parts: [{ text: "omni", display: "omní", meaning: "todo", origin: "latín", original: "omnis" }, { text: "voro", meaning: "que devora, que come", origin: "latín", original: "vorare" }] },
    { word: "insectívoro", definition: "Que se alimenta de insectos.", parts: [{ text: "insecti", display: "insectí", meaning: "insecto", origin: "latín", original: "insectum" }, { text: "voro", meaning: "que devora, que come", origin: "latín", original: "vorare" }] },
    { word: "acuífero", definition: "Que contiene o conduce agua.", parts: [{ text: "acui", display: "acuí", meaning: "agua", origin: "latín", original: "aqua" }, { text: "fero", meaning: "que lleva", origin: "latín", original: "ferre" }] },
    { word: "fructífero", definition: "Que produce fruto.", parts: [{ text: "fructi", display: "fructí", meaning: "fruto", origin: "latín", original: "fructus" }, { text: "fero", meaning: "que lleva, que produce", origin: "latín", original: "ferre" }] }
  ];

  // Entradas individuales del catálogo. Se almacenan como palabras ya formadas:
  // no existe ninguna regla que construya términos durante la ejecución.
  const supplementalWords = [
  {
    "word": "aerología",
    "definition": "Estudio de el aire.",
    "parts": [
      {
        "text": "aero",
        "meaning": "aire",
        "origin": "griego",
        "original": "ἀήρ"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "aerografía",
    "definition": "Representación o descripción de el aire.",
    "parts": [
      {
        "text": "aero",
        "meaning": "aire",
        "origin": "griego",
        "original": "ἀήρ"
      },
      {
        "text": "grafía",
        "meaning": "escritura, representación",
        "origin": "griego",
        "original": "γραφία"
      }
    ]
  },
  {
    "word": "aerofobia",
    "definition": "Miedo o aversión relacionado con el aire.",
    "parts": [
      {
        "text": "aero",
        "meaning": "aire",
        "origin": "griego",
        "original": "ἀήρ"
      },
      {
        "text": "fobia",
        "meaning": "miedo, aversión",
        "origin": "griego",
        "original": "φοβία"
      }
    ]
  },
  {
    "word": "aeroterapia",
    "definition": "Tratamiento relacionado con el aire.",
    "parts": [
      {
        "text": "aero",
        "meaning": "aire",
        "origin": "griego",
        "original": "ἀήρ"
      },
      {
        "text": "terapia",
        "meaning": "tratamiento",
        "origin": "griego",
        "original": "θεραπεία"
      }
    ]
  },
  {
    "word": "aeromancia",
    "definition": "Adivinación relacionada con el aire.",
    "parts": [
      {
        "text": "aero",
        "meaning": "aire",
        "origin": "griego",
        "original": "ἀήρ"
      },
      {
        "text": "mancia",
        "meaning": "adivinación",
        "origin": "griego",
        "original": "μαντεία"
      }
    ]
  },
  {
    "word": "aerotecnia",
    "definition": "Técnica relacionada con el aire.",
    "parts": [
      {
        "text": "aero",
        "meaning": "aire",
        "origin": "griego",
        "original": "ἀήρ"
      },
      {
        "text": "tecnia",
        "meaning": "técnica, arte",
        "origin": "griego",
        "original": "τέχνη"
      }
    ]
  },
  {
    "word": "aerógrafo",
    "definition": "Persona o instrumento que representa el aire.",
    "parts": [
      {
        "text": "aeró",
        "meaning": "aire",
        "origin": "griego",
        "original": "ἀήρ"
      },
      {
        "text": "grafo",
        "meaning": "escritor o trazador",
        "origin": "griego",
        "original": "γράφειν"
      }
    ]
  },
  {
    "word": "aerómetro",
    "definition": "Medida de el aire.",
    "parts": [
      {
        "text": "aeró",
        "meaning": "aire",
        "origin": "griego",
        "original": "ἀήρ"
      },
      {
        "text": "metro",
        "meaning": "medida",
        "origin": "griego",
        "original": "μέτρον"
      }
    ]
  },
  {
    "word": "aeródromo",
    "definition": "Recorrido relacionado con el aire.",
    "parts": [
      {
        "text": "aeró",
        "meaning": "aire",
        "origin": "griego",
        "original": "ἀήρ"
      },
      {
        "text": "dromo",
        "meaning": "carrera, recorrido",
        "origin": "griego",
        "original": "δρόμος"
      }
    ]
  },
  {
    "word": "aerófono",
    "definition": "Sonido relacionado con el aire.",
    "parts": [
      {
        "text": "aeró",
        "meaning": "aire",
        "origin": "griego",
        "original": "ἀήρ"
      },
      {
        "text": "fono",
        "meaning": "sonido",
        "origin": "griego",
        "original": "φωνή"
      }
    ]
  },
  {
    "word": "agrología",
    "definition": "Estudio de el campo.",
    "parts": [
      {
        "text": "agro",
        "meaning": "campo",
        "origin": "griego",
        "original": "ἀγρός"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "agronomía",
    "definition": "Conocimiento o sistema aplicado a el campo.",
    "parts": [
      {
        "text": "agro",
        "meaning": "campo",
        "origin": "griego",
        "original": "ἀγρός"
      },
      {
        "text": "nomía",
        "meaning": "norma, orden",
        "origin": "griego",
        "original": "νομία"
      }
    ]
  },
  {
    "word": "antropología",
    "definition": "Estudio de el ser humano.",
    "parts": [
      {
        "text": "antropo",
        "meaning": "ser humano",
        "origin": "griego",
        "original": "ἄνθρωπος"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "antropografía",
    "definition": "Representación o descripción de el ser humano.",
    "parts": [
      {
        "text": "antropo",
        "meaning": "ser humano",
        "origin": "griego",
        "original": "ἄνθρωπος"
      },
      {
        "text": "grafía",
        "meaning": "escritura, representación",
        "origin": "griego",
        "original": "γραφία"
      }
    ]
  },
  {
    "word": "antropometría",
    "definition": "Medición relacionada con el ser humano.",
    "parts": [
      {
        "text": "antropo",
        "meaning": "ser humano",
        "origin": "griego",
        "original": "ἄνθρωπος"
      },
      {
        "text": "metría",
        "meaning": "medida",
        "origin": "griego",
        "original": "μετρία"
      }
    ]
  },
  {
    "word": "antropogénesis",
    "definition": "Formación de el ser humano.",
    "parts": [
      {
        "text": "antropo",
        "meaning": "ser humano",
        "origin": "griego",
        "original": "ἄνθρωπος"
      },
      {
        "text": "génesis",
        "meaning": "origen, formación",
        "origin": "griego",
        "original": "γένεσις"
      }
    ]
  },
  {
    "word": "antropólogo",
    "definition": "Especialista en el ser humano.",
    "parts": [
      {
        "text": "antropó",
        "meaning": "ser humano",
        "origin": "griego",
        "original": "ἄνθρωπος"
      },
      {
        "text": "logo",
        "meaning": "especialista",
        "origin": "griego",
        "original": "λόγος"
      }
    ]
  },
  {
    "word": "astrología",
    "definition": "Estudio de los astros.",
    "parts": [
      {
        "text": "astro",
        "meaning": "estrella",
        "origin": "griego",
        "original": "ἄστρον"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "astrografía",
    "definition": "Representación o descripción de los astros.",
    "parts": [
      {
        "text": "astro",
        "meaning": "estrella",
        "origin": "griego",
        "original": "ἄστρον"
      },
      {
        "text": "grafía",
        "meaning": "escritura, representación",
        "origin": "griego",
        "original": "γραφία"
      }
    ]
  },
  {
    "word": "astrógrafo",
    "definition": "Persona o instrumento que representa los astros.",
    "parts": [
      {
        "text": "astró",
        "meaning": "estrella",
        "origin": "griego",
        "original": "ἄστρον"
      },
      {
        "text": "grafo",
        "meaning": "escritor o trazador",
        "origin": "griego",
        "original": "γράφειν"
      }
    ]
  },
  {
    "word": "astrólogo",
    "definition": "Especialista en los astros.",
    "parts": [
      {
        "text": "astró",
        "meaning": "estrella",
        "origin": "griego",
        "original": "ἄστρον"
      },
      {
        "text": "logo",
        "meaning": "especialista",
        "origin": "griego",
        "original": "λόγος"
      }
    ]
  },
  {
    "word": "autografía",
    "definition": "Representación o descripción de uno mismo.",
    "parts": [
      {
        "text": "auto",
        "meaning": "uno mismo",
        "origin": "griego",
        "original": "αὐτός"
      },
      {
        "text": "grafía",
        "meaning": "escritura, representación",
        "origin": "griego",
        "original": "γραφία"
      }
    ]
  },
  {
    "word": "autonomía",
    "definition": "Conocimiento o sistema aplicado a uno mismo.",
    "parts": [
      {
        "text": "auto",
        "meaning": "uno mismo",
        "origin": "griego",
        "original": "αὐτός"
      },
      {
        "text": "nomía",
        "meaning": "norma, orden",
        "origin": "griego",
        "original": "νομία"
      }
    ]
  },
  {
    "word": "autocracia",
    "definition": "Sistema de poder relacionado con uno mismo.",
    "parts": [
      {
        "text": "auto",
        "meaning": "uno mismo",
        "origin": "griego",
        "original": "αὐτός"
      },
      {
        "text": "cracia",
        "meaning": "poder, gobierno",
        "origin": "griego",
        "original": "κράτος"
      }
    ]
  },
  {
    "word": "bibliología",
    "definition": "Estudio de los libros.",
    "parts": [
      {
        "text": "biblio",
        "meaning": "libro",
        "origin": "griego",
        "original": "βιβλίον"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "bibliofilia",
    "definition": "Afinidad o interés por los libros.",
    "parts": [
      {
        "text": "biblio",
        "meaning": "libro",
        "origin": "griego",
        "original": "βιβλίον"
      },
      {
        "text": "filia",
        "meaning": "afinidad, amor",
        "origin": "griego",
        "original": "φιλία"
      }
    ]
  },
  {
    "word": "bibliomancia",
    "definition": "Adivinación relacionada con los libros.",
    "parts": [
      {
        "text": "biblio",
        "meaning": "libro",
        "origin": "griego",
        "original": "βιβλίον"
      },
      {
        "text": "mancia",
        "meaning": "adivinación",
        "origin": "griego",
        "original": "μαντεία"
      }
    ]
  },
  {
    "word": "bibliógrafo",
    "definition": "Persona o instrumento que representa los libros.",
    "parts": [
      {
        "text": "biblió",
        "meaning": "libro",
        "origin": "griego",
        "original": "βιβλίον"
      },
      {
        "text": "grafo",
        "meaning": "escritor o trazador",
        "origin": "griego",
        "original": "γράφειν"
      }
    ]
  },
  {
    "word": "bibliófilo",
    "definition": "Con afinidad por los libros.",
    "parts": [
      {
        "text": "biblió",
        "meaning": "libro",
        "origin": "griego",
        "original": "βιβλίον"
      },
      {
        "text": "filo",
        "meaning": "afinidad",
        "origin": "griego",
        "original": "φίλος"
      }
    ]
  },
  {
    "word": "biología",
    "definition": "Estudio de la vida.",
    "parts": [
      {
        "text": "bio",
        "meaning": "vida",
        "origin": "griego",
        "original": "βίος"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "biometría",
    "definition": "Medición relacionada con la vida.",
    "parts": [
      {
        "text": "bio",
        "meaning": "vida",
        "origin": "griego",
        "original": "βίος"
      },
      {
        "text": "metría",
        "meaning": "medida",
        "origin": "griego",
        "original": "μετρία"
      }
    ]
  },
  {
    "word": "bioterapia",
    "definition": "Tratamiento relacionado con la vida.",
    "parts": [
      {
        "text": "bio",
        "meaning": "vida",
        "origin": "griego",
        "original": "βίος"
      },
      {
        "text": "terapia",
        "meaning": "tratamiento",
        "origin": "griego",
        "original": "θεραπεία"
      }
    ]
  },
  {
    "word": "biogénesis",
    "definition": "Formación de la vida.",
    "parts": [
      {
        "text": "bio",
        "meaning": "vida",
        "origin": "griego",
        "original": "βίος"
      },
      {
        "text": "génesis",
        "meaning": "origen, formación",
        "origin": "griego",
        "original": "γένεσις"
      }
    ]
  },
  {
    "word": "cardiografía",
    "definition": "Representación o descripción de el corazón.",
    "parts": [
      {
        "text": "cardio",
        "meaning": "corazón",
        "origin": "griego",
        "original": "καρδία"
      },
      {
        "text": "grafía",
        "meaning": "escritura, representación",
        "origin": "griego",
        "original": "γραφία"
      }
    ]
  },
  {
    "word": "cardiopatía",
    "definition": "Afección relacionada con el corazón.",
    "parts": [
      {
        "text": "cardio",
        "meaning": "corazón",
        "origin": "griego",
        "original": "καρδία"
      },
      {
        "text": "patía",
        "meaning": "afección, padecimiento",
        "origin": "griego",
        "original": "πάθεια"
      }
    ]
  },
  {
    "word": "cardiógrafo",
    "definition": "Persona o instrumento que representa el corazón.",
    "parts": [
      {
        "text": "cardió",
        "meaning": "corazón",
        "origin": "griego",
        "original": "καρδία"
      },
      {
        "text": "grafo",
        "meaning": "escritor o trazador",
        "origin": "griego",
        "original": "γράφειν"
      }
    ]
  },
  {
    "word": "cardiólogo",
    "definition": "Especialista en el corazón.",
    "parts": [
      {
        "text": "cardió",
        "meaning": "corazón",
        "origin": "griego",
        "original": "καρδία"
      },
      {
        "text": "logo",
        "meaning": "especialista",
        "origin": "griego",
        "original": "λόγος"
      }
    ]
  },
  {
    "word": "citología",
    "definition": "Estudio de las células.",
    "parts": [
      {
        "text": "cito",
        "meaning": "célula",
        "origin": "griego",
        "original": "κύτος"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "citólogo",
    "definition": "Especialista en las células.",
    "parts": [
      {
        "text": "citó",
        "meaning": "célula",
        "origin": "griego",
        "original": "κύτος"
      },
      {
        "text": "logo",
        "meaning": "especialista",
        "origin": "griego",
        "original": "λόγος"
      }
    ]
  },
  {
    "word": "citófono",
    "definition": "Sonido relacionado con las células.",
    "parts": [
      {
        "text": "citó",
        "meaning": "célula",
        "origin": "griego",
        "original": "κύτος"
      },
      {
        "text": "fono",
        "meaning": "sonido",
        "origin": "griego",
        "original": "φωνή"
      }
    ]
  },
  {
    "word": "cronología",
    "definition": "Estudio de el tiempo.",
    "parts": [
      {
        "text": "crono",
        "meaning": "tiempo",
        "origin": "griego",
        "original": "χρόνος"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "cronografía",
    "definition": "Representación o descripción de el tiempo.",
    "parts": [
      {
        "text": "crono",
        "meaning": "tiempo",
        "origin": "griego",
        "original": "χρόνος"
      },
      {
        "text": "grafía",
        "meaning": "escritura, representación",
        "origin": "griego",
        "original": "γραφία"
      }
    ]
  },
  {
    "word": "cronometría",
    "definition": "Medición relacionada con el tiempo.",
    "parts": [
      {
        "text": "crono",
        "meaning": "tiempo",
        "origin": "griego",
        "original": "χρόνος"
      },
      {
        "text": "metría",
        "meaning": "medida",
        "origin": "griego",
        "original": "μετρία"
      }
    ]
  },
  {
    "word": "cronógrafo",
    "definition": "Persona o instrumento que representa el tiempo.",
    "parts": [
      {
        "text": "cronó",
        "meaning": "tiempo",
        "origin": "griego",
        "original": "χρόνος"
      },
      {
        "text": "grafo",
        "meaning": "escritor o trazador",
        "origin": "griego",
        "original": "γράφειν"
      }
    ]
  },
  {
    "word": "cronólogo",
    "definition": "Especialista en el tiempo.",
    "parts": [
      {
        "text": "cronó",
        "meaning": "tiempo",
        "origin": "griego",
        "original": "χρόνος"
      },
      {
        "text": "logo",
        "meaning": "especialista",
        "origin": "griego",
        "original": "λόγος"
      }
    ]
  },
  {
    "word": "demografía",
    "definition": "Representación o descripción de el pueblo.",
    "parts": [
      {
        "text": "demo",
        "meaning": "pueblo",
        "origin": "griego",
        "original": "δῆμος"
      },
      {
        "text": "grafía",
        "meaning": "escritura, representación",
        "origin": "griego",
        "original": "γραφία"
      }
    ]
  },
  {
    "word": "demoscopia",
    "definition": "Examen u observación de el pueblo.",
    "parts": [
      {
        "text": "demo",
        "meaning": "pueblo",
        "origin": "griego",
        "original": "δῆμος"
      },
      {
        "text": "scopia",
        "meaning": "observación, examen",
        "origin": "griego",
        "original": "σκοπία"
      }
    ]
  },
  {
    "word": "demógrafo",
    "definition": "Persona o instrumento que representa el pueblo.",
    "parts": [
      {
        "text": "demó",
        "meaning": "pueblo",
        "origin": "griego",
        "original": "δῆμος"
      },
      {
        "text": "grafo",
        "meaning": "escritor o trazador",
        "origin": "griego",
        "original": "γράφειν"
      }
    ]
  },
  {
    "word": "ecografía",
    "definition": "Representación o descripción de el entorno.",
    "parts": [
      {
        "text": "eco",
        "meaning": "casa, entorno",
        "origin": "griego",
        "original": "οἶκος"
      },
      {
        "text": "grafía",
        "meaning": "escritura, representación",
        "origin": "griego",
        "original": "γραφία"
      }
    ]
  },
  {
    "word": "ecógrafo",
    "definition": "Persona o instrumento que representa el entorno.",
    "parts": [
      {
        "text": "ecó",
        "meaning": "casa, entorno",
        "origin": "griego",
        "original": "οἶκος"
      },
      {
        "text": "grafo",
        "meaning": "escritor o trazador",
        "origin": "griego",
        "original": "γράφειν"
      }
    ]
  },
  {
    "word": "ecólogo",
    "definition": "Especialista en el entorno.",
    "parts": [
      {
        "text": "ecó",
        "meaning": "casa, entorno",
        "origin": "griego",
        "original": "οἶκος"
      },
      {
        "text": "logo",
        "meaning": "especialista",
        "origin": "griego",
        "original": "λόγος"
      }
    ]
  },
  {
    "word": "electrometría",
    "definition": "Medición relacionada con la electricidad.",
    "parts": [
      {
        "text": "electro",
        "meaning": "ámbar",
        "origin": "griego",
        "original": "ἤλεκτρον"
      },
      {
        "text": "metría",
        "meaning": "medida",
        "origin": "griego",
        "original": "μετρία"
      }
    ]
  },
  {
    "word": "electroterapia",
    "definition": "Tratamiento relacionado con la electricidad.",
    "parts": [
      {
        "text": "electro",
        "meaning": "ámbar",
        "origin": "griego",
        "original": "ἤλεκτρον"
      },
      {
        "text": "terapia",
        "meaning": "tratamiento",
        "origin": "griego",
        "original": "θεραπεία"
      }
    ]
  },
  {
    "word": "electroscopio",
    "definition": "Instrumento para observar la electricidad.",
    "parts": [
      {
        "text": "electro",
        "meaning": "ámbar",
        "origin": "griego",
        "original": "ἤλεκτρον"
      },
      {
        "text": "scopio",
        "meaning": "instrumento para observar",
        "origin": "griego",
        "original": "σκοπεῖν"
      }
    ]
  },
  {
    "word": "electrotecnia",
    "definition": "Técnica relacionada con la electricidad.",
    "parts": [
      {
        "text": "electro",
        "meaning": "ámbar",
        "origin": "griego",
        "original": "ἤλεκτρον"
      },
      {
        "text": "tecnia",
        "meaning": "técnica, arte",
        "origin": "griego",
        "original": "τέχνη"
      }
    ]
  },
  {
    "word": "electrómetro",
    "definition": "Medida de la electricidad.",
    "parts": [
      {
        "text": "electró",
        "meaning": "ámbar",
        "origin": "griego",
        "original": "ἤλεκτρον"
      },
      {
        "text": "metro",
        "meaning": "medida",
        "origin": "griego",
        "original": "μέτρον"
      }
    ]
  },
  {
    "word": "electrógeno",
    "definition": "Que produce o genera la electricidad.",
    "parts": [
      {
        "text": "electró",
        "meaning": "ámbar",
        "origin": "griego",
        "original": "ἤλεκτρον"
      },
      {
        "text": "geno",
        "meaning": "que produce",
        "origin": "griego",
        "original": "-γενής"
      }
    ]
  },
  {
    "word": "electróforo",
    "definition": "Que porta la electricidad.",
    "parts": [
      {
        "text": "electró",
        "meaning": "ámbar",
        "origin": "griego",
        "original": "ἤλεκτρον"
      },
      {
        "text": "foro",
        "meaning": "que lleva",
        "origin": "griego",
        "original": "φέρειν"
      }
    ]
  },
  {
    "word": "endoscopia",
    "definition": "Examen u observación de el interior.",
    "parts": [
      {
        "text": "endo",
        "meaning": "dentro",
        "origin": "griego",
        "original": "ἔνδον"
      },
      {
        "text": "scopia",
        "meaning": "observación, examen",
        "origin": "griego",
        "original": "σκοπία"
      }
    ]
  },
  {
    "word": "endogénesis",
    "definition": "Formación de el interior.",
    "parts": [
      {
        "text": "endo",
        "meaning": "dentro",
        "origin": "griego",
        "original": "ἔνδον"
      },
      {
        "text": "génesis",
        "meaning": "origen, formación",
        "origin": "griego",
        "original": "γένεσις"
      }
    ]
  },
  {
    "word": "endógeno",
    "definition": "Que produce o genera el interior.",
    "parts": [
      {
        "text": "endó",
        "meaning": "dentro",
        "origin": "griego",
        "original": "ἔνδον"
      },
      {
        "text": "geno",
        "meaning": "que produce",
        "origin": "griego",
        "original": "-γενής"
      }
    ]
  },
  {
    "word": "entomólogo",
    "definition": "Especialista en los insectos.",
    "parts": [
      {
        "text": "entomó",
        "meaning": "insecto",
        "origin": "griego",
        "original": "ἔντομον"
      },
      {
        "text": "logo",
        "meaning": "especialista",
        "origin": "griego",
        "original": "λόγος"
      }
    ]
  },
  {
    "word": "entomófilo",
    "definition": "Con afinidad por los insectos.",
    "parts": [
      {
        "text": "entomó",
        "meaning": "insecto",
        "origin": "griego",
        "original": "ἔντομον"
      },
      {
        "text": "filo",
        "meaning": "afinidad",
        "origin": "griego",
        "original": "φίλος"
      }
    ]
  },
  {
    "word": "etnología",
    "definition": "Estudio de los pueblos.",
    "parts": [
      {
        "text": "etno",
        "meaning": "pueblo, grupo",
        "origin": "griego",
        "original": "ἔθνος"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "etnógrafo",
    "definition": "Persona o instrumento que representa los pueblos.",
    "parts": [
      {
        "text": "etnó",
        "meaning": "pueblo, grupo",
        "origin": "griego",
        "original": "ἔθνος"
      },
      {
        "text": "grafo",
        "meaning": "escritor o trazador",
        "origin": "griego",
        "original": "γράφειν"
      }
    ]
  },
  {
    "word": "etnólogo",
    "definition": "Especialista en los pueblos.",
    "parts": [
      {
        "text": "etnó",
        "meaning": "pueblo, grupo",
        "origin": "griego",
        "original": "ἔθνος"
      },
      {
        "text": "logo",
        "meaning": "especialista",
        "origin": "griego",
        "original": "λόγος"
      }
    ]
  },
  {
    "word": "fotometría",
    "definition": "Medición relacionada con la luz.",
    "parts": [
      {
        "text": "foto",
        "meaning": "luz",
        "origin": "griego",
        "original": "φῶς"
      },
      {
        "text": "metría",
        "meaning": "medida",
        "origin": "griego",
        "original": "μετρία"
      }
    ]
  },
  {
    "word": "fotofobia",
    "definition": "Miedo o aversión relacionado con la luz.",
    "parts": [
      {
        "text": "foto",
        "meaning": "luz",
        "origin": "griego",
        "original": "φῶς"
      },
      {
        "text": "fobia",
        "meaning": "miedo, aversión",
        "origin": "griego",
        "original": "φοβία"
      }
    ]
  },
  {
    "word": "fototerapia",
    "definition": "Tratamiento relacionado con la luz.",
    "parts": [
      {
        "text": "foto",
        "meaning": "luz",
        "origin": "griego",
        "original": "φῶς"
      },
      {
        "text": "terapia",
        "meaning": "tratamiento",
        "origin": "griego",
        "original": "θεραπεία"
      }
    ]
  },
  {
    "word": "fototeca",
    "definition": "Colección o depósito de la luz.",
    "parts": [
      {
        "text": "foto",
        "meaning": "luz",
        "origin": "griego",
        "original": "φῶς"
      },
      {
        "text": "teca",
        "meaning": "depósito, colección",
        "origin": "griego",
        "original": "θήκη"
      }
    ]
  },
  {
    "word": "fotogenia",
    "definition": "Producción relacionada con la luz.",
    "parts": [
      {
        "text": "foto",
        "meaning": "luz",
        "origin": "griego",
        "original": "φῶς"
      },
      {
        "text": "genia",
        "meaning": "origen, producción",
        "origin": "griego",
        "original": "γένεσις"
      }
    ]
  },
  {
    "word": "fotogénesis",
    "definition": "Formación de la luz.",
    "parts": [
      {
        "text": "foto",
        "meaning": "luz",
        "origin": "griego",
        "original": "φῶς"
      },
      {
        "text": "génesis",
        "meaning": "origen, formación",
        "origin": "griego",
        "original": "γένεσις"
      }
    ]
  },
  {
    "word": "fotógrafo",
    "definition": "Persona o instrumento que representa la luz.",
    "parts": [
      {
        "text": "fotó",
        "meaning": "luz",
        "origin": "griego",
        "original": "φῶς"
      },
      {
        "text": "grafo",
        "meaning": "escritor o trazador",
        "origin": "griego",
        "original": "γράφειν"
      }
    ]
  },
  {
    "word": "fotómetro",
    "definition": "Medida de la luz.",
    "parts": [
      {
        "text": "fotó",
        "meaning": "luz",
        "origin": "griego",
        "original": "φῶς"
      },
      {
        "text": "metro",
        "meaning": "medida",
        "origin": "griego",
        "original": "μέτρον"
      }
    ]
  },
  {
    "word": "fonología",
    "definition": "Estudio de el sonido.",
    "parts": [
      {
        "text": "fono",
        "meaning": "sonido, voz",
        "origin": "griego",
        "original": "φωνή"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "fonografía",
    "definition": "Representación o descripción de el sonido.",
    "parts": [
      {
        "text": "fono",
        "meaning": "sonido, voz",
        "origin": "griego",
        "original": "φωνή"
      },
      {
        "text": "grafía",
        "meaning": "escritura, representación",
        "origin": "griego",
        "original": "γραφία"
      }
    ]
  },
  {
    "word": "fonometría",
    "definition": "Medición relacionada con el sonido.",
    "parts": [
      {
        "text": "fono",
        "meaning": "sonido, voz",
        "origin": "griego",
        "original": "φωνή"
      },
      {
        "text": "metría",
        "meaning": "medida",
        "origin": "griego",
        "original": "μετρία"
      }
    ]
  },
  {
    "word": "fonotecnia",
    "definition": "Técnica relacionada con el sonido.",
    "parts": [
      {
        "text": "fono",
        "meaning": "sonido, voz",
        "origin": "griego",
        "original": "φωνή"
      },
      {
        "text": "tecnia",
        "meaning": "técnica, arte",
        "origin": "griego",
        "original": "τέχνη"
      }
    ]
  },
  {
    "word": "fonoteca",
    "definition": "Colección o depósito de el sonido.",
    "parts": [
      {
        "text": "fono",
        "meaning": "sonido, voz",
        "origin": "griego",
        "original": "φωνή"
      },
      {
        "text": "teca",
        "meaning": "depósito, colección",
        "origin": "griego",
        "original": "θήκη"
      }
    ]
  },
  {
    "word": "fonólogo",
    "definition": "Especialista en el sonido.",
    "parts": [
      {
        "text": "fonó",
        "meaning": "sonido, voz",
        "origin": "griego",
        "original": "φωνή"
      },
      {
        "text": "logo",
        "meaning": "especialista",
        "origin": "griego",
        "original": "λόγος"
      }
    ]
  },
  {
    "word": "fonómetro",
    "definition": "Medida de el sonido.",
    "parts": [
      {
        "text": "fonó",
        "meaning": "sonido, voz",
        "origin": "griego",
        "original": "φωνή"
      },
      {
        "text": "metro",
        "meaning": "medida",
        "origin": "griego",
        "original": "μέτρον"
      }
    ]
  },
  {
    "word": "fitología",
    "definition": "Estudio de las plantas.",
    "parts": [
      {
        "text": "fito",
        "meaning": "planta",
        "origin": "griego",
        "original": "φυτόν"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "fitografía",
    "definition": "Representación o descripción de las plantas.",
    "parts": [
      {
        "text": "fito",
        "meaning": "planta",
        "origin": "griego",
        "original": "φυτόν"
      },
      {
        "text": "grafía",
        "meaning": "escritura, representación",
        "origin": "griego",
        "original": "γραφία"
      }
    ]
  },
  {
    "word": "fitoterapia",
    "definition": "Tratamiento relacionado con las plantas.",
    "parts": [
      {
        "text": "fito",
        "meaning": "planta",
        "origin": "griego",
        "original": "φυτόν"
      },
      {
        "text": "terapia",
        "meaning": "tratamiento",
        "origin": "griego",
        "original": "θεραπεία"
      }
    ]
  },
  {
    "word": "fitógrafo",
    "definition": "Persona o instrumento que representa las plantas.",
    "parts": [
      {
        "text": "fitó",
        "meaning": "planta",
        "origin": "griego",
        "original": "φυτόν"
      },
      {
        "text": "grafo",
        "meaning": "escritor o trazador",
        "origin": "griego",
        "original": "γράφειν"
      }
    ]
  },
  {
    "word": "gastropatía",
    "definition": "Afección relacionada con el estómago.",
    "parts": [
      {
        "text": "gastro",
        "meaning": "estómago",
        "origin": "griego",
        "original": "γαστήρ"
      },
      {
        "text": "patía",
        "meaning": "afección, padecimiento",
        "origin": "griego",
        "original": "πάθεια"
      }
    ]
  },
  {
    "word": "gastroscopia",
    "definition": "Examen u observación de el estómago.",
    "parts": [
      {
        "text": "gastro",
        "meaning": "estómago",
        "origin": "griego",
        "original": "γαστήρ"
      },
      {
        "text": "scopia",
        "meaning": "observación, examen",
        "origin": "griego",
        "original": "σκοπία"
      }
    ]
  },
  {
    "word": "gastroscopio",
    "definition": "Instrumento para observar el estómago.",
    "parts": [
      {
        "text": "gastro",
        "meaning": "estómago",
        "origin": "griego",
        "original": "γαστήρ"
      },
      {
        "text": "scopio",
        "meaning": "instrumento para observar",
        "origin": "griego",
        "original": "σκοπεῖν"
      }
    ]
  },
  {
    "word": "geología",
    "definition": "Estudio de la Tierra.",
    "parts": [
      {
        "text": "geo",
        "meaning": "tierra",
        "origin": "griego",
        "original": "γῆ"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "geometría",
    "definition": "Medición relacionada con la Tierra.",
    "parts": [
      {
        "text": "geo",
        "meaning": "tierra",
        "origin": "griego",
        "original": "γῆ"
      },
      {
        "text": "metría",
        "meaning": "medida",
        "origin": "griego",
        "original": "μετρία"
      }
    ]
  },
  {
    "word": "geonomía",
    "definition": "Conocimiento o sistema aplicado a la Tierra.",
    "parts": [
      {
        "text": "geo",
        "meaning": "tierra",
        "origin": "griego",
        "original": "γῆ"
      },
      {
        "text": "nomía",
        "meaning": "norma, orden",
        "origin": "griego",
        "original": "νομία"
      }
    ]
  },
  {
    "word": "geomancia",
    "definition": "Adivinación relacionada con la Tierra.",
    "parts": [
      {
        "text": "geo",
        "meaning": "tierra",
        "origin": "griego",
        "original": "γῆ"
      },
      {
        "text": "mancia",
        "meaning": "adivinación",
        "origin": "griego",
        "original": "μαντεία"
      }
    ]
  },
  {
    "word": "geotecnia",
    "definition": "Técnica relacionada con la Tierra.",
    "parts": [
      {
        "text": "geo",
        "meaning": "tierra",
        "origin": "griego",
        "original": "γῆ"
      },
      {
        "text": "tecnia",
        "meaning": "técnica, arte",
        "origin": "griego",
        "original": "τέχνη"
      }
    ]
  },
  {
    "word": "geogenia",
    "definition": "Producción relacionada con la Tierra.",
    "parts": [
      {
        "text": "geo",
        "meaning": "tierra",
        "origin": "griego",
        "original": "γῆ"
      },
      {
        "text": "genia",
        "meaning": "origen, producción",
        "origin": "griego",
        "original": "γένεσις"
      }
    ]
  },
  {
    "word": "gerontología",
    "definition": "Estudio de la vejez.",
    "parts": [
      {
        "text": "geronto",
        "meaning": "anciano",
        "origin": "griego",
        "original": "γέρων"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "gerontocracia",
    "definition": "Sistema de poder relacionado con la vejez.",
    "parts": [
      {
        "text": "geronto",
        "meaning": "anciano",
        "origin": "griego",
        "original": "γέρων"
      },
      {
        "text": "cracia",
        "meaning": "poder, gobierno",
        "origin": "griego",
        "original": "κράτος"
      }
    ]
  },
  {
    "word": "gerontólogo",
    "definition": "Especialista en la vejez.",
    "parts": [
      {
        "text": "gerontó",
        "meaning": "anciano",
        "origin": "griego",
        "original": "γέρων"
      },
      {
        "text": "logo",
        "meaning": "especialista",
        "origin": "griego",
        "original": "λόγος"
      }
    ]
  },
  {
    "word": "ginecología",
    "definition": "Estudio de la mujer.",
    "parts": [
      {
        "text": "gineco",
        "meaning": "mujer",
        "origin": "griego",
        "original": "γυνή"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "ginecocracia",
    "definition": "Sistema de poder relacionado con la mujer.",
    "parts": [
      {
        "text": "gineco",
        "meaning": "mujer",
        "origin": "griego",
        "original": "γυνή"
      },
      {
        "text": "cracia",
        "meaning": "poder, gobierno",
        "origin": "griego",
        "original": "κράτος"
      }
    ]
  },
  {
    "word": "ginecólogo",
    "definition": "Especialista en la mujer.",
    "parts": [
      {
        "text": "ginecó",
        "meaning": "mujer",
        "origin": "griego",
        "original": "γυνή"
      },
      {
        "text": "logo",
        "meaning": "especialista",
        "origin": "griego",
        "original": "λόγος"
      }
    ]
  },
  {
    "word": "heliografía",
    "definition": "Representación o descripción de el Sol.",
    "parts": [
      {
        "text": "helio",
        "meaning": "sol",
        "origin": "griego",
        "original": "ἥλιος"
      },
      {
        "text": "grafía",
        "meaning": "escritura, representación",
        "origin": "griego",
        "original": "γραφία"
      }
    ]
  },
  {
    "word": "helioterapia",
    "definition": "Tratamiento relacionado con el Sol.",
    "parts": [
      {
        "text": "helio",
        "meaning": "sol",
        "origin": "griego",
        "original": "ἥλιος"
      },
      {
        "text": "terapia",
        "meaning": "tratamiento",
        "origin": "griego",
        "original": "θεραπεία"
      }
    ]
  },
  {
    "word": "hemofilia",
    "definition": "Afinidad o interés por la sangre.",
    "parts": [
      {
        "text": "hemo",
        "meaning": "sangre",
        "origin": "griego",
        "original": "αἷμα"
      },
      {
        "text": "filia",
        "meaning": "afinidad, amor",
        "origin": "griego",
        "original": "φιλία"
      }
    ]
  },
  {
    "word": "hemopatía",
    "definition": "Afección relacionada con la sangre.",
    "parts": [
      {
        "text": "hemo",
        "meaning": "sangre",
        "origin": "griego",
        "original": "αἷμα"
      },
      {
        "text": "patía",
        "meaning": "afección, padecimiento",
        "origin": "griego",
        "original": "πάθεια"
      }
    ]
  },
  {
    "word": "hepatología",
    "definition": "Estudio de el hígado.",
    "parts": [
      {
        "text": "hepato",
        "meaning": "hígado",
        "origin": "griego",
        "original": "ἧπαρ"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "hepatopatía",
    "definition": "Afección relacionada con el hígado.",
    "parts": [
      {
        "text": "hepato",
        "meaning": "hígado",
        "origin": "griego",
        "original": "ἧπαρ"
      },
      {
        "text": "patía",
        "meaning": "afección, padecimiento",
        "origin": "griego",
        "original": "πάθεια"
      }
    ]
  },
  {
    "word": "hepatólogo",
    "definition": "Especialista en el hígado.",
    "parts": [
      {
        "text": "hepató",
        "meaning": "hígado",
        "origin": "griego",
        "original": "ἧπαρ"
      },
      {
        "text": "logo",
        "meaning": "especialista",
        "origin": "griego",
        "original": "λόγος"
      }
    ]
  },
  {
    "word": "heteronomía",
    "definition": "Conocimiento o sistema aplicado a lo diferente.",
    "parts": [
      {
        "text": "hetero",
        "meaning": "diferente",
        "origin": "griego",
        "original": "ἕτερος"
      },
      {
        "text": "nomía",
        "meaning": "norma, orden",
        "origin": "griego",
        "original": "νομία"
      }
    ]
  },
  {
    "word": "heteromancia",
    "definition": "Adivinación relacionada con lo diferente.",
    "parts": [
      {
        "text": "hetero",
        "meaning": "diferente",
        "origin": "griego",
        "original": "ἕτερος"
      },
      {
        "text": "mancia",
        "meaning": "adivinación",
        "origin": "griego",
        "original": "μαντεία"
      }
    ]
  },
  {
    "word": "hidrología",
    "definition": "Estudio de el agua.",
    "parts": [
      {
        "text": "hidro",
        "meaning": "agua",
        "origin": "griego",
        "original": "ὕδωρ"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "hidrometría",
    "definition": "Medición relacionada con el agua.",
    "parts": [
      {
        "text": "hidro",
        "meaning": "agua",
        "origin": "griego",
        "original": "ὕδωρ"
      },
      {
        "text": "metría",
        "meaning": "medida",
        "origin": "griego",
        "original": "μετρία"
      }
    ]
  },
  {
    "word": "hidrofobia",
    "definition": "Miedo o aversión relacionado con el agua.",
    "parts": [
      {
        "text": "hidro",
        "meaning": "agua",
        "origin": "griego",
        "original": "ὕδωρ"
      },
      {
        "text": "fobia",
        "meaning": "miedo, aversión",
        "origin": "griego",
        "original": "φοβία"
      }
    ]
  },
  {
    "word": "hidroterapia",
    "definition": "Tratamiento relacionado con el agua.",
    "parts": [
      {
        "text": "hidro",
        "meaning": "agua",
        "origin": "griego",
        "original": "ὕδωρ"
      },
      {
        "text": "terapia",
        "meaning": "tratamiento",
        "origin": "griego",
        "original": "θεραπεία"
      }
    ]
  },
  {
    "word": "hidropatía",
    "definition": "Afección relacionada con el agua.",
    "parts": [
      {
        "text": "hidro",
        "meaning": "agua",
        "origin": "griego",
        "original": "ὕδωρ"
      },
      {
        "text": "patía",
        "meaning": "afección, padecimiento",
        "origin": "griego",
        "original": "πάθεια"
      }
    ]
  },
  {
    "word": "hidroscopia",
    "definition": "Examen u observación de el agua.",
    "parts": [
      {
        "text": "hidro",
        "meaning": "agua",
        "origin": "griego",
        "original": "ὕδωρ"
      },
      {
        "text": "scopia",
        "meaning": "observación, examen",
        "origin": "griego",
        "original": "σκοπία"
      }
    ]
  },
  {
    "word": "hidromancia",
    "definition": "Adivinación relacionada con el agua.",
    "parts": [
      {
        "text": "hidro",
        "meaning": "agua",
        "origin": "griego",
        "original": "ὕδωρ"
      },
      {
        "text": "mancia",
        "meaning": "adivinación",
        "origin": "griego",
        "original": "μαντεία"
      }
    ]
  },
  {
    "word": "hidrotecnia",
    "definition": "Técnica relacionada con el agua.",
    "parts": [
      {
        "text": "hidro",
        "meaning": "agua",
        "origin": "griego",
        "original": "ὕδωρ"
      },
      {
        "text": "tecnia",
        "meaning": "técnica, arte",
        "origin": "griego",
        "original": "τέχνη"
      }
    ]
  },
  {
    "word": "hidrógrafo",
    "definition": "Persona o instrumento que representa el agua.",
    "parts": [
      {
        "text": "hidró",
        "meaning": "agua",
        "origin": "griego",
        "original": "ὕδωρ"
      },
      {
        "text": "grafo",
        "meaning": "escritor o trazador",
        "origin": "griego",
        "original": "γράφειν"
      }
    ]
  },
  {
    "word": "hidrólogo",
    "definition": "Especialista en el agua.",
    "parts": [
      {
        "text": "hidró",
        "meaning": "agua",
        "origin": "griego",
        "original": "ὕδωρ"
      },
      {
        "text": "logo",
        "meaning": "especialista",
        "origin": "griego",
        "original": "λόγος"
      }
    ]
  },
  {
    "word": "hidrógeno",
    "definition": "Que produce o genera el agua.",
    "parts": [
      {
        "text": "hidró",
        "meaning": "agua",
        "origin": "griego",
        "original": "ὕδωρ"
      },
      {
        "text": "geno",
        "meaning": "que produce",
        "origin": "griego",
        "original": "-γενής"
      }
    ]
  },
  {
    "word": "hidrófilo",
    "definition": "Con afinidad por el agua.",
    "parts": [
      {
        "text": "hidró",
        "meaning": "agua",
        "origin": "griego",
        "original": "ὕδωρ"
      },
      {
        "text": "filo",
        "meaning": "afinidad",
        "origin": "griego",
        "original": "φίλος"
      }
    ]
  },
  {
    "word": "hidrófono",
    "definition": "Sonido relacionado con el agua.",
    "parts": [
      {
        "text": "hidró",
        "meaning": "agua",
        "origin": "griego",
        "original": "ὕδωρ"
      },
      {
        "text": "fono",
        "meaning": "sonido",
        "origin": "griego",
        "original": "φωνή"
      }
    ]
  },
  {
    "word": "ictiología",
    "definition": "Estudio de los peces.",
    "parts": [
      {
        "text": "ictio",
        "meaning": "pez",
        "origin": "griego",
        "original": "ἰχθύς"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "ictiografía",
    "definition": "Representación o descripción de los peces.",
    "parts": [
      {
        "text": "ictio",
        "meaning": "pez",
        "origin": "griego",
        "original": "ἰχθύς"
      },
      {
        "text": "grafía",
        "meaning": "escritura, representación",
        "origin": "griego",
        "original": "γραφία"
      }
    ]
  },
  {
    "word": "ictiólogo",
    "definition": "Especialista en los peces.",
    "parts": [
      {
        "text": "ictió",
        "meaning": "pez",
        "origin": "griego",
        "original": "ἰχθύς"
      },
      {
        "text": "logo",
        "meaning": "especialista",
        "origin": "griego",
        "original": "λόγος"
      }
    ]
  },
  {
    "word": "iconología",
    "definition": "Estudio de las imágenes.",
    "parts": [
      {
        "text": "icono",
        "meaning": "imagen",
        "origin": "griego",
        "original": "εἰκών"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "iconografía",
    "definition": "Representación o descripción de las imágenes.",
    "parts": [
      {
        "text": "icono",
        "meaning": "imagen",
        "origin": "griego",
        "original": "εἰκών"
      },
      {
        "text": "grafía",
        "meaning": "escritura, representación",
        "origin": "griego",
        "original": "γραφία"
      }
    ]
  },
  {
    "word": "iconoscopio",
    "definition": "Instrumento para observar las imágenes.",
    "parts": [
      {
        "text": "icono",
        "meaning": "imagen",
        "origin": "griego",
        "original": "εἰκών"
      },
      {
        "text": "scopio",
        "meaning": "instrumento para observar",
        "origin": "griego",
        "original": "σκοπεῖν"
      }
    ]
  },
  {
    "word": "iconólogo",
    "definition": "Especialista en las imágenes.",
    "parts": [
      {
        "text": "iconó",
        "meaning": "imagen",
        "origin": "griego",
        "original": "εἰκών"
      },
      {
        "text": "logo",
        "meaning": "especialista",
        "origin": "griego",
        "original": "λόγος"
      }
    ]
  },
  {
    "word": "lexicología",
    "definition": "Estudio de las palabras.",
    "parts": [
      {
        "text": "lexico",
        "meaning": "palabra",
        "origin": "griego",
        "original": "λέξις"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "lexicógrafo",
    "definition": "Persona o instrumento que representa las palabras.",
    "parts": [
      {
        "text": "lexicó",
        "meaning": "palabra",
        "origin": "griego",
        "original": "λέξις"
      },
      {
        "text": "grafo",
        "meaning": "escritor o trazador",
        "origin": "griego",
        "original": "γράφειν"
      }
    ]
  },
  {
    "word": "lexicólogo",
    "definition": "Especialista en las palabras.",
    "parts": [
      {
        "text": "lexicó",
        "meaning": "palabra",
        "origin": "griego",
        "original": "λέξις"
      },
      {
        "text": "logo",
        "meaning": "especialista",
        "origin": "griego",
        "original": "λόγος"
      }
    ]
  },
  {
    "word": "litología",
    "definition": "Estudio de las piedras.",
    "parts": [
      {
        "text": "lito",
        "meaning": "piedra",
        "origin": "griego",
        "original": "λίθος"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "litografía",
    "definition": "Representación o descripción de las piedras.",
    "parts": [
      {
        "text": "lito",
        "meaning": "piedra",
        "origin": "griego",
        "original": "λίθος"
      },
      {
        "text": "grafía",
        "meaning": "escritura, representación",
        "origin": "griego",
        "original": "γραφία"
      }
    ]
  },
  {
    "word": "litógrafo",
    "definition": "Persona o instrumento que representa las piedras.",
    "parts": [
      {
        "text": "litó",
        "meaning": "piedra",
        "origin": "griego",
        "original": "λίθος"
      },
      {
        "text": "grafo",
        "meaning": "escritor o trazador",
        "origin": "griego",
        "original": "γράφειν"
      }
    ]
  },
  {
    "word": "litólogo",
    "definition": "Especialista en las piedras.",
    "parts": [
      {
        "text": "litó",
        "meaning": "piedra",
        "origin": "griego",
        "original": "λίθος"
      },
      {
        "text": "logo",
        "meaning": "especialista",
        "origin": "griego",
        "original": "λόγος"
      }
    ]
  },
  {
    "word": "litófago",
    "definition": "Que se alimenta de las piedras.",
    "parts": [
      {
        "text": "litó",
        "meaning": "piedra",
        "origin": "griego",
        "original": "λίθος"
      },
      {
        "text": "fago",
        "meaning": "que come",
        "origin": "griego",
        "original": "φαγεῖν"
      }
    ]
  },
  {
    "word": "micrografía",
    "definition": "Representación o descripción de lo pequeño.",
    "parts": [
      {
        "text": "micro",
        "meaning": "pequeño",
        "origin": "griego",
        "original": "μικρός"
      },
      {
        "text": "grafía",
        "meaning": "escritura, representación",
        "origin": "griego",
        "original": "γραφία"
      }
    ]
  },
  {
    "word": "microscopia",
    "definition": "Examen u observación de lo pequeño.",
    "parts": [
      {
        "text": "micro",
        "meaning": "pequeño",
        "origin": "griego",
        "original": "μικρός"
      },
      {
        "text": "scopia",
        "meaning": "observación, examen",
        "origin": "griego",
        "original": "σκοπία"
      }
    ]
  },
  {
    "word": "micrógrafo",
    "definition": "Persona o instrumento que representa lo pequeño.",
    "parts": [
      {
        "text": "micró",
        "meaning": "pequeño",
        "origin": "griego",
        "original": "μικρός"
      },
      {
        "text": "grafo",
        "meaning": "escritor o trazador",
        "origin": "griego",
        "original": "γράφειν"
      }
    ]
  },
  {
    "word": "micrómetro",
    "definition": "Medida de lo pequeño.",
    "parts": [
      {
        "text": "micró",
        "meaning": "pequeño",
        "origin": "griego",
        "original": "μικρός"
      },
      {
        "text": "metro",
        "meaning": "medida",
        "origin": "griego",
        "original": "μέτρον"
      }
    ]
  },
  {
    "word": "micrófono",
    "definition": "Sonido relacionado con lo pequeño.",
    "parts": [
      {
        "text": "micró",
        "meaning": "pequeño",
        "origin": "griego",
        "original": "μικρός"
      },
      {
        "text": "fono",
        "meaning": "sonido",
        "origin": "griego",
        "original": "φωνή"
      }
    ]
  },
  {
    "word": "mitología",
    "definition": "Estudio de los relatos tradicionales.",
    "parts": [
      {
        "text": "mito",
        "meaning": "relato tradicional",
        "origin": "griego",
        "original": "μῦθος"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "mitografía",
    "definition": "Representación o descripción de los relatos tradicionales.",
    "parts": [
      {
        "text": "mito",
        "meaning": "relato tradicional",
        "origin": "griego",
        "original": "μῦθος"
      },
      {
        "text": "grafía",
        "meaning": "escritura, representación",
        "origin": "griego",
        "original": "γραφία"
      }
    ]
  },
  {
    "word": "mitógrafo",
    "definition": "Persona o instrumento que representa los relatos tradicionales.",
    "parts": [
      {
        "text": "mitó",
        "meaning": "relato tradicional",
        "origin": "griego",
        "original": "μῦθος"
      },
      {
        "text": "grafo",
        "meaning": "escritor o trazador",
        "origin": "griego",
        "original": "γράφειν"
      }
    ]
  },
  {
    "word": "mitólogo",
    "definition": "Especialista en los relatos tradicionales.",
    "parts": [
      {
        "text": "mitó",
        "meaning": "relato tradicional",
        "origin": "griego",
        "original": "μῦθος"
      },
      {
        "text": "logo",
        "meaning": "especialista",
        "origin": "griego",
        "original": "λόγος"
      }
    ]
  },
  {
    "word": "morfometría",
    "definition": "Medición relacionada con las formas.",
    "parts": [
      {
        "text": "morfo",
        "meaning": "forma",
        "origin": "griego",
        "original": "μορφή"
      },
      {
        "text": "metría",
        "meaning": "medida",
        "origin": "griego",
        "original": "μετρία"
      }
    ]
  },
  {
    "word": "morfólogo",
    "definition": "Especialista en las formas.",
    "parts": [
      {
        "text": "morfó",
        "meaning": "forma",
        "origin": "griego",
        "original": "μορφή"
      },
      {
        "text": "logo",
        "meaning": "especialista",
        "origin": "griego",
        "original": "λόγος"
      }
    ]
  },
  {
    "word": "neuropatía",
    "definition": "Afección relacionada con el sistema nervioso.",
    "parts": [
      {
        "text": "neuro",
        "meaning": "nervio",
        "origin": "griego",
        "original": "νεῦρον"
      },
      {
        "text": "patía",
        "meaning": "afección, padecimiento",
        "origin": "griego",
        "original": "πάθεια"
      }
    ]
  },
  {
    "word": "neurólogo",
    "definition": "Especialista en el sistema nervioso.",
    "parts": [
      {
        "text": "neuró",
        "meaning": "nervio",
        "origin": "griego",
        "original": "νεῦρον"
      },
      {
        "text": "logo",
        "meaning": "especialista",
        "origin": "griego",
        "original": "λόγος"
      }
    ]
  },
  {
    "word": "odontólogo",
    "definition": "Especialista en los dientes.",
    "parts": [
      {
        "text": "odontó",
        "meaning": "diente",
        "origin": "griego",
        "original": "ὀδούς"
      },
      {
        "text": "logo",
        "meaning": "especialista",
        "origin": "griego",
        "original": "λόγος"
      }
    ]
  },
  {
    "word": "oncología",
    "definition": "Estudio de los tumores.",
    "parts": [
      {
        "text": "onco",
        "meaning": "masa, tumor",
        "origin": "griego",
        "original": "ὄγκος"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "oncogénesis",
    "definition": "Formación de los tumores.",
    "parts": [
      {
        "text": "onco",
        "meaning": "masa, tumor",
        "origin": "griego",
        "original": "ὄγκος"
      },
      {
        "text": "génesis",
        "meaning": "origen, formación",
        "origin": "griego",
        "original": "γένεσις"
      }
    ]
  },
  {
    "word": "oncólogo",
    "definition": "Especialista en los tumores.",
    "parts": [
      {
        "text": "oncó",
        "meaning": "masa, tumor",
        "origin": "griego",
        "original": "ὄγκος"
      },
      {
        "text": "logo",
        "meaning": "especialista",
        "origin": "griego",
        "original": "λόγος"
      }
    ]
  },
  {
    "word": "ornitomancia",
    "definition": "Adivinación relacionada con las aves.",
    "parts": [
      {
        "text": "ornito",
        "meaning": "ave",
        "origin": "griego",
        "original": "ὄρνις"
      },
      {
        "text": "mancia",
        "meaning": "adivinación",
        "origin": "griego",
        "original": "μαντεία"
      }
    ]
  },
  {
    "word": "ornitólogo",
    "definition": "Especialista en las aves.",
    "parts": [
      {
        "text": "ornitó",
        "meaning": "ave",
        "origin": "griego",
        "original": "ὄρνις"
      },
      {
        "text": "logo",
        "meaning": "especialista",
        "origin": "griego",
        "original": "λόγος"
      }
    ]
  },
  {
    "word": "ortología",
    "definition": "Estudio de lo correcto.",
    "parts": [
      {
        "text": "orto",
        "meaning": "recto, correcto",
        "origin": "griego",
        "original": "ὀρθός"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "ortografía",
    "definition": "Representación o descripción de lo correcto.",
    "parts": [
      {
        "text": "orto",
        "meaning": "recto, correcto",
        "origin": "griego",
        "original": "ὀρθός"
      },
      {
        "text": "grafía",
        "meaning": "escritura, representación",
        "origin": "griego",
        "original": "γραφία"
      }
    ]
  },
  {
    "word": "ortofonía",
    "definition": "Sonido relacionado con lo correcto.",
    "parts": [
      {
        "text": "orto",
        "meaning": "recto, correcto",
        "origin": "griego",
        "original": "ὀρθός"
      },
      {
        "text": "fonía",
        "meaning": "sonido, voz",
        "origin": "griego",
        "original": "φωνή"
      }
    ]
  },
  {
    "word": "ortógrafo",
    "definition": "Persona o instrumento que representa lo correcto.",
    "parts": [
      {
        "text": "ortó",
        "meaning": "recto, correcto",
        "origin": "griego",
        "original": "ὀρθός"
      },
      {
        "text": "grafo",
        "meaning": "escritor o trazador",
        "origin": "griego",
        "original": "γράφειν"
      }
    ]
  },
  {
    "word": "ortólogo",
    "definition": "Especialista en lo correcto.",
    "parts": [
      {
        "text": "ortó",
        "meaning": "recto, correcto",
        "origin": "griego",
        "original": "ὀρθός"
      },
      {
        "text": "logo",
        "meaning": "especialista",
        "origin": "griego",
        "original": "λόγος"
      }
    ]
  },
  {
    "word": "osteología",
    "definition": "Estudio de los huesos.",
    "parts": [
      {
        "text": "osteo",
        "meaning": "hueso",
        "origin": "griego",
        "original": "ὀστέον"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "osteopatía",
    "definition": "Afección relacionada con los huesos.",
    "parts": [
      {
        "text": "osteo",
        "meaning": "hueso",
        "origin": "griego",
        "original": "ὀστέον"
      },
      {
        "text": "patía",
        "meaning": "afección, padecimiento",
        "origin": "griego",
        "original": "πάθεια"
      }
    ]
  },
  {
    "word": "osteogénesis",
    "definition": "Formación de los huesos.",
    "parts": [
      {
        "text": "osteo",
        "meaning": "hueso",
        "origin": "griego",
        "original": "ὀστέον"
      },
      {
        "text": "génesis",
        "meaning": "origen, formación",
        "origin": "griego",
        "original": "γένεσις"
      }
    ]
  },
  {
    "word": "osteólogo",
    "definition": "Especialista en los huesos.",
    "parts": [
      {
        "text": "osteó",
        "meaning": "hueso",
        "origin": "griego",
        "original": "ὀστέον"
      },
      {
        "text": "logo",
        "meaning": "especialista",
        "origin": "griego",
        "original": "λόγος"
      }
    ]
  },
  {
    "word": "paleografía",
    "definition": "Representación o descripción de lo antiguo.",
    "parts": [
      {
        "text": "paleo",
        "meaning": "antiguo",
        "origin": "griego",
        "original": "παλαιός"
      },
      {
        "text": "grafía",
        "meaning": "escritura, representación",
        "origin": "griego",
        "original": "γραφία"
      }
    ]
  },
  {
    "word": "paleógrafo",
    "definition": "Persona o instrumento que representa lo antiguo.",
    "parts": [
      {
        "text": "paleó",
        "meaning": "antiguo",
        "origin": "griego",
        "original": "παλαιός"
      },
      {
        "text": "grafo",
        "meaning": "escritor o trazador",
        "origin": "griego",
        "original": "γράφειν"
      }
    ]
  },
  {
    "word": "paleólogo",
    "definition": "Especialista en lo antiguo.",
    "parts": [
      {
        "text": "paleó",
        "meaning": "antiguo",
        "origin": "griego",
        "original": "παλαιός"
      },
      {
        "text": "logo",
        "meaning": "especialista",
        "origin": "griego",
        "original": "λόγος"
      }
    ]
  },
  {
    "word": "paleógeno",
    "definition": "Que produce o genera lo antiguo.",
    "parts": [
      {
        "text": "paleó",
        "meaning": "antiguo",
        "origin": "griego",
        "original": "παλαιός"
      },
      {
        "text": "geno",
        "meaning": "que produce",
        "origin": "griego",
        "original": "-γενής"
      }
    ]
  },
  {
    "word": "patología",
    "definition": "Estudio de la enfermedad.",
    "parts": [
      {
        "text": "pato",
        "meaning": "dolor, enfermedad",
        "origin": "griego",
        "original": "πάθος"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "patografía",
    "definition": "Representación o descripción de la enfermedad.",
    "parts": [
      {
        "text": "pato",
        "meaning": "dolor, enfermedad",
        "origin": "griego",
        "original": "πάθος"
      },
      {
        "text": "grafía",
        "meaning": "escritura, representación",
        "origin": "griego",
        "original": "γραφία"
      }
    ]
  },
  {
    "word": "patogenia",
    "definition": "Producción relacionada con la enfermedad.",
    "parts": [
      {
        "text": "pato",
        "meaning": "dolor, enfermedad",
        "origin": "griego",
        "original": "πάθος"
      },
      {
        "text": "genia",
        "meaning": "origen, producción",
        "origin": "griego",
        "original": "γένεσις"
      }
    ]
  },
  {
    "word": "patogénesis",
    "definition": "Formación de la enfermedad.",
    "parts": [
      {
        "text": "pato",
        "meaning": "dolor, enfermedad",
        "origin": "griego",
        "original": "πάθος"
      },
      {
        "text": "génesis",
        "meaning": "origen, formación",
        "origin": "griego",
        "original": "γένεσις"
      }
    ]
  },
  {
    "word": "psicometría",
    "definition": "Medición relacionada con la mente.",
    "parts": [
      {
        "text": "psico",
        "meaning": "mente, alma",
        "origin": "griego",
        "original": "ψυχή"
      },
      {
        "text": "metría",
        "meaning": "medida",
        "origin": "griego",
        "original": "μετρία"
      }
    ]
  },
  {
    "word": "psicoterapia",
    "definition": "Tratamiento relacionado con la mente.",
    "parts": [
      {
        "text": "psico",
        "meaning": "mente, alma",
        "origin": "griego",
        "original": "ψυχή"
      },
      {
        "text": "terapia",
        "meaning": "tratamiento",
        "origin": "griego",
        "original": "θεραπεία"
      }
    ]
  },
  {
    "word": "psicopatía",
    "definition": "Afección relacionada con la mente.",
    "parts": [
      {
        "text": "psico",
        "meaning": "mente, alma",
        "origin": "griego",
        "original": "ψυχή"
      },
      {
        "text": "patía",
        "meaning": "afección, padecimiento",
        "origin": "griego",
        "original": "πάθεια"
      }
    ]
  },
  {
    "word": "psicotecnia",
    "definition": "Técnica relacionada con la mente.",
    "parts": [
      {
        "text": "psico",
        "meaning": "mente, alma",
        "origin": "griego",
        "original": "ψυχή"
      },
      {
        "text": "tecnia",
        "meaning": "técnica, arte",
        "origin": "griego",
        "original": "τέχνη"
      }
    ]
  },
  {
    "word": "psicofonía",
    "definition": "Sonido relacionado con la mente.",
    "parts": [
      {
        "text": "psico",
        "meaning": "mente, alma",
        "origin": "griego",
        "original": "ψυχή"
      },
      {
        "text": "fonía",
        "meaning": "sonido, voz",
        "origin": "griego",
        "original": "φωνή"
      }
    ]
  },
  {
    "word": "psicólogo",
    "definition": "Especialista en la mente.",
    "parts": [
      {
        "text": "psicó",
        "meaning": "mente, alma",
        "origin": "griego",
        "original": "ψυχή"
      },
      {
        "text": "logo",
        "meaning": "especialista",
        "origin": "griego",
        "original": "λόγος"
      }
    ]
  },
  {
    "word": "psicógeno",
    "definition": "Que produce o genera la mente.",
    "parts": [
      {
        "text": "psicó",
        "meaning": "mente, alma",
        "origin": "griego",
        "original": "ψυχή"
      },
      {
        "text": "geno",
        "meaning": "que produce",
        "origin": "griego",
        "original": "-γενής"
      }
    ]
  },
  {
    "word": "sociología",
    "definition": "Estudio de la sociedad.",
    "parts": [
      {
        "text": "socio",
        "meaning": "compañero",
        "origin": "latín",
        "original": "socius"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "sociometría",
    "definition": "Medición relacionada con la sociedad.",
    "parts": [
      {
        "text": "socio",
        "meaning": "compañero",
        "origin": "latín",
        "original": "socius"
      },
      {
        "text": "metría",
        "meaning": "medida",
        "origin": "griego",
        "original": "μετρία"
      }
    ]
  },
  {
    "word": "sociopatía",
    "definition": "Afección relacionada con la sociedad.",
    "parts": [
      {
        "text": "socio",
        "meaning": "compañero",
        "origin": "latín",
        "original": "socius"
      },
      {
        "text": "patía",
        "meaning": "afección, padecimiento",
        "origin": "griego",
        "original": "πάθεια"
      }
    ]
  },
  {
    "word": "sociólogo",
    "definition": "Especialista en la sociedad.",
    "parts": [
      {
        "text": "soció",
        "meaning": "compañero",
        "origin": "latín",
        "original": "socius"
      },
      {
        "text": "logo",
        "meaning": "especialista",
        "origin": "griego",
        "original": "λόγος"
      }
    ]
  },
  {
    "word": "telegrafía",
    "definition": "Representación o descripción de la distancia.",
    "parts": [
      {
        "text": "tele",
        "meaning": "lejos, a distancia",
        "origin": "griego",
        "original": "τῆλε"
      },
      {
        "text": "grafía",
        "meaning": "escritura, representación",
        "origin": "griego",
        "original": "γραφία"
      }
    ]
  },
  {
    "word": "telepatía",
    "definition": "Afección relacionada con la distancia.",
    "parts": [
      {
        "text": "tele",
        "meaning": "lejos, a distancia",
        "origin": "griego",
        "original": "τῆλε"
      },
      {
        "text": "patía",
        "meaning": "afección, padecimiento",
        "origin": "griego",
        "original": "πάθεια"
      }
    ]
  },
  {
    "word": "telefonía",
    "definition": "Sonido relacionado con la distancia.",
    "parts": [
      {
        "text": "tele",
        "meaning": "lejos, a distancia",
        "origin": "griego",
        "original": "τῆλε"
      },
      {
        "text": "fonía",
        "meaning": "sonido, voz",
        "origin": "griego",
        "original": "φωνή"
      }
    ]
  },
  {
    "word": "telegenia",
    "definition": "Producción relacionada con la distancia.",
    "parts": [
      {
        "text": "tele",
        "meaning": "lejos, a distancia",
        "origin": "griego",
        "original": "τῆλε"
      },
      {
        "text": "genia",
        "meaning": "origen, producción",
        "origin": "griego",
        "original": "γένεσις"
      }
    ]
  },
  {
    "word": "telégrafo",
    "definition": "Persona o instrumento que representa la distancia.",
    "parts": [
      {
        "text": "telé",
        "meaning": "lejos, a distancia",
        "origin": "griego",
        "original": "τῆλε"
      },
      {
        "text": "grafo",
        "meaning": "escritor o trazador",
        "origin": "griego",
        "original": "γράφειν"
      }
    ]
  },
  {
    "word": "telémetro",
    "definition": "Medida de la distancia.",
    "parts": [
      {
        "text": "telé",
        "meaning": "lejos, a distancia",
        "origin": "griego",
        "original": "τῆλε"
      },
      {
        "text": "metro",
        "meaning": "medida",
        "origin": "griego",
        "original": "μέτρον"
      }
    ]
  },
  {
    "word": "termología",
    "definition": "Estudio de el calor.",
    "parts": [
      {
        "text": "termo",
        "meaning": "calor",
        "origin": "griego",
        "original": "θέρμη"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "termografía",
    "definition": "Representación o descripción de el calor.",
    "parts": [
      {
        "text": "termo",
        "meaning": "calor",
        "origin": "griego",
        "original": "θέρμη"
      },
      {
        "text": "grafía",
        "meaning": "escritura, representación",
        "origin": "griego",
        "original": "γραφία"
      }
    ]
  },
  {
    "word": "termometría",
    "definition": "Medición relacionada con el calor.",
    "parts": [
      {
        "text": "termo",
        "meaning": "calor",
        "origin": "griego",
        "original": "θέρμη"
      },
      {
        "text": "metría",
        "meaning": "medida",
        "origin": "griego",
        "original": "μετρία"
      }
    ]
  },
  {
    "word": "termoterapia",
    "definition": "Tratamiento relacionado con el calor.",
    "parts": [
      {
        "text": "termo",
        "meaning": "calor",
        "origin": "griego",
        "original": "θέρμη"
      },
      {
        "text": "terapia",
        "meaning": "tratamiento",
        "origin": "griego",
        "original": "θεραπεία"
      }
    ]
  },
  {
    "word": "termoscopio",
    "definition": "Instrumento para observar el calor.",
    "parts": [
      {
        "text": "termo",
        "meaning": "calor",
        "origin": "griego",
        "original": "θέρμη"
      },
      {
        "text": "scopio",
        "meaning": "instrumento para observar",
        "origin": "griego",
        "original": "σκοπεῖν"
      }
    ]
  },
  {
    "word": "termotecnia",
    "definition": "Técnica relacionada con el calor.",
    "parts": [
      {
        "text": "termo",
        "meaning": "calor",
        "origin": "griego",
        "original": "θέρμη"
      },
      {
        "text": "tecnia",
        "meaning": "técnica, arte",
        "origin": "griego",
        "original": "τέχνη"
      }
    ]
  },
  {
    "word": "termógrafo",
    "definition": "Persona o instrumento que representa el calor.",
    "parts": [
      {
        "text": "termó",
        "meaning": "calor",
        "origin": "griego",
        "original": "θέρμη"
      },
      {
        "text": "grafo",
        "meaning": "escritor o trazador",
        "origin": "griego",
        "original": "γράφειν"
      }
    ]
  },
  {
    "word": "topología",
    "definition": "Estudio de los lugares.",
    "parts": [
      {
        "text": "topo",
        "meaning": "lugar",
        "origin": "griego",
        "original": "τόπος"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "topógrafo",
    "definition": "Persona o instrumento que representa los lugares.",
    "parts": [
      {
        "text": "topó",
        "meaning": "lugar",
        "origin": "griego",
        "original": "τόπος"
      },
      {
        "text": "grafo",
        "meaning": "escritor o trazador",
        "origin": "griego",
        "original": "γράφειν"
      }
    ]
  },
  {
    "word": "toxicogénesis",
    "definition": "Formación de los venenos.",
    "parts": [
      {
        "text": "toxico",
        "meaning": "veneno",
        "origin": "griego",
        "original": "τοξικόν"
      },
      {
        "text": "génesis",
        "meaning": "origen, formación",
        "origin": "griego",
        "original": "γένεσις"
      }
    ]
  },
  {
    "word": "toxicólogo",
    "definition": "Especialista en los venenos.",
    "parts": [
      {
        "text": "toxicó",
        "meaning": "veneno",
        "origin": "griego",
        "original": "τοξικόν"
      },
      {
        "text": "logo",
        "meaning": "especialista",
        "origin": "griego",
        "original": "λόγος"
      }
    ]
  },
  {
    "word": "zoografía",
    "definition": "Representación o descripción de los animales.",
    "parts": [
      {
        "text": "zoo",
        "meaning": "animal",
        "origin": "griego",
        "original": "ζῷον"
      },
      {
        "text": "grafía",
        "meaning": "escritura, representación",
        "origin": "griego",
        "original": "γραφία"
      }
    ]
  },
  {
    "word": "zoofobia",
    "definition": "Miedo o aversión relacionado con los animales.",
    "parts": [
      {
        "text": "zoo",
        "meaning": "animal",
        "origin": "griego",
        "original": "ζῷον"
      },
      {
        "text": "fobia",
        "meaning": "miedo, aversión",
        "origin": "griego",
        "original": "φοβία"
      }
    ]
  },
  {
    "word": "zoofilia",
    "definition": "Afinidad o interés por los animales.",
    "parts": [
      {
        "text": "zoo",
        "meaning": "animal",
        "origin": "griego",
        "original": "ζῷον"
      },
      {
        "text": "filia",
        "meaning": "afinidad, amor",
        "origin": "griego",
        "original": "φιλία"
      }
    ]
  },
  {
    "word": "zootecnia",
    "definition": "Técnica relacionada con los animales.",
    "parts": [
      {
        "text": "zoo",
        "meaning": "animal",
        "origin": "griego",
        "original": "ζῷον"
      },
      {
        "text": "tecnia",
        "meaning": "técnica, arte",
        "origin": "griego",
        "original": "τέχνη"
      }
    ]
  },
  {
    "word": "zoólogo",
    "definition": "Especialista en los animales.",
    "parts": [
      {
        "text": "zoó",
        "meaning": "animal",
        "origin": "griego",
        "original": "ζῷον"
      },
      {
        "text": "logo",
        "meaning": "especialista",
        "origin": "griego",
        "original": "λόγος"
      }
    ]
  },
  {
    "word": "zoófilo",
    "definition": "Con afinidad por los animales.",
    "parts": [
      {
        "text": "zoó",
        "meaning": "animal",
        "origin": "griego",
        "original": "ζῷον"
      },
      {
        "text": "filo",
        "meaning": "afinidad",
        "origin": "griego",
        "original": "φίλος"
      }
    ]
  },
  {
    "word": "zoófago",
    "definition": "Que se alimenta de los animales.",
    "parts": [
      {
        "text": "zoó",
        "meaning": "animal",
        "origin": "griego",
        "original": "ζῷον"
      },
      {
        "text": "fago",
        "meaning": "que come",
        "origin": "griego",
        "original": "φαγεῖν"
      }
    ]
  },
  {
    "word": "acrofobia",
    "definition": "Miedo o aversión relacionado con lo más alto.",
    "parts": [
      {
        "text": "acro",
        "meaning": "extremo, altura",
        "origin": "griego",
        "original": "ἄκρον"
      },
      {
        "text": "fobia",
        "meaning": "miedo, aversión",
        "origin": "griego",
        "original": "φοβία"
      }
    ]
  },
  {
    "word": "anemografía",
    "definition": "Representación o descripción de el viento.",
    "parts": [
      {
        "text": "anemo",
        "meaning": "viento",
        "origin": "griego",
        "original": "ἄνεμος"
      },
      {
        "text": "grafía",
        "meaning": "escritura, representación",
        "origin": "griego",
        "original": "γραφία"
      }
    ]
  },
  {
    "word": "anemometría",
    "definition": "Medición relacionada con el viento.",
    "parts": [
      {
        "text": "anemo",
        "meaning": "viento",
        "origin": "griego",
        "original": "ἄνεμος"
      },
      {
        "text": "metría",
        "meaning": "medida",
        "origin": "griego",
        "original": "μετρία"
      }
    ]
  },
  {
    "word": "anemoscopio",
    "definition": "Instrumento para observar el viento.",
    "parts": [
      {
        "text": "anemo",
        "meaning": "viento",
        "origin": "griego",
        "original": "ἄνεμος"
      },
      {
        "text": "scopio",
        "meaning": "instrumento para observar",
        "origin": "griego",
        "original": "σκοπεῖν"
      }
    ]
  },
  {
    "word": "anemógrafo",
    "definition": "Persona o instrumento que representa el viento.",
    "parts": [
      {
        "text": "anemó",
        "meaning": "viento",
        "origin": "griego",
        "original": "ἄνεμος"
      },
      {
        "text": "grafo",
        "meaning": "escritor o trazador",
        "origin": "griego",
        "original": "γράφειν"
      }
    ]
  },
  {
    "word": "anemómetro",
    "definition": "Medida de el viento.",
    "parts": [
      {
        "text": "anemó",
        "meaning": "viento",
        "origin": "griego",
        "original": "ἄνεμος"
      },
      {
        "text": "metro",
        "meaning": "medida",
        "origin": "griego",
        "original": "μέτρον"
      }
    ]
  },
  {
    "word": "anemófilo",
    "definition": "Con afinidad por el viento.",
    "parts": [
      {
        "text": "anemó",
        "meaning": "viento",
        "origin": "griego",
        "original": "ἄνεμος"
      },
      {
        "text": "filo",
        "meaning": "afinidad",
        "origin": "griego",
        "original": "φίλος"
      }
    ]
  },
  {
    "word": "angiología",
    "definition": "Estudio de los vasos.",
    "parts": [
      {
        "text": "angio",
        "meaning": "vaso, conducto",
        "origin": "griego",
        "original": "ἀγγεῖον"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "angiografía",
    "definition": "Representación o descripción de los vasos.",
    "parts": [
      {
        "text": "angio",
        "meaning": "vaso, conducto",
        "origin": "griego",
        "original": "ἀγγεῖον"
      },
      {
        "text": "grafía",
        "meaning": "escritura, representación",
        "origin": "griego",
        "original": "γραφία"
      }
    ]
  },
  {
    "word": "angiogénesis",
    "definition": "Formación de los vasos.",
    "parts": [
      {
        "text": "angio",
        "meaning": "vaso, conducto",
        "origin": "griego",
        "original": "ἀγγεῖον"
      },
      {
        "text": "génesis",
        "meaning": "origen, formación",
        "origin": "griego",
        "original": "γένεσις"
      }
    ]
  },
  {
    "word": "angiólogo",
    "definition": "Especialista en los vasos.",
    "parts": [
      {
        "text": "angió",
        "meaning": "vaso, conducto",
        "origin": "griego",
        "original": "ἀγγεῖον"
      },
      {
        "text": "logo",
        "meaning": "especialista",
        "origin": "griego",
        "original": "λόγος"
      }
    ]
  },
  {
    "word": "arqueólogo",
    "definition": "Especialista en lo antiguo.",
    "parts": [
      {
        "text": "arqueó",
        "meaning": "antiguo",
        "origin": "griego",
        "original": "ἀρχαῖος"
      },
      {
        "text": "logo",
        "meaning": "especialista",
        "origin": "griego",
        "original": "λόγος"
      }
    ]
  },
  {
    "word": "artrología",
    "definition": "Estudio de las articulaciones.",
    "parts": [
      {
        "text": "artro",
        "meaning": "articulación",
        "origin": "griego",
        "original": "ἄρθρον"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "artrografía",
    "definition": "Representación o descripción de las articulaciones.",
    "parts": [
      {
        "text": "artro",
        "meaning": "articulación",
        "origin": "griego",
        "original": "ἄρθρον"
      },
      {
        "text": "grafía",
        "meaning": "escritura, representación",
        "origin": "griego",
        "original": "γραφία"
      }
    ]
  },
  {
    "word": "artropatía",
    "definition": "Afección relacionada con las articulaciones.",
    "parts": [
      {
        "text": "artro",
        "meaning": "articulación",
        "origin": "griego",
        "original": "ἄρθρον"
      },
      {
        "text": "patía",
        "meaning": "afección, padecimiento",
        "origin": "griego",
        "original": "πάθεια"
      }
    ]
  },
  {
    "word": "artroscopia",
    "definition": "Examen u observación de las articulaciones.",
    "parts": [
      {
        "text": "artro",
        "meaning": "articulación",
        "origin": "griego",
        "original": "ἄρθρον"
      },
      {
        "text": "scopia",
        "meaning": "observación, examen",
        "origin": "griego",
        "original": "σκοπία"
      }
    ]
  },
  {
    "word": "artroscopio",
    "definition": "Instrumento para observar las articulaciones.",
    "parts": [
      {
        "text": "artro",
        "meaning": "articulación",
        "origin": "griego",
        "original": "ἄρθρον"
      },
      {
        "text": "scopio",
        "meaning": "instrumento para observar",
        "origin": "griego",
        "original": "σκοπεῖν"
      }
    ]
  },
  {
    "word": "bacteriología",
    "definition": "Estudio de las bacterias.",
    "parts": [
      {
        "text": "bacterio",
        "meaning": "bastoncillo",
        "origin": "griego",
        "original": "βακτηρία"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "bacteriólogo",
    "definition": "Especialista en las bacterias.",
    "parts": [
      {
        "text": "bacterió",
        "meaning": "bastoncillo",
        "origin": "griego",
        "original": "βακτηρία"
      },
      {
        "text": "logo",
        "meaning": "especialista",
        "origin": "griego",
        "original": "λόγος"
      }
    ]
  },
  {
    "word": "cosmología",
    "definition": "Estudio de el universo.",
    "parts": [
      {
        "text": "cosmo",
        "meaning": "orden, universo",
        "origin": "griego",
        "original": "κόσμος"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "cosmografía",
    "definition": "Representación o descripción de el universo.",
    "parts": [
      {
        "text": "cosmo",
        "meaning": "orden, universo",
        "origin": "griego",
        "original": "κόσμος"
      },
      {
        "text": "grafía",
        "meaning": "escritura, representación",
        "origin": "griego",
        "original": "γραφία"
      }
    ]
  },
  {
    "word": "cosmógrafo",
    "definition": "Persona o instrumento que representa el universo.",
    "parts": [
      {
        "text": "cosmó",
        "meaning": "orden, universo",
        "origin": "griego",
        "original": "κόσμος"
      },
      {
        "text": "grafo",
        "meaning": "escritor o trazador",
        "origin": "griego",
        "original": "γράφειν"
      }
    ]
  },
  {
    "word": "cosmólogo",
    "definition": "Especialista en el universo.",
    "parts": [
      {
        "text": "cosmó",
        "meaning": "orden, universo",
        "origin": "griego",
        "original": "κόσμος"
      },
      {
        "text": "logo",
        "meaning": "especialista",
        "origin": "griego",
        "original": "λόγος"
      }
    ]
  },
  {
    "word": "cosmódromo",
    "definition": "Recorrido relacionado con el universo.",
    "parts": [
      {
        "text": "cosmó",
        "meaning": "orden, universo",
        "origin": "griego",
        "original": "κόσμος"
      },
      {
        "text": "dromo",
        "meaning": "carrera, recorrido",
        "origin": "griego",
        "original": "δρόμος"
      }
    ]
  },
  {
    "word": "criptología",
    "definition": "Estudio de lo oculto.",
    "parts": [
      {
        "text": "cripto",
        "meaning": "oculto",
        "origin": "griego",
        "original": "κρυπτός"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "criptografía",
    "definition": "Representación o descripción de lo oculto.",
    "parts": [
      {
        "text": "cripto",
        "meaning": "oculto",
        "origin": "griego",
        "original": "κρυπτός"
      },
      {
        "text": "grafía",
        "meaning": "escritura, representación",
        "origin": "griego",
        "original": "γραφία"
      }
    ]
  },
  {
    "word": "criptógrafo",
    "definition": "Persona o instrumento que representa lo oculto.",
    "parts": [
      {
        "text": "criptó",
        "meaning": "oculto",
        "origin": "griego",
        "original": "κρυπτός"
      },
      {
        "text": "grafo",
        "meaning": "escritor o trazador",
        "origin": "griego",
        "original": "γράφειν"
      }
    ]
  },
  {
    "word": "dactilología",
    "definition": "Estudio de los dedos.",
    "parts": [
      {
        "text": "dactilo",
        "meaning": "dedo",
        "origin": "griego",
        "original": "δάκτυλος"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "dactilografía",
    "definition": "Representación o descripción de los dedos.",
    "parts": [
      {
        "text": "dactilo",
        "meaning": "dedo",
        "origin": "griego",
        "original": "δάκτυλος"
      },
      {
        "text": "grafía",
        "meaning": "escritura, representación",
        "origin": "griego",
        "original": "γραφία"
      }
    ]
  },
  {
    "word": "dactiloscopia",
    "definition": "Examen u observación de los dedos.",
    "parts": [
      {
        "text": "dactilo",
        "meaning": "dedo",
        "origin": "griego",
        "original": "δάκτυλος"
      },
      {
        "text": "scopia",
        "meaning": "observación, examen",
        "origin": "griego",
        "original": "σκοπία"
      }
    ]
  },
  {
    "word": "dactilógrafo",
    "definition": "Persona o instrumento que representa los dedos.",
    "parts": [
      {
        "text": "dactiló",
        "meaning": "dedo",
        "origin": "griego",
        "original": "δάκτυλος"
      },
      {
        "text": "grafo",
        "meaning": "escritor o trazador",
        "origin": "griego",
        "original": "γράφειν"
      }
    ]
  },
  {
    "word": "epigrafía",
    "definition": "Representación o descripción de lo que está encima.",
    "parts": [
      {
        "text": "epi",
        "meaning": "sobre",
        "origin": "griego",
        "original": "ἐπί"
      },
      {
        "text": "grafía",
        "meaning": "escritura, representación",
        "origin": "griego",
        "original": "γραφία"
      }
    ]
  },
  {
    "word": "epigénesis",
    "definition": "Formación de lo que está encima.",
    "parts": [
      {
        "text": "epi",
        "meaning": "sobre",
        "origin": "griego",
        "original": "ἐπί"
      },
      {
        "text": "génesis",
        "meaning": "origen, formación",
        "origin": "griego",
        "original": "γένεσις"
      }
    ]
  },
  {
    "word": "epílogo",
    "definition": "Especialista en lo que está encima.",
    "parts": [
      {
        "text": "epí",
        "meaning": "sobre",
        "origin": "griego",
        "original": "ἐπί"
      },
      {
        "text": "logo",
        "meaning": "especialista",
        "origin": "griego",
        "original": "λόγος"
      }
    ]
  },
  {
    "word": "eritrofobia",
    "definition": "Miedo o aversión relacionado con el color rojo.",
    "parts": [
      {
        "text": "eritro",
        "meaning": "rojo",
        "origin": "griego",
        "original": "ἐρυθρός"
      },
      {
        "text": "fobia",
        "meaning": "miedo, aversión",
        "origin": "griego",
        "original": "φοβία"
      }
    ]
  },
  {
    "word": "espeleología",
    "definition": "Estudio de las cuevas.",
    "parts": [
      {
        "text": "espeleo",
        "meaning": "cueva",
        "origin": "griego",
        "original": "σπήλαιον"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "espeleólogo",
    "definition": "Especialista en las cuevas.",
    "parts": [
      {
        "text": "espeleó",
        "meaning": "cueva",
        "origin": "griego",
        "original": "σπήλαιον"
      },
      {
        "text": "logo",
        "meaning": "especialista",
        "origin": "griego",
        "original": "λόγος"
      }
    ]
  },
  {
    "word": "estenografía",
    "definition": "Representación o descripción de lo estrecho.",
    "parts": [
      {
        "text": "esteno",
        "meaning": "estrecho",
        "origin": "griego",
        "original": "στενός"
      },
      {
        "text": "grafía",
        "meaning": "escritura, representación",
        "origin": "griego",
        "original": "γραφία"
      }
    ]
  },
  {
    "word": "estenógrafo",
    "definition": "Persona o instrumento que representa lo estrecho.",
    "parts": [
      {
        "text": "estenó",
        "meaning": "estrecho",
        "origin": "griego",
        "original": "στενός"
      },
      {
        "text": "grafo",
        "meaning": "escritor o trazador",
        "origin": "griego",
        "original": "γράφειν"
      }
    ]
  },
  {
    "word": "eurocracia",
    "definition": "Sistema de poder relacionado con Europa.",
    "parts": [
      {
        "text": "euro",
        "meaning": "Europa",
        "origin": "griego",
        "original": "Εὐρώπη"
      },
      {
        "text": "cracia",
        "meaning": "poder, gobierno",
        "origin": "griego",
        "original": "κράτος"
      }
    ]
  },
  {
    "word": "histología",
    "definition": "Estudio de los tejidos.",
    "parts": [
      {
        "text": "histo",
        "meaning": "tejido",
        "origin": "griego",
        "original": "ἱστός"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "histólogo",
    "definition": "Especialista en los tejidos.",
    "parts": [
      {
        "text": "histó",
        "meaning": "tejido",
        "origin": "griego",
        "original": "ἱστός"
      },
      {
        "text": "logo",
        "meaning": "especialista",
        "origin": "griego",
        "original": "λόγος"
      }
    ]
  },
  {
    "word": "homeopatía",
    "definition": "Afección relacionada con lo semejante.",
    "parts": [
      {
        "text": "homeo",
        "meaning": "semejante",
        "origin": "griego",
        "original": "ὅμοιος"
      },
      {
        "text": "patía",
        "meaning": "afección, padecimiento",
        "origin": "griego",
        "original": "πάθεια"
      }
    ]
  },
  {
    "word": "isometría",
    "definition": "Medición relacionada con lo igual.",
    "parts": [
      {
        "text": "iso",
        "meaning": "igual",
        "origin": "griego",
        "original": "ἴσος"
      },
      {
        "text": "metría",
        "meaning": "medida",
        "origin": "griego",
        "original": "μετρία"
      }
    ]
  },
  {
    "word": "isonomía",
    "definition": "Conocimiento o sistema aplicado a lo igual.",
    "parts": [
      {
        "text": "iso",
        "meaning": "igual",
        "origin": "griego",
        "original": "ἴσος"
      },
      {
        "text": "nomía",
        "meaning": "norma, orden",
        "origin": "griego",
        "original": "νομία"
      }
    ]
  },
  {
    "word": "isofonía",
    "definition": "Sonido relacionado con lo igual.",
    "parts": [
      {
        "text": "iso",
        "meaning": "igual",
        "origin": "griego",
        "original": "ἴσος"
      },
      {
        "text": "fonía",
        "meaning": "sonido, voz",
        "origin": "griego",
        "original": "φωνή"
      }
    ]
  },
  {
    "word": "isófago",
    "definition": "Que se alimenta de lo igual.",
    "parts": [
      {
        "text": "isó",
        "meaning": "igual",
        "origin": "griego",
        "original": "ἴσος"
      },
      {
        "text": "fago",
        "meaning": "que come",
        "origin": "griego",
        "original": "φαγεῖν"
      }
    ]
  },
  {
    "word": "isófono",
    "definition": "Sonido relacionado con lo igual.",
    "parts": [
      {
        "text": "isó",
        "meaning": "igual",
        "origin": "griego",
        "original": "ἴσος"
      },
      {
        "text": "fono",
        "meaning": "sonido",
        "origin": "griego",
        "original": "φωνή"
      }
    ]
  },
  {
    "word": "miología",
    "definition": "Estudio de los músculos.",
    "parts": [
      {
        "text": "mio",
        "meaning": "músculo",
        "origin": "griego",
        "original": "μῦς"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "necrología",
    "definition": "Estudio de la muerte.",
    "parts": [
      {
        "text": "necro",
        "meaning": "muerte",
        "origin": "griego",
        "original": "νεκρός"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "necrofilia",
    "definition": "Afinidad o interés por la muerte.",
    "parts": [
      {
        "text": "necro",
        "meaning": "muerte",
        "origin": "griego",
        "original": "νεκρός"
      },
      {
        "text": "filia",
        "meaning": "afinidad, amor",
        "origin": "griego",
        "original": "φιλία"
      }
    ]
  },
  {
    "word": "necroscopia",
    "definition": "Examen u observación de la muerte.",
    "parts": [
      {
        "text": "necro",
        "meaning": "muerte",
        "origin": "griego",
        "original": "νεκρός"
      },
      {
        "text": "scopia",
        "meaning": "observación, examen",
        "origin": "griego",
        "original": "σκοπία"
      }
    ]
  },
  {
    "word": "necromancia",
    "definition": "Adivinación relacionada con la muerte.",
    "parts": [
      {
        "text": "necro",
        "meaning": "muerte",
        "origin": "griego",
        "original": "νεκρός"
      },
      {
        "text": "mancia",
        "meaning": "adivinación",
        "origin": "griego",
        "original": "μαντεία"
      }
    ]
  },
  {
    "word": "necrófilo",
    "definition": "Con afinidad por la muerte.",
    "parts": [
      {
        "text": "necró",
        "meaning": "muerte",
        "origin": "griego",
        "original": "νεκρός"
      },
      {
        "text": "filo",
        "meaning": "afinidad",
        "origin": "griego",
        "original": "φίλος"
      }
    ]
  },
  {
    "word": "necróforo",
    "definition": "Que porta la muerte.",
    "parts": [
      {
        "text": "necró",
        "meaning": "muerte",
        "origin": "griego",
        "original": "νεκρός"
      },
      {
        "text": "foro",
        "meaning": "que lleva",
        "origin": "griego",
        "original": "φέρειν"
      }
    ]
  },
  {
    "word": "neología",
    "definition": "Estudio de lo nuevo.",
    "parts": [
      {
        "text": "neo",
        "meaning": "nuevo",
        "origin": "griego",
        "original": "νέος"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "petrología",
    "definition": "Estudio de las piedras.",
    "parts": [
      {
        "text": "petro",
        "meaning": "piedra",
        "origin": "griego",
        "original": "πέτρα"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "petrografía",
    "definition": "Representación o descripción de las piedras.",
    "parts": [
      {
        "text": "petro",
        "meaning": "piedra",
        "origin": "griego",
        "original": "πέτρα"
      },
      {
        "text": "grafía",
        "meaning": "escritura, representación",
        "origin": "griego",
        "original": "γραφία"
      }
    ]
  },
  {
    "word": "pirología",
    "definition": "Estudio de el fuego.",
    "parts": [
      {
        "text": "piro",
        "meaning": "fuego",
        "origin": "griego",
        "original": "πῦρ"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "pirometría",
    "definition": "Medición relacionada con el fuego.",
    "parts": [
      {
        "text": "piro",
        "meaning": "fuego",
        "origin": "griego",
        "original": "πῦρ"
      },
      {
        "text": "metría",
        "meaning": "medida",
        "origin": "griego",
        "original": "μετρία"
      }
    ]
  },
  {
    "word": "piromancia",
    "definition": "Adivinación relacionada con el fuego.",
    "parts": [
      {
        "text": "piro",
        "meaning": "fuego",
        "origin": "griego",
        "original": "πῦρ"
      },
      {
        "text": "mancia",
        "meaning": "adivinación",
        "origin": "griego",
        "original": "μαντεία"
      }
    ]
  },
  {
    "word": "pirotecnia",
    "definition": "Técnica relacionada con el fuego.",
    "parts": [
      {
        "text": "piro",
        "meaning": "fuego",
        "origin": "griego",
        "original": "πῦρ"
      },
      {
        "text": "tecnia",
        "meaning": "técnica, arte",
        "origin": "griego",
        "original": "τέχνη"
      }
    ]
  },
  {
    "word": "pirómetro",
    "definition": "Medida de el fuego.",
    "parts": [
      {
        "text": "piró",
        "meaning": "fuego",
        "origin": "griego",
        "original": "πῦρ"
      },
      {
        "text": "metro",
        "meaning": "medida",
        "origin": "griego",
        "original": "μέτρον"
      }
    ]
  },
  {
    "word": "pirógeno",
    "definition": "Que produce o genera el fuego.",
    "parts": [
      {
        "text": "piró",
        "meaning": "fuego",
        "origin": "griego",
        "original": "πῦρ"
      },
      {
        "text": "geno",
        "meaning": "que produce",
        "origin": "griego",
        "original": "-γενής"
      }
    ]
  },
  {
    "word": "plutocracia",
    "definition": "Sistema de poder relacionado con la riqueza.",
    "parts": [
      {
        "text": "pluto",
        "meaning": "riqueza",
        "origin": "griego",
        "original": "πλοῦτος"
      },
      {
        "text": "cracia",
        "meaning": "poder, gobierno",
        "origin": "griego",
        "original": "κράτος"
      }
    ]
  },
  {
    "word": "poligrafía",
    "definition": "Representación o descripción de lo numeroso.",
    "parts": [
      {
        "text": "poli",
        "meaning": "mucho, numeroso",
        "origin": "griego",
        "original": "πολύς"
      },
      {
        "text": "grafía",
        "meaning": "escritura, representación",
        "origin": "griego",
        "original": "γραφία"
      }
    ]
  },
  {
    "word": "polimetría",
    "definition": "Medición relacionada con lo numeroso.",
    "parts": [
      {
        "text": "poli",
        "meaning": "mucho, numeroso",
        "origin": "griego",
        "original": "πολύς"
      },
      {
        "text": "metría",
        "meaning": "medida",
        "origin": "griego",
        "original": "μετρία"
      }
    ]
  },
  {
    "word": "polifonía",
    "definition": "Sonido relacionado con lo numeroso.",
    "parts": [
      {
        "text": "poli",
        "meaning": "mucho, numeroso",
        "origin": "griego",
        "original": "πολύς"
      },
      {
        "text": "fonía",
        "meaning": "sonido, voz",
        "origin": "griego",
        "original": "φωνή"
      }
    ]
  },
  {
    "word": "andrología",
    "definition": "Estudio de los hombres.",
    "parts": [
      {
        "text": "andro",
        "meaning": "hombre",
        "origin": "griego",
        "original": "ἀνήρ"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "androfobia",
    "definition": "Miedo o aversión relacionado con los hombres.",
    "parts": [
      {
        "text": "andro",
        "meaning": "hombre",
        "origin": "griego",
        "original": "ἀνήρ"
      },
      {
        "text": "fobia",
        "meaning": "miedo, aversión",
        "origin": "griego",
        "original": "φοβία"
      }
    ]
  },
  {
    "word": "androgénesis",
    "definition": "Formación de los hombres.",
    "parts": [
      {
        "text": "andro",
        "meaning": "hombre",
        "origin": "griego",
        "original": "ἀνήρ"
      },
      {
        "text": "génesis",
        "meaning": "origen, formación",
        "origin": "griego",
        "original": "γένεσις"
      }
    ]
  },
  {
    "word": "andrólogo",
    "definition": "Especialista en los hombres.",
    "parts": [
      {
        "text": "andró",
        "meaning": "hombre",
        "origin": "griego",
        "original": "ἀνήρ"
      },
      {
        "text": "logo",
        "meaning": "especialista",
        "origin": "griego",
        "original": "λόγος"
      }
    ]
  },
  {
    "word": "andrógeno",
    "definition": "Que produce o genera los hombres.",
    "parts": [
      {
        "text": "andró",
        "meaning": "hombre",
        "origin": "griego",
        "original": "ἀνήρ"
      },
      {
        "text": "geno",
        "meaning": "que produce",
        "origin": "griego",
        "original": "-γενής"
      }
    ]
  },
  {
    "word": "aracnología",
    "definition": "Estudio de las arañas.",
    "parts": [
      {
        "text": "aracno",
        "meaning": "araña",
        "origin": "griego",
        "original": "ἀράχνη"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "aracnólogo",
    "definition": "Especialista en las arañas.",
    "parts": [
      {
        "text": "aracnó",
        "meaning": "araña",
        "origin": "griego",
        "original": "ἀράχνη"
      },
      {
        "text": "logo",
        "meaning": "especialista",
        "origin": "griego",
        "original": "λόγος"
      }
    ]
  },
  {
    "word": "audiología",
    "definition": "Estudio de la audición.",
    "parts": [
      {
        "text": "audio",
        "meaning": "oír",
        "origin": "latín",
        "original": "audire"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "audiometría",
    "definition": "Medición relacionada con la audición.",
    "parts": [
      {
        "text": "audio",
        "meaning": "oír",
        "origin": "latín",
        "original": "audire"
      },
      {
        "text": "metría",
        "meaning": "medida",
        "origin": "griego",
        "original": "μετρία"
      }
    ]
  },
  {
    "word": "audiólogo",
    "definition": "Especialista en la audición.",
    "parts": [
      {
        "text": "audió",
        "meaning": "oír",
        "origin": "latín",
        "original": "audire"
      },
      {
        "text": "logo",
        "meaning": "especialista",
        "origin": "griego",
        "original": "λόγος"
      }
    ]
  },
  {
    "word": "audiómetro",
    "definition": "Medida de la audición.",
    "parts": [
      {
        "text": "audió",
        "meaning": "oír",
        "origin": "latín",
        "original": "audire"
      },
      {
        "text": "metro",
        "meaning": "medida",
        "origin": "griego",
        "original": "μέτρον"
      }
    ]
  },
  {
    "word": "audiófono",
    "definition": "Sonido relacionado con la audición.",
    "parts": [
      {
        "text": "audió",
        "meaning": "oír",
        "origin": "latín",
        "original": "audire"
      },
      {
        "text": "fono",
        "meaning": "sonido",
        "origin": "griego",
        "original": "φωνή"
      }
    ]
  },
  {
    "word": "broncoscopia",
    "definition": "Examen u observación de los bronquios.",
    "parts": [
      {
        "text": "bronco",
        "meaning": "tráquea",
        "origin": "griego",
        "original": "βρόγχος"
      },
      {
        "text": "scopia",
        "meaning": "observación, examen",
        "origin": "griego",
        "original": "σκοπία"
      }
    ]
  },
  {
    "word": "broncoscopio",
    "definition": "Instrumento para observar los bronquios.",
    "parts": [
      {
        "text": "bronco",
        "meaning": "tráquea",
        "origin": "griego",
        "original": "βρόγχος"
      },
      {
        "text": "scopio",
        "meaning": "instrumento para observar",
        "origin": "griego",
        "original": "σκοπεῖν"
      }
    ]
  },
  {
    "word": "caligrafía",
    "definition": "Representación o descripción de lo bello.",
    "parts": [
      {
        "text": "cali",
        "meaning": "belleza",
        "origin": "griego",
        "original": "κάλλος"
      },
      {
        "text": "grafía",
        "meaning": "escritura, representación",
        "origin": "griego",
        "original": "γραφία"
      }
    ]
  },
  {
    "word": "cinefilia",
    "definition": "Afinidad o interés por el movimiento.",
    "parts": [
      {
        "text": "cine",
        "meaning": "movimiento",
        "origin": "griego",
        "original": "κίνησις"
      },
      {
        "text": "filia",
        "meaning": "afinidad, amor",
        "origin": "griego",
        "original": "φιλία"
      }
    ]
  },
  {
    "word": "cineteca",
    "definition": "Colección o depósito de el movimiento.",
    "parts": [
      {
        "text": "cine",
        "meaning": "movimiento",
        "origin": "griego",
        "original": "κίνησις"
      },
      {
        "text": "teca",
        "meaning": "depósito, colección",
        "origin": "griego",
        "original": "θήκη"
      }
    ]
  },
  {
    "word": "cinéfilo",
    "definition": "Con afinidad por el movimiento.",
    "parts": [
      {
        "text": "ciné",
        "meaning": "movimiento",
        "origin": "griego",
        "original": "κίνησις"
      },
      {
        "text": "filo",
        "meaning": "afinidad",
        "origin": "griego",
        "original": "φίλος"
      }
    ]
  },
  {
    "word": "cistoscopia",
    "definition": "Examen u observación de los sacos.",
    "parts": [
      {
        "text": "cisto",
        "meaning": "vejiga, saco",
        "origin": "griego",
        "original": "κύστις"
      },
      {
        "text": "scopia",
        "meaning": "observación, examen",
        "origin": "griego",
        "original": "σκοπία"
      }
    ]
  },
  {
    "word": "cistoscopio",
    "definition": "Instrumento para observar los sacos.",
    "parts": [
      {
        "text": "cisto",
        "meaning": "vejiga, saco",
        "origin": "griego",
        "original": "κύστις"
      },
      {
        "text": "scopio",
        "meaning": "instrumento para observar",
        "origin": "griego",
        "original": "σκοπεῖν"
      }
    ]
  },
  {
    "word": "climatología",
    "definition": "Estudio de el clima.",
    "parts": [
      {
        "text": "climato",
        "meaning": "inclinación, clima",
        "origin": "griego",
        "original": "κλίμα"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "climatólogo",
    "definition": "Especialista en el clima.",
    "parts": [
      {
        "text": "climató",
        "meaning": "inclinación, clima",
        "origin": "griego",
        "original": "κλίμα"
      },
      {
        "text": "logo",
        "meaning": "especialista",
        "origin": "griego",
        "original": "λόγος"
      }
    ]
  },
  {
    "word": "clorófilo",
    "definition": "Con afinidad por el color verde.",
    "parts": [
      {
        "text": "cloró",
        "meaning": "verde",
        "origin": "griego",
        "original": "χλωρός"
      },
      {
        "text": "filo",
        "meaning": "afinidad",
        "origin": "griego",
        "original": "φίλος"
      }
    ]
  },
  {
    "word": "crioterapia",
    "definition": "Tratamiento relacionado con el frío.",
    "parts": [
      {
        "text": "crio",
        "meaning": "frío",
        "origin": "griego",
        "original": "κρύος"
      },
      {
        "text": "terapia",
        "meaning": "tratamiento",
        "origin": "griego",
        "original": "θεραπεία"
      }
    ]
  },
  {
    "word": "crioscopia",
    "definition": "Examen u observación de el frío.",
    "parts": [
      {
        "text": "crio",
        "meaning": "frío",
        "origin": "griego",
        "original": "κρύος"
      },
      {
        "text": "scopia",
        "meaning": "observación, examen",
        "origin": "griego",
        "original": "σκοπία"
      }
    ]
  },
  {
    "word": "criogenia",
    "definition": "Producción relacionada con el frío.",
    "parts": [
      {
        "text": "crio",
        "meaning": "frío",
        "origin": "griego",
        "original": "κρύος"
      },
      {
        "text": "genia",
        "meaning": "origen, producción",
        "origin": "griego",
        "original": "γένεσις"
      }
    ]
  },
  {
    "word": "dermatólogo",
    "definition": "Especialista en la piel.",
    "parts": [
      {
        "text": "dermató",
        "meaning": "piel",
        "origin": "griego",
        "original": "δέρμα"
      },
      {
        "text": "logo",
        "meaning": "especialista",
        "origin": "griego",
        "original": "λόγος"
      }
    ]
  },
  {
    "word": "diafonía",
    "definition": "Sonido relacionado con el paso.",
    "parts": [
      {
        "text": "dia",
        "meaning": "a través de",
        "origin": "griego",
        "original": "διά"
      },
      {
        "text": "fonía",
        "meaning": "sonido, voz",
        "origin": "griego",
        "original": "φωνή"
      }
    ]
  },
  {
    "word": "disgrafía",
    "definition": "Representación o descripción de lo difícil.",
    "parts": [
      {
        "text": "dis",
        "meaning": "dificultad",
        "origin": "griego",
        "original": "δυσ-"
      },
      {
        "text": "grafía",
        "meaning": "escritura, representación",
        "origin": "griego",
        "original": "γραφία"
      }
    ]
  },
  {
    "word": "disfonía",
    "definition": "Sonido relacionado con lo difícil.",
    "parts": [
      {
        "text": "dis",
        "meaning": "dificultad",
        "origin": "griego",
        "original": "δυσ-"
      },
      {
        "text": "fonía",
        "meaning": "sonido, voz",
        "origin": "griego",
        "original": "φωνή"
      }
    ]
  },
  {
    "word": "egofonía",
    "definition": "Sonido relacionado con el yo.",
    "parts": [
      {
        "text": "ego",
        "meaning": "yo",
        "origin": "griego",
        "original": "ἐγώ"
      },
      {
        "text": "fonía",
        "meaning": "sonido, voz",
        "origin": "griego",
        "original": "φωνή"
      }
    ]
  },
  {
    "word": "encefalografía",
    "definition": "Representación o descripción de el cerebro.",
    "parts": [
      {
        "text": "encefalo",
        "meaning": "cerebro",
        "origin": "griego",
        "original": "ἐγκέφαλος"
      },
      {
        "text": "grafía",
        "meaning": "escritura, representación",
        "origin": "griego",
        "original": "γραφία"
      }
    ]
  },
  {
    "word": "encefalopatía",
    "definition": "Afección relacionada con el cerebro.",
    "parts": [
      {
        "text": "encefalo",
        "meaning": "cerebro",
        "origin": "griego",
        "original": "ἐγκέφαλος"
      },
      {
        "text": "patía",
        "meaning": "afección, padecimiento",
        "origin": "griego",
        "original": "πάθεια"
      }
    ]
  },
  {
    "word": "ergometría",
    "definition": "Medición relacionada con el trabajo.",
    "parts": [
      {
        "text": "ergo",
        "meaning": "trabajo",
        "origin": "griego",
        "original": "ἔργον"
      },
      {
        "text": "metría",
        "meaning": "medida",
        "origin": "griego",
        "original": "μετρία"
      }
    ]
  },
  {
    "word": "ergoterapia",
    "definition": "Tratamiento relacionado con el trabajo.",
    "parts": [
      {
        "text": "ergo",
        "meaning": "trabajo",
        "origin": "griego",
        "original": "ἔργον"
      },
      {
        "text": "terapia",
        "meaning": "tratamiento",
        "origin": "griego",
        "original": "θεραπεία"
      }
    ]
  },
  {
    "word": "ergonomía",
    "definition": "Conocimiento o sistema aplicado a el trabajo.",
    "parts": [
      {
        "text": "ergo",
        "meaning": "trabajo",
        "origin": "griego",
        "original": "ἔργον"
      },
      {
        "text": "nomía",
        "meaning": "norma, orden",
        "origin": "griego",
        "original": "νομία"
      }
    ]
  },
  {
    "word": "ergómetro",
    "definition": "Medida de el trabajo.",
    "parts": [
      {
        "text": "ergó",
        "meaning": "trabajo",
        "origin": "griego",
        "original": "ἔργον"
      },
      {
        "text": "metro",
        "meaning": "medida",
        "origin": "griego",
        "original": "μέτρον"
      }
    ]
  },
  {
    "word": "estereografía",
    "definition": "Representación o descripción de lo sólido.",
    "parts": [
      {
        "text": "estereo",
        "meaning": "sólido",
        "origin": "griego",
        "original": "στερεός"
      },
      {
        "text": "grafía",
        "meaning": "escritura, representación",
        "origin": "griego",
        "original": "γραφία"
      }
    ]
  },
  {
    "word": "estereometría",
    "definition": "Medición relacionada con lo sólido.",
    "parts": [
      {
        "text": "estereo",
        "meaning": "sólido",
        "origin": "griego",
        "original": "στερεός"
      },
      {
        "text": "metría",
        "meaning": "medida",
        "origin": "griego",
        "original": "μετρία"
      }
    ]
  },
  {
    "word": "estereoscopia",
    "definition": "Examen u observación de lo sólido.",
    "parts": [
      {
        "text": "estereo",
        "meaning": "sólido",
        "origin": "griego",
        "original": "στερεός"
      },
      {
        "text": "scopia",
        "meaning": "observación, examen",
        "origin": "griego",
        "original": "σκοπία"
      }
    ]
  },
  {
    "word": "estereoscopio",
    "definition": "Instrumento para observar lo sólido.",
    "parts": [
      {
        "text": "estereo",
        "meaning": "sólido",
        "origin": "griego",
        "original": "στερεός"
      },
      {
        "text": "scopio",
        "meaning": "instrumento para observar",
        "origin": "griego",
        "original": "σκοπεῖν"
      }
    ]
  },
  {
    "word": "estereofonía",
    "definition": "Sonido relacionado con lo sólido.",
    "parts": [
      {
        "text": "estereo",
        "meaning": "sólido",
        "origin": "griego",
        "original": "στερεός"
      },
      {
        "text": "fonía",
        "meaning": "sonido, voz",
        "origin": "griego",
        "original": "φωνή"
      }
    ]
  },
  {
    "word": "estereógrafo",
    "definition": "Persona o instrumento que representa lo sólido.",
    "parts": [
      {
        "text": "estereó",
        "meaning": "sólido",
        "origin": "griego",
        "original": "στερεός"
      },
      {
        "text": "grafo",
        "meaning": "escritor o trazador",
        "origin": "griego",
        "original": "γράφειν"
      }
    ]
  },
  {
    "word": "estetoscopia",
    "definition": "Examen u observación de la sensación.",
    "parts": [
      {
        "text": "esteto",
        "meaning": "sensación",
        "origin": "griego",
        "original": "αἴσθησις"
      },
      {
        "text": "scopia",
        "meaning": "observación, examen",
        "origin": "griego",
        "original": "σκοπία"
      }
    ]
  },
  {
    "word": "estetoscopio",
    "definition": "Instrumento para observar la sensación.",
    "parts": [
      {
        "text": "esteto",
        "meaning": "sensación",
        "origin": "griego",
        "original": "αἴσθησις"
      },
      {
        "text": "scopio",
        "meaning": "instrumento para observar",
        "origin": "griego",
        "original": "σκοπεῖν"
      }
    ]
  },
  {
    "word": "etiología",
    "definition": "Estudio de la causa.",
    "parts": [
      {
        "text": "etio",
        "meaning": "causa",
        "origin": "griego",
        "original": "αἰτία"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "farmacología",
    "definition": "Estudio de los medicamentos.",
    "parts": [
      {
        "text": "farmaco",
        "meaning": "medicamento",
        "origin": "griego",
        "original": "φάρμακον"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "farmacoterapia",
    "definition": "Tratamiento relacionado con los medicamentos.",
    "parts": [
      {
        "text": "farmaco",
        "meaning": "medicamento",
        "origin": "griego",
        "original": "φάρμακον"
      },
      {
        "text": "terapia",
        "meaning": "tratamiento",
        "origin": "griego",
        "original": "θεραπεία"
      }
    ]
  },
  {
    "word": "farmacólogo",
    "definition": "Especialista en los medicamentos.",
    "parts": [
      {
        "text": "farmacó",
        "meaning": "medicamento",
        "origin": "griego",
        "original": "φάρμακον"
      },
      {
        "text": "logo",
        "meaning": "especialista",
        "origin": "griego",
        "original": "λόγος"
      }
    ]
  },
  {
    "word": "filólogo",
    "definition": "Especialista en la afinidad.",
    "parts": [
      {
        "text": "filó",
        "meaning": "amor, afinidad",
        "origin": "griego",
        "original": "φίλος"
      },
      {
        "text": "logo",
        "meaning": "especialista",
        "origin": "griego",
        "original": "λόγος"
      }
    ]
  },
  {
    "word": "fisiología",
    "definition": "Estudio de la naturaleza.",
    "parts": [
      {
        "text": "fisio",
        "meaning": "naturaleza",
        "origin": "griego",
        "original": "φύσις"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "fisiografía",
    "definition": "Representación o descripción de la naturaleza.",
    "parts": [
      {
        "text": "fisio",
        "meaning": "naturaleza",
        "origin": "griego",
        "original": "φύσις"
      },
      {
        "text": "grafía",
        "meaning": "escritura, representación",
        "origin": "griego",
        "original": "γραφία"
      }
    ]
  },
  {
    "word": "fisioterapia",
    "definition": "Tratamiento relacionado con la naturaleza.",
    "parts": [
      {
        "text": "fisio",
        "meaning": "naturaleza",
        "origin": "griego",
        "original": "φύσις"
      },
      {
        "text": "terapia",
        "meaning": "tratamiento",
        "origin": "griego",
        "original": "θεραπεία"
      }
    ]
  },
  {
    "word": "fisionomía",
    "definition": "Conocimiento o sistema aplicado a la naturaleza.",
    "parts": [
      {
        "text": "fisio",
        "meaning": "naturaleza",
        "origin": "griego",
        "original": "φύσις"
      },
      {
        "text": "nomía",
        "meaning": "norma, orden",
        "origin": "griego",
        "original": "νομία"
      }
    ]
  },
  {
    "word": "fisiocracia",
    "definition": "Sistema de poder relacionado con la naturaleza.",
    "parts": [
      {
        "text": "fisio",
        "meaning": "naturaleza",
        "origin": "griego",
        "original": "φύσις"
      },
      {
        "text": "cracia",
        "meaning": "poder, gobierno",
        "origin": "griego",
        "original": "κράτος"
      }
    ]
  },
  {
    "word": "fisiólogo",
    "definition": "Especialista en la naturaleza.",
    "parts": [
      {
        "text": "fisió",
        "meaning": "naturaleza",
        "origin": "griego",
        "original": "φύσις"
      },
      {
        "text": "logo",
        "meaning": "especialista",
        "origin": "griego",
        "original": "λόγος"
      }
    ]
  },
  {
    "word": "frenología",
    "definition": "Estudio de la mente.",
    "parts": [
      {
        "text": "freno",
        "meaning": "mente",
        "origin": "griego",
        "original": "φρήν"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "frenopatía",
    "definition": "Afección relacionada con la mente.",
    "parts": [
      {
        "text": "freno",
        "meaning": "mente",
        "origin": "griego",
        "original": "φρήν"
      },
      {
        "text": "patía",
        "meaning": "afección, padecimiento",
        "origin": "griego",
        "original": "πάθεια"
      }
    ]
  },
  {
    "word": "frenólogo",
    "definition": "Especialista en la mente.",
    "parts": [
      {
        "text": "frenó",
        "meaning": "mente",
        "origin": "griego",
        "original": "φρήν"
      },
      {
        "text": "logo",
        "meaning": "especialista",
        "origin": "griego",
        "original": "λόγος"
      }
    ]
  },
  {
    "word": "galactómetro",
    "definition": "Medida de la leche.",
    "parts": [
      {
        "text": "galactó",
        "meaning": "leche",
        "origin": "griego",
        "original": "γάλα"
      },
      {
        "text": "metro",
        "meaning": "medida",
        "origin": "griego",
        "original": "μέτρον"
      }
    ]
  },
  {
    "word": "galactógeno",
    "definition": "Que produce o genera la leche.",
    "parts": [
      {
        "text": "galactó",
        "meaning": "leche",
        "origin": "griego",
        "original": "γάλα"
      },
      {
        "text": "geno",
        "meaning": "que produce",
        "origin": "griego",
        "original": "-γενής"
      }
    ]
  },
  {
    "word": "galactóforo",
    "definition": "Que porta la leche.",
    "parts": [
      {
        "text": "galactó",
        "meaning": "leche",
        "origin": "griego",
        "original": "γάλα"
      },
      {
        "text": "foro",
        "meaning": "que lleva",
        "origin": "griego",
        "original": "φέρειν"
      }
    ]
  },
  {
    "word": "glucómetro",
    "definition": "Medida de lo dulce.",
    "parts": [
      {
        "text": "glucó",
        "meaning": "dulce",
        "origin": "griego",
        "original": "γλυκύς"
      },
      {
        "text": "metro",
        "meaning": "medida",
        "origin": "griego",
        "original": "μέτρον"
      }
    ]
  },
  {
    "word": "glucógeno",
    "definition": "Que produce o genera lo dulce.",
    "parts": [
      {
        "text": "glucó",
        "meaning": "dulce",
        "origin": "griego",
        "original": "γλυκύς"
      },
      {
        "text": "geno",
        "meaning": "que produce",
        "origin": "griego",
        "original": "-γενής"
      }
    ]
  },
  {
    "word": "higrometría",
    "definition": "Medición relacionada con la humedad.",
    "parts": [
      {
        "text": "higro",
        "meaning": "humedad",
        "origin": "griego",
        "original": "ὑγρός"
      },
      {
        "text": "metría",
        "meaning": "medida",
        "origin": "griego",
        "original": "μετρία"
      }
    ]
  },
  {
    "word": "higroscopia",
    "definition": "Examen u observación de la humedad.",
    "parts": [
      {
        "text": "higro",
        "meaning": "humedad",
        "origin": "griego",
        "original": "ὑγρός"
      },
      {
        "text": "scopia",
        "meaning": "observación, examen",
        "origin": "griego",
        "original": "σκοπία"
      }
    ]
  },
  {
    "word": "higroscopio",
    "definition": "Instrumento para observar la humedad.",
    "parts": [
      {
        "text": "higro",
        "meaning": "humedad",
        "origin": "griego",
        "original": "ὑγρός"
      },
      {
        "text": "scopio",
        "meaning": "instrumento para observar",
        "origin": "griego",
        "original": "σκοπεῖν"
      }
    ]
  },
  {
    "word": "higrómetro",
    "definition": "Medida de la humedad.",
    "parts": [
      {
        "text": "higró",
        "meaning": "humedad",
        "origin": "griego",
        "original": "ὑγρός"
      },
      {
        "text": "metro",
        "meaning": "medida",
        "origin": "griego",
        "original": "μέτρον"
      }
    ]
  },
  {
    "word": "higrófilo",
    "definition": "Con afinidad por la humedad.",
    "parts": [
      {
        "text": "higró",
        "meaning": "humedad",
        "origin": "griego",
        "original": "ὑγρός"
      },
      {
        "text": "filo",
        "meaning": "afinidad",
        "origin": "griego",
        "original": "φίλος"
      }
    ]
  },
  {
    "word": "holografía",
    "definition": "Representación o descripción de el conjunto.",
    "parts": [
      {
        "text": "holo",
        "meaning": "todo, entero",
        "origin": "griego",
        "original": "ὅλος"
      },
      {
        "text": "grafía",
        "meaning": "escritura, representación",
        "origin": "griego",
        "original": "γραφία"
      }
    ]
  },
  {
    "word": "hológrafo",
    "definition": "Persona o instrumento que representa el conjunto.",
    "parts": [
      {
        "text": "holó",
        "meaning": "todo, entero",
        "origin": "griego",
        "original": "ὅλος"
      },
      {
        "text": "grafo",
        "meaning": "escritor o trazador",
        "origin": "griego",
        "original": "γράφειν"
      }
    ]
  },
  {
    "word": "holómetro",
    "definition": "Medida de el conjunto.",
    "parts": [
      {
        "text": "holó",
        "meaning": "todo, entero",
        "origin": "griego",
        "original": "ὅλος"
      },
      {
        "text": "metro",
        "meaning": "medida",
        "origin": "griego",
        "original": "μέτρον"
      }
    ]
  },
  {
    "word": "homología",
    "definition": "Estudio de lo igual.",
    "parts": [
      {
        "text": "homo",
        "meaning": "igual",
        "origin": "griego",
        "original": "ὁμός"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "homografía",
    "definition": "Representación o descripción de lo igual.",
    "parts": [
      {
        "text": "homo",
        "meaning": "igual",
        "origin": "griego",
        "original": "ὁμός"
      },
      {
        "text": "grafía",
        "meaning": "escritura, representación",
        "origin": "griego",
        "original": "γραφία"
      }
    ]
  },
  {
    "word": "homofonía",
    "definition": "Sonido relacionado con lo igual.",
    "parts": [
      {
        "text": "homo",
        "meaning": "igual",
        "origin": "griego",
        "original": "ὁμός"
      },
      {
        "text": "fonía",
        "meaning": "sonido, voz",
        "origin": "griego",
        "original": "φωνή"
      }
    ]
  },
  {
    "word": "homógrafo",
    "definition": "Persona o instrumento que representa lo igual.",
    "parts": [
      {
        "text": "homó",
        "meaning": "igual",
        "origin": "griego",
        "original": "ὁμός"
      },
      {
        "text": "grafo",
        "meaning": "escritor o trazador",
        "origin": "griego",
        "original": "γράφειν"
      }
    ]
  },
  {
    "word": "homólogo",
    "definition": "Especialista en lo igual.",
    "parts": [
      {
        "text": "homó",
        "meaning": "igual",
        "origin": "griego",
        "original": "ὁμός"
      },
      {
        "text": "logo",
        "meaning": "especialista",
        "origin": "griego",
        "original": "λόγος"
      }
    ]
  },
  {
    "word": "homófono",
    "definition": "Sonido relacionado con lo igual.",
    "parts": [
      {
        "text": "homó",
        "meaning": "igual",
        "origin": "griego",
        "original": "ὁμός"
      },
      {
        "text": "fono",
        "meaning": "sonido",
        "origin": "griego",
        "original": "φωνή"
      }
    ]
  },
  {
    "word": "mastología",
    "definition": "Estudio de las mamas.",
    "parts": [
      {
        "text": "masto",
        "meaning": "mama",
        "origin": "griego",
        "original": "μαστός"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "mastopatía",
    "definition": "Afección relacionada con las mamas.",
    "parts": [
      {
        "text": "masto",
        "meaning": "mama",
        "origin": "griego",
        "original": "μαστός"
      },
      {
        "text": "patía",
        "meaning": "afección, padecimiento",
        "origin": "griego",
        "original": "πάθεια"
      }
    ]
  },
  {
    "word": "mastólogo",
    "definition": "Especialista en las mamas.",
    "parts": [
      {
        "text": "mastó",
        "meaning": "mama",
        "origin": "griego",
        "original": "μαστός"
      },
      {
        "text": "logo",
        "meaning": "especialista",
        "origin": "griego",
        "original": "λόγος"
      }
    ]
  },
  {
    "word": "megafonía",
    "definition": "Sonido relacionado con lo grande.",
    "parts": [
      {
        "text": "mega",
        "meaning": "grande",
        "origin": "griego",
        "original": "μέγας"
      },
      {
        "text": "fonía",
        "meaning": "sonido, voz",
        "origin": "griego",
        "original": "φωνή"
      }
    ]
  },
  {
    "word": "megáfono",
    "definition": "Sonido relacionado con lo grande.",
    "parts": [
      {
        "text": "megá",
        "meaning": "grande",
        "origin": "griego",
        "original": "μέγας"
      },
      {
        "text": "fono",
        "meaning": "sonido",
        "origin": "griego",
        "original": "φωνή"
      }
    ]
  },
  {
    "word": "melanóforo",
    "definition": "Que porta el color negro.",
    "parts": [
      {
        "text": "melanó",
        "meaning": "negro",
        "origin": "griego",
        "original": "μέλας"
      },
      {
        "text": "foro",
        "meaning": "que lleva",
        "origin": "griego",
        "original": "φέρειν"
      }
    ]
  },
  {
    "word": "mesoterapia",
    "definition": "Tratamiento relacionado con lo intermedio.",
    "parts": [
      {
        "text": "meso",
        "meaning": "medio",
        "origin": "griego",
        "original": "μέσος"
      },
      {
        "text": "terapia",
        "meaning": "tratamiento",
        "origin": "griego",
        "original": "θεραπεία"
      }
    ]
  },
  {
    "word": "mesocracia",
    "definition": "Sistema de poder relacionado con lo intermedio.",
    "parts": [
      {
        "text": "meso",
        "meaning": "medio",
        "origin": "griego",
        "original": "μέσος"
      },
      {
        "text": "cracia",
        "meaning": "poder, gobierno",
        "origin": "griego",
        "original": "κράτος"
      }
    ]
  },
  {
    "word": "metafonía",
    "definition": "Sonido relacionado con el cambio.",
    "parts": [
      {
        "text": "meta",
        "meaning": "cambio, más allá",
        "origin": "griego",
        "original": "μετά"
      },
      {
        "text": "fonía",
        "meaning": "sonido, voz",
        "origin": "griego",
        "original": "φωνή"
      }
    ]
  },
  {
    "word": "monografía",
    "definition": "Representación o descripción de lo único.",
    "parts": [
      {
        "text": "mono",
        "meaning": "uno, único",
        "origin": "griego",
        "original": "μόνος"
      },
      {
        "text": "grafía",
        "meaning": "escritura, representación",
        "origin": "griego",
        "original": "γραφία"
      }
    ]
  },
  {
    "word": "monófilo",
    "definition": "Con afinidad por lo único.",
    "parts": [
      {
        "text": "monó",
        "meaning": "uno, único",
        "origin": "griego",
        "original": "μόνος"
      },
      {
        "text": "filo",
        "meaning": "afinidad",
        "origin": "griego",
        "original": "φίλος"
      }
    ]
  },
  {
    "word": "oftalmología",
    "definition": "Estudio de los ojos.",
    "parts": [
      {
        "text": "oftalmo",
        "meaning": "ojo",
        "origin": "griego",
        "original": "ὀφθαλμός"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "oftalmoscopia",
    "definition": "Examen u observación de los ojos.",
    "parts": [
      {
        "text": "oftalmo",
        "meaning": "ojo",
        "origin": "griego",
        "original": "ὀφθαλμός"
      },
      {
        "text": "scopia",
        "meaning": "observación, examen",
        "origin": "griego",
        "original": "σκοπία"
      }
    ]
  },
  {
    "word": "oftalmoscopio",
    "definition": "Instrumento para observar los ojos.",
    "parts": [
      {
        "text": "oftalmo",
        "meaning": "ojo",
        "origin": "griego",
        "original": "ὀφθαλμός"
      },
      {
        "text": "scopio",
        "meaning": "instrumento para observar",
        "origin": "griego",
        "original": "σκοπεῖν"
      }
    ]
  },
  {
    "word": "oftalmólogo",
    "definition": "Especialista en los ojos.",
    "parts": [
      {
        "text": "oftalmó",
        "meaning": "ojo",
        "origin": "griego",
        "original": "ὀφθαλμός"
      },
      {
        "text": "logo",
        "meaning": "especialista",
        "origin": "griego",
        "original": "λόγος"
      }
    ]
  },
  {
    "word": "ontología",
    "definition": "Estudio de el ser.",
    "parts": [
      {
        "text": "onto",
        "meaning": "ser",
        "origin": "griego",
        "original": "ὄν"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "ontogenia",
    "definition": "Producción relacionada con el ser.",
    "parts": [
      {
        "text": "onto",
        "meaning": "ser",
        "origin": "griego",
        "original": "ὄν"
      },
      {
        "text": "genia",
        "meaning": "origen, producción",
        "origin": "griego",
        "original": "γένεσις"
      }
    ]
  },
  {
    "word": "ontólogo",
    "definition": "Especialista en el ser.",
    "parts": [
      {
        "text": "ontó",
        "meaning": "ser",
        "origin": "griego",
        "original": "ὄν"
      },
      {
        "text": "logo",
        "meaning": "especialista",
        "origin": "griego",
        "original": "λόγος"
      }
    ]
  },
  {
    "word": "otología",
    "definition": "Estudio de el oído.",
    "parts": [
      {
        "text": "oto",
        "meaning": "oído",
        "origin": "griego",
        "original": "οὖς"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "otoscopia",
    "definition": "Examen u observación de el oído.",
    "parts": [
      {
        "text": "oto",
        "meaning": "oído",
        "origin": "griego",
        "original": "οὖς"
      },
      {
        "text": "scopia",
        "meaning": "observación, examen",
        "origin": "griego",
        "original": "σκοπία"
      }
    ]
  },
  {
    "word": "otoscopio",
    "definition": "Instrumento para observar el oído.",
    "parts": [
      {
        "text": "oto",
        "meaning": "oído",
        "origin": "griego",
        "original": "οὖς"
      },
      {
        "text": "scopio",
        "meaning": "instrumento para observar",
        "origin": "griego",
        "original": "σκοπεῖν"
      }
    ]
  },
  {
    "word": "otólogo",
    "definition": "Especialista en el oído.",
    "parts": [
      {
        "text": "otó",
        "meaning": "oído",
        "origin": "griego",
        "original": "οὖς"
      },
      {
        "text": "logo",
        "meaning": "especialista",
        "origin": "griego",
        "original": "λόγος"
      }
    ]
  },
  {
    "word": "piezometría",
    "definition": "Medición relacionada con la presión.",
    "parts": [
      {
        "text": "piezo",
        "meaning": "presión",
        "origin": "griego",
        "original": "πιέζειν"
      },
      {
        "text": "metría",
        "meaning": "medida",
        "origin": "griego",
        "original": "μετρία"
      }
    ]
  },
  {
    "word": "piezómetro",
    "definition": "Medida de la presión.",
    "parts": [
      {
        "text": "piezó",
        "meaning": "presión",
        "origin": "griego",
        "original": "πιέζειν"
      },
      {
        "text": "metro",
        "meaning": "medida",
        "origin": "griego",
        "original": "μέτρον"
      }
    ]
  },
  {
    "word": "podología",
    "definition": "Estudio de los pies.",
    "parts": [
      {
        "text": "podo",
        "meaning": "pie",
        "origin": "griego",
        "original": "πούς"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "podólogo",
    "definition": "Especialista en los pies.",
    "parts": [
      {
        "text": "podó",
        "meaning": "pie",
        "origin": "griego",
        "original": "πούς"
      },
      {
        "text": "logo",
        "meaning": "especialista",
        "origin": "griego",
        "original": "λόγος"
      }
    ]
  },
  {
    "word": "podómetro",
    "definition": "Medida de los pies.",
    "parts": [
      {
        "text": "podó",
        "meaning": "pie",
        "origin": "griego",
        "original": "πούς"
      },
      {
        "text": "metro",
        "meaning": "medida",
        "origin": "griego",
        "original": "μέτρον"
      }
    ]
  },
  {
    "word": "pseudología",
    "definition": "Estudio de lo falso.",
    "parts": [
      {
        "text": "pseudo",
        "meaning": "falso",
        "origin": "griego",
        "original": "ψευδής"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "radiología",
    "definition": "Estudio de los rayos.",
    "parts": [
      {
        "text": "radio",
        "meaning": "rayo",
        "origin": "latín",
        "original": "radius"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "radiografía",
    "definition": "Representación o descripción de los rayos.",
    "parts": [
      {
        "text": "radio",
        "meaning": "rayo",
        "origin": "latín",
        "original": "radius"
      },
      {
        "text": "grafía",
        "meaning": "escritura, representación",
        "origin": "griego",
        "original": "γραφία"
      }
    ]
  },
  {
    "word": "radiometría",
    "definition": "Medición relacionada con los rayos.",
    "parts": [
      {
        "text": "radio",
        "meaning": "rayo",
        "origin": "latín",
        "original": "radius"
      },
      {
        "text": "metría",
        "meaning": "medida",
        "origin": "griego",
        "original": "μετρία"
      }
    ]
  },
  {
    "word": "radioterapia",
    "definition": "Tratamiento relacionado con los rayos.",
    "parts": [
      {
        "text": "radio",
        "meaning": "rayo",
        "origin": "latín",
        "original": "radius"
      },
      {
        "text": "terapia",
        "meaning": "tratamiento",
        "origin": "griego",
        "original": "θεραπεία"
      }
    ]
  },
  {
    "word": "radioscopia",
    "definition": "Examen u observación de los rayos.",
    "parts": [
      {
        "text": "radio",
        "meaning": "rayo",
        "origin": "latín",
        "original": "radius"
      },
      {
        "text": "scopia",
        "meaning": "observación, examen",
        "origin": "griego",
        "original": "σκοπία"
      }
    ]
  },
  {
    "word": "radiotecnia",
    "definition": "Técnica relacionada con los rayos.",
    "parts": [
      {
        "text": "radio",
        "meaning": "rayo",
        "origin": "latín",
        "original": "radius"
      },
      {
        "text": "tecnia",
        "meaning": "técnica, arte",
        "origin": "griego",
        "original": "τέχνη"
      }
    ]
  },
  {
    "word": "radiofonía",
    "definition": "Sonido relacionado con los rayos.",
    "parts": [
      {
        "text": "radio",
        "meaning": "rayo",
        "origin": "latín",
        "original": "radius"
      },
      {
        "text": "fonía",
        "meaning": "sonido, voz",
        "origin": "griego",
        "original": "φωνή"
      }
    ]
  },
  {
    "word": "radiólogo",
    "definition": "Especialista en los rayos.",
    "parts": [
      {
        "text": "radió",
        "meaning": "rayo",
        "origin": "latín",
        "original": "radius"
      },
      {
        "text": "logo",
        "meaning": "especialista",
        "origin": "griego",
        "original": "λόγος"
      }
    ]
  },
  {
    "word": "radiómetro",
    "definition": "Medida de los rayos.",
    "parts": [
      {
        "text": "radió",
        "meaning": "rayo",
        "origin": "latín",
        "original": "radius"
      },
      {
        "text": "metro",
        "meaning": "medida",
        "origin": "griego",
        "original": "μέτρον"
      }
    ]
  },
  {
    "word": "sinfonía",
    "definition": "Sonido relacionado con la unión.",
    "parts": [
      {
        "text": "sin",
        "meaning": "con, junto",
        "origin": "griego",
        "original": "σύν"
      },
      {
        "text": "fonía",
        "meaning": "sonido, voz",
        "origin": "griego",
        "original": "φωνή"
      }
    ]
  },
  {
    "word": "somatología",
    "definition": "Estudio de el cuerpo.",
    "parts": [
      {
        "text": "somato",
        "meaning": "cuerpo",
        "origin": "griego",
        "original": "σῶμα"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "taquigrafía",
    "definition": "Representación o descripción de la rapidez.",
    "parts": [
      {
        "text": "taqui",
        "meaning": "rápido",
        "origin": "griego",
        "original": "ταχύς"
      },
      {
        "text": "grafía",
        "meaning": "escritura, representación",
        "origin": "griego",
        "original": "γραφία"
      }
    ]
  },
  {
    "word": "taquimetría",
    "definition": "Medición relacionada con la rapidez.",
    "parts": [
      {
        "text": "taqui",
        "meaning": "rápido",
        "origin": "griego",
        "original": "ταχύς"
      },
      {
        "text": "metría",
        "meaning": "medida",
        "origin": "griego",
        "original": "μετρία"
      }
    ]
  },
  {
    "word": "taquígrafo",
    "definition": "Persona o instrumento que representa la rapidez.",
    "parts": [
      {
        "text": "taquí",
        "meaning": "rápido",
        "origin": "griego",
        "original": "ταχύς"
      },
      {
        "text": "grafo",
        "meaning": "escritor o trazador",
        "origin": "griego",
        "original": "γράφειν"
      }
    ]
  },
  {
    "word": "taquímetro",
    "definition": "Medida de la rapidez.",
    "parts": [
      {
        "text": "taquí",
        "meaning": "rápido",
        "origin": "griego",
        "original": "ταχύς"
      },
      {
        "text": "metro",
        "meaning": "medida",
        "origin": "griego",
        "original": "μέτρον"
      }
    ]
  },
  {
    "word": "tecnología",
    "definition": "Estudio de la técnica.",
    "parts": [
      {
        "text": "tecno",
        "meaning": "arte, técnica",
        "origin": "griego",
        "original": "τέχνη"
      },
      {
        "text": "logía",
        "meaning": "estudio, tratado",
        "origin": "griego",
        "original": "λογία"
      }
    ]
  },
  {
    "word": "tecnografía",
    "definition": "Representación o descripción de la técnica.",
    "parts": [
      {
        "text": "tecno",
        "meaning": "arte, técnica",
        "origin": "griego",
        "original": "τέχνη"
      },
      {
        "text": "grafía",
        "meaning": "escritura, representación",
        "origin": "griego",
        "original": "γραφία"
      }
    ]
  },
  {
    "word": "tecnocracia",
    "definition": "Sistema de poder relacionado con la técnica.",
    "parts": [
      {
        "text": "tecno",
        "meaning": "arte, técnica",
        "origin": "griego",
        "original": "τέχνη"
      },
      {
        "text": "cracia",
        "meaning": "poder, gobierno",
        "origin": "griego",
        "original": "κράτος"
      }
    ]
  }
];
  words.push(...supplementalWords);

  const meanings = [...new Set(words.flatMap(({ parts }) => parts.map(({ meaning }) => meaning)))];
  const optionsFor = (meaning, offset) => {
    const distractors = meanings.filter((item) => item !== meaning);
    return [meaning, ...distractors.slice(offset % (distractors.length - 3), (offset % (distractors.length - 3)) + 3)];
  };

  return words.map((word, wordIndex) => ({
    ...word,
    parts: word.parts.map((part, partIndex) => ({ ...part, options: optionsFor(part.meaning, wordIndex * 2 + partIndex) }))
  }));
};
