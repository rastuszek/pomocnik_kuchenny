const Api = {
    vegetables: [
        { number: 1, name: "Ogórek", position: "G" },
        { number: 2, name: "Kapusta", position: "D" },
        { number: 3, name: "Sam Sweeper", position: "D" },
        { number: 4, name: "Matt Midfielder", position: "M" },
        { number: 5, name: "William Winger", position: "M" },
        { number: 6, name: "Fillipe Forward", position: "F" }
    ],
    all: function() { return this.vegetables},
    get: function(id) {
        const isVegeta = p => p.number === id
        return this.vegetables.find(isVegeta)
    }
}

export default Api