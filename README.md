# FullStackNodeJSRepo

## 29/1 - Intro 
2 obligatoriske projekter I løbet af kurset.
Mandatory I: Dokumentationswebsite.
Mandatory II: Et auth system.
Mandatory II skal indgå i eksamensprojektet.
Clean code er et stort fokus i dette kursus. Der anbefales at man sætter en linter op til at tjekke kode. https://github.com/anderslatif/EK_DAT_Node.js_2026_Spring/blob/main/00._Course_Material/00._Meta_Course_Material/linters_overview.md
Intet AI til kodegenerering. Det er okay at sparre med LLM’er, men ikke at få den til at producere kode.

Alle kodesprog har en REPL. Når man skriver 'node' i terminalen, så åbner man Node's REPL. Ligesom hvis man skriver 'python' eller 'jshell'.
Man kan i REPL (Read Evaluate Print Loop) skrive kodelinjer og få den til at skrive resultatet af kodelinjen. F.eks. kan man skrive 2 + 2 og den vil skrive 4. Skriver man 2 + "2", vil den skrive 22 og skriver man true + 5, vil den skrive 6 pga. type coercion. Vi vil rigtig gerne undgå nogensinde at gøre dette.
Et andet eksempel på type coercion i effekt er hvis vi skriver 2 == "2". Dette bliver true. Vi kan dog skrive 2 === "2" og få false. Omvendt kan man sige 2 != "2" og få false, men sige 2 !== "2" og få true. Vi vil gerne lave strict equality (=== eller !==) for at undgå type coercion.

const deklarering betyder ikke at variablen bliver konstant, immutable. Der er tilfælde. Men det gør så man f.eks. ikke kan type caste variablen til en ny datatype. Hvis man har en const af typen Object, vil man kunne ændre værdierne i objektet. const refererer stadig til det samme objekt, men data i objektet er ikke det samme. (Bruger man Object.freeze({}), bliver objektet immutable)

Forskellen mellem JSON og et JS Object er syntaks. Data er stillet op som key-value pairs. I JSON skal key være omkranset af gåseøjne, hvor den i et JS Object ikke skal være det.

JS har ASI (Automatic Semicolon Inserter). Man behøver ikke sætte semikolon efter hvert statement, men man kan sagtens gøre det selv. En god idé er dog at gøre det efter et Object der fylder flere linjer indeni en function.

## 5/2 - Functions
Functions er first class citizen i JavaScript. Det betyder at de bliver hoisted i callstacken og dermed kan blive kaldt overalt.

En callback-funktion er en funktion der bliver givet videre til en anden funktion som parameter.
Den kan blive kaldt i denne funktion, men behøver det ikke.

<img width="2440" height="988" alt="image" src="https://github.com/user-attachments/assets/bf74ef04-b78b-40ca-8353-997cf7b2759c" />

