animals = [
    { id: 1, ten: "Chim chào mào", 
        anh: "./image/crested bird/crested bird_1.jpg", 
        mota: "chim chào mào", 
        thuvien: ["./image/crested bird/crested bird_1.jpg", "./image/crested bird/crested bird_2.jpg", "./image/crested bird/crested bird_3.jpg",
        "./image/crested bird/crested bird_6.jpg", "./image/crested bird/crested bird_5.jpg", "./image/crested bird/crested bird_7.jpg", "./image/crested bird/crested bird_8.jpg"
    ] },
    { id: 2, ten: "con ngựa", 
        anh: "./image/horse/horse_1.jpg", 
        mota: "con ngựa là mã chiến", 
        thuvien: ["./image/horse/horse_1.jpg", "./image/horse/horse_2.jpg", "./image/horse/horse_3.jpg",
        "./image/horse/horse_4.jpg", "./image/horse/horse_5.jpg", "./image/horse/horse_6.jpg", "./image/horse/horse_7.jpg"
    ] },
    { id: 3, ten: "có voi sát thủ",
         anh: "./image/killer whale/killer whale_1.jpg", 
         mota: "cá voi sát thủ kẻ săn mồi dưới biển", 
         thuvien: ["./image/killer whale/killer whale_1.jpg", "./image/killer whale/killer whale_2.jpg", "./image/killer whale/killer whale_3.jpg",
        "./image/killer whale/killer whale_4.jpg", "./image/killer whale/killer whale_5.jpg", "./image/killer whale/killer whale_6.jpg", "./image/killer whale/killer whale_7.jpg"
    ] },
    { id: 4, ten: "sư tử", 
        anh: "./image/lion/lion_1.jpg", 
        mota: "sư tử chúa tể sân lâm", 
        thuvien: ["./image/lion/lion_1.jpg", "./image/lion/lion_2.jpg", "./image/lion/lion_3.jpg",
            "./image/lion/lion_4.jpg", "./image/lion/lion_5.jpg", "./image/lion/lion_6.jpg", "./image/lion/lion_7.jpg"
    ] },
    { id: 5, ten: "tê giác",
         anh: "./image/rhino/rhino_1.jpg", 
         mota: "con tê giác", 
         thuvien: ["./image/rhino/rhino_1.jpg", "./image/rhino/rhino_2.jpg", "./image/rhino/rhino_3.jpg",
            "./image/rhino/rhino_4.jpg", "./image/rhino/rhino_5.jpg", "./image/rhino/rhino_6.jpg", "./image/rhino/rhino_7.jpg"

    ] }
];

const animalListDiv = document.getElementById('animalList');

if (animalListDiv) {
    animals.forEach(animal => {
        const card = document.createElement('div');
        card.className = 'animal-card';
        card.innerHTML = `
            <img src="${animal.anh}" alt="${animal.ten}">
            <h3>${animal.ten}</h3>
        `;
        
        card.onclick = function() {
        
            localStorage.setItem('selectedAnimal', JSON.stringify(animal));
          
            window.location.href = 'detail.html';
        };
        animalListDiv.appendChild(card);
    });
}