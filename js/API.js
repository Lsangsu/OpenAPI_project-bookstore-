//oepnAPI

async function bookData() {
    const paramsList = [
        new URLSearchParams({ query: "웹소설" }),
        new URLSearchParams({ query: "인기" }),
        new URLSearchParams({ query: "베스트셀러" }),
        new URLSearchParams({ query: "만화" }),
    ];

    const bookAPI_list = ['bookAPI1', 'bookAPI2', 'bookAPI3', 'bookAPI4']

    for (let i = 0; i < 4; i++) {
        try {
            const response = await fetch(`https://dapi.kakao.com/v3/search/book?${paramsList[i]}`, {
                method: 'GET',
                headers: {
                    Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161"
                }
            });
            if (!response.ok) {
                throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
            }

            const data = await response.json();

            const boxElements = document.querySelectorAll(`.${bookAPI_list[i]}`);
            console.log(boxElements.length)

            for (let i = 0; i < boxElements.length; i++) {
                const doc = data.documents[i];
                const box = boxElements[i];

                // <img>
                const img = document.createElement("img");
                img.src = doc.thumbnail;
                box.appendChild(img);

                // <h2> 제목
                const h3 = document.createElement("h2");
                h3.textContent = doc.title.substring(0, 10) + '...';
                box.appendChild(h3);

                // <p> 내용 일부
                const p = document.createElement("p");
                p.textContent = doc.contents.substring(0, 50) + '...';;
                box.appendChild(p);

                // <h3> 책 가격
                const price = document.createElement("h3");
                price.textContent = doc.price;
                box.appendChild(price);

                // <h3> 판매 가격
                const sale_price = document.createElement("h3");
                sale_price.textContent = doc.sale_price;
                box.appendChild(sale_price);
            };

        } catch (error) {
            console.log('에러발생', error);
        }
    }
}


bookData();




        