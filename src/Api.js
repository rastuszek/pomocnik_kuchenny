const ApiVeg = {
    vegetables: [
        { number: 1,
            name: "Bób",
            discription: "Umyty pod bieżącą wodą bób umieść w garnku i zalej wodą (której powinno być dwa razy więcej niż bobu). Dosyp płaską łyżeczkę cukru. Gdy woda zacznie się gotować, dosyp szczyptę soli i gotuj pod przykryciem na średnim ogniu około 15–20 minut (aż ziarna bobu zmiękną, a skórka stanie się pomarszczona)." },
        { number: 2,
            name: "Brokuł",
            discription: "W garnku zagotowujemy sporą ilość wody, którą solimy i doprawiamy odrobiną cukru (na 2,5 l wody płaska łyżeczka soli i spora szczypta cukru). Na wrzątek wrzucamy umyte różyczki brokuła. Warzywa gotujemy ok 5-7 min (liczone od momentu aż woda zacznie wrzeć)." },
        { number: 3,
            name: "Brukselka",
            discription: "Przed gotowaniem obierz delikatnie żółte, zewnętrzne warstwy brukselki. Trzonki brukselek natnij na krzyż, dzięki czemu szybciej zmiękną podczas gotowania. Świeże warzywa gotuj od 4 do 6 minut, natomiast mrożone gotuj ok. 7 minut." },
        { number: 4,
            name: "Fasola",
            discription: "Nasiona moczymy 1–2 godziny w bardzo gorącej wodzie, w tym czasie kilka razy dolewamy wrzątku. Następnie wylewamy wodę, fasolę zalewamy świeżą wodą i gotujemy dopóki nie zmięknie. Fasolę można też zalać zimną wodą, szybko zagotować, odcedzić, znów zalać wodą i gotować na średnim ogniu dopóki nie będzie gotowa." },
        { number: 5,
            name: "Fasolka szparagowa",
            discription: "Od momentu, kiedy zawrze woda, gotuję żółtą fasolkę od 4 do 10 minut. Im fasolka młodsza, tym szybciej się gotuje. Trzeba próbować w trakcie, wyłowić jedna lub dwie i zjeść. Fasolkę przelewam przez sito, lekko polewam zimną wodą, żeby zatrzymać proces gotowania i nakładam." },
    ],
    all: function() { return this.vegetables},
    get: function(id) {
        const isVegeta = v => v.number === id
        return this.vegetables.find(isVegeta)
    }
}


export default ApiVeg

