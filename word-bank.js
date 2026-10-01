// Banco editorial de compuestos grecolatinos. Se mantiene separado de la interfaz
// para ampliar o revisar el corpus sin tocar la lógica del juego.
window.createWordBank = (excludedWords = []) => {
  // Lista blanca editorial: cada forma se ha contrastado con el lemario del
  // Diccionario de la lengua española. Nunca se generan palabras por la mera
  // combinación de una raíz y un sufijo.
  const normalizeWord = (word) => word.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const raeVerifiedWords = new Set(`
alcohol aceite azúcar almohada alcalde ojalá guerra yelmo jardín garaje hotel bufé maquillaje tomate chocolate aguacate coyote papa puma hamaca canoa huracán barbacoa izquierda pizarra fútbol mitin
aerología aerografía aerofobia aeroterapia agrología agronomía antropología antropografía antropometría astrología astrografía astronomía autografía autonomía bibliología bibliografía bibliofilia biología biografía biometría bioterapia cardiología cardiografía cardiopatía citología cronología cronografía cronometría demografía ecología ecografía economía electrometría electroterapia entomología etnología etnografía fotografía fotometría fotofobia fototerapia fonología fonografía fonometría fitología fitografía fitoterapia gastropatía gastronomía geología geografía geometría geonomía gerontología ginecología heliografía helioterapia hemofilia hemopatía hepatología hepatopatía heteronomía hidrología hidrografía hidrometría hidrofobia hidroterapia hidropatía ictiología ictiografía iconología iconografía lexicología lexicografía litología litografía micrografía mitología mitografía morfología morfometría neurología neuropatía odontología oncología ornitología ortología ortografía osteología osteopatía paleografía
acrofobia anemografía anemometría anemoscopio angiología angiografía angiogénesis aristocracia arqueología arqueólogo artrología artrografía artropatía artroscopia artroscopio autocracia bacteriología bibliomancia biogénesis cosmología cosmografía criptología criptografía dactilología dactilografía dactiloscopia demoscopia democracia endoscopia endoscopio endogénesis epigrafía epigénesis eritrofobia espeleología estenografía eurocracia fototeca fotogenia fotogénesis fonoteca fonotecnia gastroscopia gastroscopio geomancia geotecnia geogenia gerontocracia ginecocracia heteromancia hidroscopia hidromancia hidrotecnia histología homeopatía iconoscopio isometría isonomía isofonía miología necrología necrofilia necroscopia necromancia neología oncogénesis ornitomancia ortofonía osteogénesis patología patografía patogenia patogénesis petrología petrografía pirología piromancia pirotecnia plutocracia poligrafía polimetría polifonía psicología psicometría psicoterapia psicopatía psicotecnia psicofonía sociología sociometría sociopatía telegrafía telepatía telescopio telefonía telegenia termología termografía termometría termoterapia termoscopio termotecnia topología topografía toxicología toxicogénesis zoología zoografía zoofobia zoofilia zootecnia
  `.trim().split(/\s+/).map(normalizeWord));
  const isRaeVerified = (word) => raeVerifiedWords.has(normalizeWord(word));
  window.isRaeVerifiedWord = isRaeVerified;
  const roots = [
    ["aero","aero","aire","ἀήρ","el aire"],["agro","agro","campo","ἀγρός","el campo"],["antropo","antropo","ser humano","ἄνθρωπος","el ser humano"],["arqui","arqui","origen, principio","ἀρχή","el origen"],["astro","astro","estrella","ἄστρον","los astros"],["auto","auto","uno mismo","αὐτός","uno mismo"],["biblio","biblio","libro","βιβλίον","los libros"],["bio","bio","vida","βίος","la vida"],["cardio","cardio","corazón","καρδία","el corazón"],["cito","cito","célula","κύτος","las células"],["crono","crono","tiempo","χρόνος","el tiempo"],["demo","demo","pueblo","δῆμος","el pueblo"],["dermo","dermo","piel","δέρμα","la piel"],["eco","eco","casa, entorno","οἶκος","el entorno"],["electro","electro","ámbar","ἤλεκτρον","la electricidad"],["endo","endo","dentro","ἔνδον","el interior"],["entomo","entomo","insecto","ἔντομον","los insectos"],["etno","etno","pueblo, grupo","ἔθνος","los pueblos"],["foto","foto","luz","φῶς","la luz"],["fono","fono","sonido, voz","φωνή","el sonido"],["fito","fito","planta","φυτόν","las plantas"],["gastro","gastro","estómago","γαστήρ","el estómago"],["geo","geo","tierra","γῆ","la Tierra"],["geronto","geronto","anciano","γέρων","la vejez"],["gineco","gineco","mujer","γυνή","la mujer"],["helio","helio","sol","ἥλιος","el Sol"],["hemo","hemo","sangre","αἷμα","la sangre"],["hepato","hepato","hígado","ἧπαρ","el hígado"],["hetero","hetero","diferente","ἕτερος","lo diferente"],["hidro","hidro","agua","ὕδωρ","el agua"],["ictio","ictio","pez","ἰχθύς","los peces"],["icono","icono","imagen","εἰκών","las imágenes"],["lexico","lexico","palabra","λέξις","las palabras"],["lito","lito","piedra","λίθος","las piedras"],["macro","macro","grande","μακρός","lo grande"],["micro","micro","pequeño","μικρός","lo pequeño"],["mito","mito","relato tradicional","μῦθος","los relatos tradicionales"],["morfo","morfo","forma","μορφή","las formas"],["nano","nano","muy pequeño","νᾶνος","lo diminuto"],["neuro","neuro","nervio","νεῦρον","el sistema nervioso"],["odonto","odonto","diente","ὀδούς","los dientes"],["onco","onco","masa, tumor","ὄγκος","los tumores"],["ornito","ornito","ave","ὄρνις","las aves"],["orto","orto","recto, correcto","ὀρθός","lo correcto"],["osteo","osteo","hueso","ὀστέον","los huesos"],["paleo","paleo","antiguo","παλαιός","lo antiguo"],["pato","pato","dolor, enfermedad","πάθος","la enfermedad"],["psico","psico","mente, alma","ψυχή","la mente"],["socio","socio","compañero","socius","la sociedad","latín"],["tele","tele","lejos, a distancia","τῆλε","la distancia"],["termo","termo","calor","θέρμη","el calor"],["topo","topo","lugar","τόπος","los lugares"],["toxico","toxico","veneno","τοξικόν","los venenos"],["zoo","zoo","animal","ζῷον","los animales"]
    , ["acro","acro","extremo, altura","ἄκρον","lo más alto"],["anemo","anemo","viento","ἄνεμος","el viento"],["angio","angio","vaso, conducto","ἀγγεῖον","los vasos"],["aristo","aristo","mejor, excelente","ἄριστος","lo mejor"],["arqueo","arqueo","antiguo","ἀρχαῖος","lo antiguo"],["artro","artro","articulación","ἄρθρον","las articulaciones"],["bacterio","bacterio","bastoncillo","βακτηρία","las bacterias"],["cosmo","cosmo","orden, universo","κόσμος","el universo"],["cripto","cripto","oculto","κρυπτός","lo oculto"],["dactilo","dactilo","dedo","δάκτυλος","los dedos"],["epi","epi","sobre","ἐπί","lo que está encima"],["eritro","eritro","rojo","ἐρυθρός","el color rojo"],["espeleo","espeleo","cueva","σπήλαιον","las cuevas"],["esteno","esteno","estrecho","στενός","lo estrecho"],["euro","euro","Europa","Εὐρώπη","Europa"],["histo","histo","tejido","ἱστός","los tejidos"],["homeo","homeo","semejante","ὅμοιος","lo semejante"],["iso","iso","igual","ἴσος","lo igual"],["mio","mio","músculo","μῦς","los músculos"],["necro","necro","muerte","νεκρός","la muerte"],["neo","neo","nuevo","νέος","lo nuevo"],["petro","petro","piedra","πέτρα","las piedras"],["piro","piro","fuego","πῦρ","el fuego"],["pluto","pluto","riqueza","πλοῦτος","la riqueza"],["poli","poli","mucho, numeroso","πολύς","lo numeroso"]
  ];
  const endings = [
    ["logía","logía","estudio, tratado","λογία",(subject) => `Estudio de ${subject}.`],["grafía","grafía","escritura, representación","γραφία",(subject) => `Representación o descripción de ${subject}.`],["metría","metría","medida","μετρία",(subject) => `Medición relacionada con ${subject}.`],["fobia","fobia","miedo, aversión","φοβία",(subject) => `Miedo o aversión relacionado con ${subject}.`],["filia","filia","afinidad, amor","φιλία",(subject) => `Afinidad o interés por ${subject}.`],["terapia","terapia","tratamiento","θεραπεία",(subject) => `Tratamiento relacionado con ${subject}.`],["patía","patía","afección, padecimiento","πάθεια",(subject) => `Afección relacionada con ${subject}.`],["nomía","nomía","norma, orden","νομία",(subject) => `Conocimiento o sistema aplicado a ${subject}.`]
    , ["scopia","scopia","observación, examen","σκοπία",(subject) => `Examen u observación de ${subject}.`],["scopio","scopio","instrumento para observar","σκοπεῖν",(subject) => `Instrumento para observar ${subject}.`],["mancia","mancia","adivinación","μαντεία",(subject) => `Adivinación relacionada con ${subject}.`],["cracia","cracia","poder, gobierno","κράτος",(subject) => `Sistema de poder relacionado con ${subject}.`],["tecnia","tecnia","técnica, arte","τέχνη",(subject) => `Técnica relacionada con ${subject}.`],["fonía","fonía","sonido, voz","φωνή",(subject) => `Sonido relacionado con ${subject}.`],["teca","teca","depósito, colección","θήκη",(subject) => `Colección o depósito de ${subject}.`],["genia","genia","origen, producción","γένεσις",(subject) => `Producción relacionada con ${subject}.`],["génesis","génesis","origen, formación","γένεσις",(subject) => `Formación de ${subject}.`]
  ];
  const heritageTerms = [
    ["álgebra","Rama de las matemáticas que opera con símbolos y cantidades.","al","el","árabe","ال"],["alcohol","Sustancia obtenida por fermentación o destilación.","kuḥl","polvo fino","árabe","كحل"],["aceite","Grasa líquida, especialmente la extraída de frutos y semillas.","az-zayt","aceite de oliva","árabe","الزيت"],["azúcar","Sustancia dulce soluble en agua.","as-sukkar","sustancia dulce cristalina","árabe","السكر"],["almohada","Pieza blanda para apoyar la cabeza al dormir.","al-mukhadda","mejilla","árabe","المخدة"],["alcalde","Persona que preside un ayuntamiento.","al-qāḍī","juez","árabe","القاضي"],["ojalá","Expresión de deseo.","in šā’ Allāh","si Dios quiere","árabe","إن شاء الله"],
    ["guerra","Lucha armada entre grupos organizados.","werra","pelea, confusión","germánico","*werra"],["yelmo","Armadura que protegía la cabeza.","helm","protección, casco","germánico","*helmaz"],["jardín","Terreno donde se cultivan plantas ornamentales.","jardin","huerto cercado","francés","jardin"],["garaje","Lugar destinado a guardar vehículos.","garage","guardar","francés","garage"],["hotel","Establecimiento que ofrece alojamiento.","hôtel","casa de huéspedes","francés","hôtel"],["bufé","Comida servida para que cada persona se sirva.","buffet","aparador","francés","buffet"],["maquillaje","Cosmético aplicado al rostro.","maquillage","arreglo del rostro","francés","maquillage"],
    ["tomate","Fruto rojo y jugoso usado como alimento.","tomatl","fruto hinchado","náhuatl","tomatl"],["chocolate","Alimento elaborado con cacao.","xocolātl","bebida amarga","náhuatl","xocolātl"],["aguacate","Fruto verde de pulpa cremosa.","āhuacatl","testículo","náhuatl","āhuacatl"],["coyote","Mamífero canino de América.","coyōtl","can silvestre americano","náhuatl","coyōtl"],["chile","Fruto picante de varias especies de pimiento.","chīlli","pimiento picante","náhuatl","chīlli"],
    ["papa","Tubérculo comestible de la patata.","papa","tubérculo","quechua","papa"],["puma","Felino americano de gran tamaño.","puma","felino de montaña","quechua","puma"],["cóndor","Ave rapaz andina de gran envergadura.","kuntur","gran ave andina","quechua","kuntur"],["cancha","Terreno preparado para practicar un deporte.","kancha","recinto cercado","quechua","kancha"],["carpa","Tienda desmontable de lona.","karpa","cobertura","quechua","karpa"],
    ["hamaca","Red o lona suspendida para descansar.","hamaca","red para dormir","taíno","hamaca"],["canoa","Embarcación ligera y estrecha.","kanoa","embarcación ligera","taíno","kanoa"],["huracán","Viento de fuerza extraordinaria.","hurakán","espíritu de la tormenta","taíno","hurakán"],["barbacoa","Parrilla para asar alimentos.","barbacoa","armazón de palos","taíno","barbacoa"],
    ["izquierda","Lado opuesto a la derecha.","ezker","lado opuesto a la derecha","euskera","ezker"],["pizarra","Roca laminada usada para escribir.","pizarra","piedra plana","euskera","pizarra"],
    ["fútbol","Deporte jugado principalmente con los pies.","football","balón de pie","inglés","football"],["mitin","Reunión pública de carácter político.","meeting","reunión","inglés","meeting"],["suéter","Prenda de punto para cubrir el torso.","sweater","prenda para sudar","inglés","sweater"]
  ];
  const latinHeritageTerms = `
abeja|apicula|insecto productor de miel
abogado|advocatus|persona que defiende una causa
abrir|aperire|separar lo que estaba cerrado
abuelo|aviolus|ascendiente de una familia
agua|aqua|líquido esencial para la vida
águila|aquila|ave rapaz
alegre|alacer|persona de ánimo vivo
alma|anima|principio vital o espiritual
amigo|amicus|persona unida por afecto
amor|amor|afecto intenso
animal|animal|ser vivo que se mueve por sí mismo
año|annus|periodo de doce meses
árbol|arbor|planta de tronco leñoso
arena|harena|conjunto de granos de roca
arma|arma|instrumento de defensa o ataque
arte|ars|actividad creadora
ave|avis|animal con plumas y alas
barba|barba|vello del rostro
barco|barca|embarcación
boca|bucca|abertura de la cara para comer y hablar
brazo|brachium|miembro entre hombro y mano
caballo|caballus|animal de montar
cabello|capillus|pelo de la cabeza
cabeza|capitia|parte superior del cuerpo
cadena|catena|serie de eslabones
calle|callis|vía entre edificios
calor|calor|sensación de temperatura elevada
campo|campus|terreno extenso fuera de poblado
cantar|cantare|producir música con la voz
carne|caro|parte blanda de un animal
casa|casa|edificio para habitar
cielo|caelum|espacio visible sobre la Tierra
ciudad|civitas|población de gran tamaño
claro|clarus|que tiene mucha luz
clave|clavis|instrumento para abrir una cerradura
color|color|impresión visual de la luz
comer|comedere|tomar alimento
corazón|cor|órgano principal de la circulación
cuerpo|corpus|conjunto material de un ser
diente|dens|pieza dura de la boca
día|dies|periodo de veinticuatro horas
dinero|denarius|medio de pago
dormir|dormire|estar en reposo y sueño
dulce|dulcis|de sabor agradable como el azúcar
espejo|speculum|superficie que refleja imágenes
estrella|stella|astro con luz propia
familia|familia|grupo de parientes
flor|flos|parte de una planta con función reproductora
fuego|focus|materia en combustión
gato|cattus|mamífero felino doméstico
gente|gens|conjunto de personas
hijo|filius|persona respecto de sus padres
hoja|folia|órgano plano de una planta
hombre|homo|ser humano adulto masculino
hora|hora|unidad de sesenta minutos
isla|insula|tierra rodeada de agua
joven|iuvenis|persona de poca edad
juez|iudex|persona que administra justicia
labio|labium|borde carnoso de la boca
lago|lacus|gran masa de agua interior
leche|lac|líquido nutritivo de mamíferos
ley|lex|norma establecida
lengua|lingua|órgano de la boca y sistema de comunicación
libro|liber|obra escrita encuadernada
lobo|lupus|mamífero cánido salvaje
lugar|locus|sitio determinado
luna|luna|satélite natural de la Tierra
luz|lux|radiación que permite ver
madre|mater|mujer respecto de sus hijos
mano|manus|extremo del brazo
mar|mare|gran masa de agua salada
mesa|mensa|mueble con tablero horizontal
mente|mens|facultad de pensar
miedo|metus|sensación ante un peligro
mirar|mirari|dirigir la vista
molino|molinum|máquina para moler
mundo|mundus|conjunto de lo existente
mujer|mulier|persona adulta femenina
noche|nox|periodo sin luz solar
nombre|nomen|palabra que identifica
nuevo|novus|que aparece por primera vez
nube|nubes|masa visible de vapor de agua
ojo|oculus|órgano de la visión
oreja|auricula|parte externa del oído
oro|aurum|metal precioso amarillo
padre|pater|varón respecto de sus hijos
pared|paries|muro de un edificio
paso|passus|movimiento al caminar
paz|pax|situación sin conflicto
pecho|pectus|parte frontal superior del tronco
pez|piscis|animal acuático con branquias
pie|pes|extremo de la pierna
puerta|porta|abertura para entrar o salir
pueblo|populus|conjunto de habitantes
queso|caseus|alimento hecho con leche
rama|ramus|división de un árbol
rey|rex|monarca
río|rivus|corriente natural de agua
rueda|rota|pieza circular que gira
sal|sal|sustancia cristalina usada como condimento
sangre|sanguis|líquido que circula por el cuerpo
semana|septimana|periodo de siete días
semilla|seminia|parte de una planta capaz de germinar
silla|sella|asiento individual
sol|sol|estrella del sistema solar
sueño|somnus|estado de reposo al dormir
tabla|tabula|pieza plana de madera
tierra|terra|suelo y planeta que habitamos
tiempo|tempus|duración de las cosas
toro|taurus|macho adulto del ganado vacuno
torre|turris|edificio más alto que ancho
uva|uva|fruto de la vid
vaca|vacca|hembra del ganado vacuno
valle|vallis|llanura entre montañas
vela|vela|pieza que recibe el viento en una embarcación
verde|viridis|color de la vegetación
viento|ventus|aire en movimiento
vida|vita|existencia de un ser vivo
viejo|vetulus|de mucha edad
vidrio|vitrum|material transparente y frágil
vino|vinum|bebida obtenida de la uva
voz|vox|sonido producido al hablar
baño|balneum|acción de lavar el cuerpo
beso|basium|contacto de los labios como muestra de afecto
blando|blandus|que cede con facilidad al tacto
breve|brevis|de poca duración
burro|burricus|asno doméstico
cama|cama|mueble para dormir
cara|cara|parte frontal de la cabeza
carrera|carraria|competición de velocidad
cera|cera|sustancia producida por abejas
cerrar|serare|impedir el paso por una abertura
cesto|cista|recipiente para transportar objetos
ciencia|scientia|conjunto de conocimientos ordenados
cinco|quinque|número que sigue al cuatro
cintura|cinctura|parte estrecha del tronco
cocina|coquina|lugar para preparar alimentos
columna|columna|elemento vertical de soporte
consejo|consilium|opinión que orienta una decisión
cuatro|quattuor|número que sigue al tres
cuello|collum|parte que une cabeza y tronco
culpa|culpa|responsabilidad por una falta
dedo|digitus|cada una de las partes de la mano
derecho|directus|recto o conforme a norma
edad|aetas|tiempo vivido
error|error|acción equivocada
espalda|spatula|parte posterior del tronco
esposa|sponsa|mujer casada
fácil|facilis|que exige poco esfuerzo
feliz|felix|que siente felicidad
fiesta|festa|celebración colectiva
figura|figura|forma exterior de algo
fondo|fundus|parte más baja o alejada
fruta|fructus|producto comestible de una planta
grande|grandis|de tamaño considerable
gracia|gratia|cualidad que agrada
grano|granum|semilla pequeña
hablar|fabulare|comunicarse con palabras
hambre|fames|necesidad de comer
hermano|germanus|persona con los mismos padres
hierba|herba|planta pequeña de tallo tierno
hierro|ferrum|metal duro y común
huevo|ovum|cuerpo que contiene un embrión
igual|aequalis|de la misma cantidad o cualidad
invierno|hibernum|estación más fría del año
lado|latus|cada parte lateral de algo
largo|largus|de mucha longitud
lavar|lavare|limpiar con agua
leer|legere|interpretar signos escritos
libre|liber|sin ataduras ni impedimentos
línea|linea|sucesión continua de puntos
llorar|plorare|derramar lágrimas
maduro|maturus|que ha alcanzado desarrollo
mejor|melior|superior en calidad
menos|minus|cantidad inferior
mes|mensis|cada una de las doce partes del año
muerte|mors|fin de la vida
muro|murus|pared resistente
nariz|nasus|órgano del olfato
negro|niger|del color más oscuro
obra|opera|resultado de un trabajo
ocho|octo|número que sigue al siete
olivo|oliva|árbol que produce aceitunas
orden|ordo|disposición organizada
palma|palma|parte interior de la mano
pobre|pauper|que tiene pocos recursos
poco|paucus|en cantidad reducida
precio|pretium|valor de una cosa
primero|primarius|que ocupa el lugar inicial
puro|purus|sin mezcla ni impureza
raíz|radix|parte de la planta fijada al suelo
red|rete|malla de hilos entrelazados
reír|ridere|manifestar alegría con la boca
reina|regina|mujer que gobierna un reino
remedio|remedium|medio para aliviar un mal
rosa|rosa|flor de pétalos perfumados
seco|siccus|sin humedad
seis|sex|número que sigue al cinco
siete|septem|número que sigue al seis
sombra|umbra|zona sin luz directa
suave|suavis|blando o agradable al tacto
tarde|tardus|que ocurre con demora
techo|tectum|cubierta superior de un edificio
tela|tela|tejido hecho con hilos
temor|timor|miedo ante algo
tener|tenere|poseer o sujetar
tres|tres|número que sigue al dos
trigo|triticum|cereal para hacer harina
último|ultimus|que ocupa la posición final
unidad|unitas|cualidad de ser uno
universo|universus|conjunto de todo lo existente
usar|usus|emplear algo
vapor|vapor|gas producido por un líquido
verdad|veritas|conformidad con la realidad
verano|veranum|estación más cálida del año
vestido|vestitus|prenda para cubrir el cuerpo
victoria|victoria|triunfo en una contienda
  `.trim().split("\n").map((line) => line.split("|")).filter(([word]) => !new Set([
    "águila", "alma", "animal", "árbol", "ave", "cantar", "comer", "día", "gato", "lobo", "luz", "mano", "mar", "paso", "pecho", "pez", "rama", "río", "sal", "sol", "toro", "vela", "viento", "cama", "cara", "cesto", "fácil", "fondo", "línea", "raíz", "reír", "tela", "último", "victoria"
  ]).has(word));
  const rootMeanings = roots.map(([, , meaning]) => meaning);
  const endingMeanings = endings.map(([, , meaning]) => meaning);
  const optionsFor = (meaning, pool, offset) => [meaning, ...pool.filter((item) => item !== meaning).slice(offset % (pool.length - 3), (offset % (pool.length - 3)) + 3)];
  const excluded = new Set(excludedWords);
  const heritageMeanings = heritageTerms.map(([, , , meaning]) => meaning);
  const heritageChallenges = heritageTerms
    .filter(([word]) => isRaeVerified(word))
    .map(([word, definition, text, meaning, origin, original], index) => ({
      word, definition, parts: [{ text, meaning, origin, original, options: optionsFor(meaning, heritageMeanings, index) }]
    }));
  const latinChallenges = latinHeritageTerms.map(([word, original, meaning], index) => ({
    word,
    definition: `Voz patrimonial relacionada con ${meaning}.`,
    parts: [{ text: word, meaning, origin: "latín", original, options: optionsFor(meaning, latinHeritageTerms.map(([, , item]) => item), index) }]
  }));
  const compoundChallenges = roots.flatMap(([form, text, meaning, original, subject, origin = "griego"], rootIndex) => endings.map(([endingForm, endingText, endingMeaning, endingOriginal, definitionFor], endingIndex) => ({
    word: `${form}${endingForm}`,
    definition: definitionFor(subject),
    parts: [
      { text, meaning, origin, original, options: optionsFor(meaning, rootMeanings, rootIndex + endingIndex) },
      { text: endingText, meaning: endingMeaning, origin: "griego", original: endingOriginal, options: optionsFor(endingMeaning, endingMeanings, rootIndex * 2 + endingIndex) }
    ]
  }))).filter(({ word }) => isRaeVerified(word) && !excluded.has(word));
  return [...heritageChallenges, ...latinChallenges, ...compoundChallenges];
};
