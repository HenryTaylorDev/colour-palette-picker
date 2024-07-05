export const getRandomColour = () => {    
    const letters = '0123456789ABCDEF';
    let newHex = '#';
    for (let i = 0; i < 6; i++) {
      newHex += letters[Math.floor(Math.random() * 16)];
    }
    return newHex;
}