const casual = require('casual');
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();


const db = { tickets: [], locations: [], tokens: [] };
const types = ['General', 'Account', 'Transfer', 'Issue'];
const locations = ['Yonder', 'Whoville', 'Oherthere'];
const statuses = ['Complete', 'Pending Approval', 'In Work', 'Rejected', 'Complete'];

for (let i = 1; i < 100; ++i) {
    let ticket = {};
    ticket.id = i;
    ticket.name = `${casual.first_name} ${casual.letter}. ${casual.last_name}`;
    ticket.createdAt = casual.date(format = 'YYYY-MM-DD');
    ticket.email = casual.email;
    ticket.type = types[Math.floor(Math.random() * types.length)]
    ticket.location = locations[Math.floor(Math.random() * locations.length)];
    ticket.description = casual.catch_phrase;
    ticket.status = statuses[Math.floor(Math.random() * statuses.length)]

    db.tickets.push(ticket);
}

// console.log(JSON.stringify(db));

// Static locations
db.locations.push({lat: 47.3081286, lon:8.8147603, label: "Alfa Romeo Racing", subLabel: "Hinwil, Switzerland" });
db.locations.push({lat: 44.3078983, lon:11.8617324, label: "Alpha Tauri", subLabel: "Faenza, Italy" });
db.locations.push({lat: 44.5338331, lon:10.8792891, label: "Ferrari", subLabel: "Maranello, Italy" });
db.locations.push({lat: 35.4404373, lon:-80.6782491, label: "Haas", subLabel: "Kannapolis, NC, USA" });
db.locations.push({lat: 51.3458363, lon:-0.5505217, label: "McLaren", subLabel: "Woking, United Kingdom" });
db.locations.push({lat: 52.0218149, lon:-1.146633, label: "Mercedes", subLabel: "Brackley, United Kingdom" });
db.locations.push({lat: 52.0751884, lon:-1.0314997, label: "Racing Point", subLabel: "Silverstone, United Kingdom" });
db.locations.push({lat: 52.0082173, lon:-0.6950247, label: "Red Bull Racing", subLabel: "Milton Keynes, United Kingdom" });
db.locations.push({lat: 51.9199771, lon:-1.3896643, label: "Renault", subLabel: "Enstone, United Kingdom" });
db.locations.push({lat: 51.6183465, lon:-1.414181, label: "Williams", subLabel: "Grove, United Kingdom" });

db.tokens.push({'mapbox': process.env.mapbox_access_token});

fs.writeFile('mock/Database.json', JSON.stringify(db), (err) => {
    if (err) throw err;
    
    console.log('Mock data written to Database.json');
})