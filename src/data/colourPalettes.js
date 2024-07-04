const colorPalettes = [
    {
        name: "Mystic Sunset",
        colours: [
            { id: 1716616375891, colour: '#8C4D7C' },
            { id: 1716616377300, colour: '#BF9F3B' },
            { id: 1716616378595, colour: '#322694' },
            { id: 1716616379741, colour: '#754218' },
            { id: 1716616380841, colour: '#E0E2E4' }
        ]
    },
    {
        name: "Fiery Passion",
        colours: [
            { id: 1716616381852, colour: '#FF5733' },
            { id: 1716616382863, colour: '#C70039' },
            { id: 1716616383874, colour: '#900C3F' },
            { id: 1716616384885, colour: '#581845' },
            { id: 1716616385896, colour: '#FFC300' }
        ]
    },
    {
        name: "Nature's Embrace",
        colours: [
            { id: 1716616386907, colour: '#2E8B57' },
            { id: 1716616387918, colour: '#3CB371' },
            { id: 1716616388929, colour: '#20B2AA' },
            { id: 1716616389940, colour: '#008080' },
            { id: 1716616390951, colour: '#2F4F4F' }
        ]
    },
    {
        name: "Sky's Serenity",
        colours: [
            { id: 1716616391962, colour: '#1E90FF' },
            { id: 1716616392973, colour: '#00BFFF' },
            { id: 1716616393984, colour: '#87CEFA' },
            { id: 1716616394995, colour: '#4682B4' },
            { id: 1716616396006, colour: '#B0C4DE' }
        ]
    },
    {
        name: "Golden Hour",
        colours: [
            { id: 1716616397017, colour: '#FFD700' },
            { id: 1716616398028, colour: '#FFA500' },
            { id: 1716616399039, colour: '#FF8C00' },
            { id: 1716616400050, colour: '#FF6347' },
            { id: 1716616401061, colour: '#FF4500' }
        ]
    },
    {
        name: "Autumn Vibes",
        colours: [
            { id: 1716616402072, colour: '#D2691E' },
            { id: 1716616403083, colour: '#FF7F50' },
            { id: 1716616404094, colour: '#8B4513' },
            { id: 1716616405105, colour: '#A0522D' },
            { id: 1716616406116, colour: '#CD853F' }
        ]
    },
    {
        name: "Cool Mint",
        colours: [
            { id: 1716616407127, colour: '#98FF98' },
            { id: 1716616408138, colour: '#00FF7F' },
            { id: 1716616409149, colour: '#3CB371' },
            { id: 1716616410160, colour: '#2E8B57' },
            { id: 1716616411171, colour: '#008000' }
        ]
    },
    {
        name: "Lavender Dreams",
        colours: [
            { id: 1716616412182, colour: '#E6E6FA' },
            { id: 1716616413193, colour: '#D8BFD8' },
            { id: 1716616414204, colour: '#DDA0DD' },
            { id: 1716616415215, colour: '#EE82EE' },
            { id: 1716616416226, colour: '#DA70D6' }
        ]
    },
    {
        name: "Electric Blues",
        colours: [
            { id: 1716616417237, colour: '#0000FF' },
            { id: 1716616418248, colour: '#1E90FF' },
            { id: 1716616419259, colour: '#4169E1' },
            { id: 1716616420270, colour: '#6495ED' },
            { id: 1716616421281, colour: '#00BFFF' }
        ]
    },
    {
        name: "Pastel Parade",
        colours: [
            { id: 1716616422292, colour: '#FFB6C1' },
            { id: 1716616423303, colour: '#FFDAB9' },
            { id: 1716616424314, colour: '#E6E6FA' },
            { id: 1716616425325, colour: '#E0FFFF' },
            { id: 1716616426336, colour: '#F0FFF0' }
        ]
    },
    {
        name: "Ocean Breeze",
        colours: [
            { id: 1716616427347, colour: '#00CED1' },
            { id: 1716616428358, colour: '#40E0D0' },
            { id: 1716616429369, colour: '#48D1CC' },
            { id: 1716616430380, colour: '#20B2AA' },
            { id: 1716616431391, colour: '#5F9EA0' }
        ]
    },
    {
        name: "Rustic Charm",
        colours: [
            { id: 1716616432402, colour: '#8B4513' },
            { id: 1716616433413, colour: '#A0522D' },
            { id: 1716616434424, colour: '#CD853F' },
            { id: 1716616435435, colour: '#D2691E' },
            { id: 1716616436446, colour: '#F4A460' }
        ]
    },
    {
        name: "Retro Vibes",
        colours: [
            { id: 1716616437457, colour: '#FFD700' },
            { id: 1716616438468, colour: '#FF69B4' },
            { id: 1716616439479, colour: '#8A2BE2' },
            { id: 1716616440490, colour: '#FF4500' },
            { id: 1716616441501, colour: '#32CD32' }
        ]
    },
    {
        name: "Spring Blossom",
        colours: [
            { id: 1716616442512, colour: '#FFB6C1' },
            { id: 1716616443523, colour: '#FFC0CB' },
            { id: 1716616444534, colour: '#FFDAB9' },
            { id: 1716616445545, colour: '#FFE4E1' },
            { id: 1716616446556, colour: '#FAFAD2' }
        ]
    },
    {
        name: "Neon Nights",
        colours: [
            { id: 1716616447567, colour: '#FF1493' },
            { id: 1716616448578, colour: '#FF4500' },
            { id: 1716616449589, colour: '#FFD700' },
            { id: 1716616450600, colour: '#00FF00' },
            { id: 1716616451611, colour: '#00BFFF' }
        ]
    },
    {
        name: "Elegant Evening",
        colours: [
            { id: 1716616452622, colour: '#2F4F4F' },
            { id: 1716616453633, colour: '#696969' },
            { id: 1716616454644, colour: '#708090' },
            { id: 1716616455655, colour: '#778899' },
            { id: 1716616456666, colour: '#B0C4DE' }
        ]
    },
    {
        name: "Desert Sands",
        colours: [
            { id: 1716616457677, colour: '#DAA520' },
            { id: 1716616458688, colour: '#B8860B' },
            { id: 1716616459699, colour: '#CD853F' },
            { id: 1716616460710, colour: '#D2691E' },
            { id: 1716616461721, colour: '#DEB887' }
        ]
    }
];

export default colorPalettes;
