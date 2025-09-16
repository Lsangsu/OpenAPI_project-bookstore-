//oepnAPI

async function bookData() {
    const paramsList = [
        new URLSearchParams({ query: "thrones" }),
        new URLSearchParams({ query: "Dav Pilkey" }),
        new URLSearchParams({ query: "Steven Moffat" }),
        new URLSearchParams({ query: "The Lord of the Rings" }),
    ];

    const bookAPI_list = ['bookAPI1', 'bookAPI2', 'bookAPI3', 'bookAPI4']

    for (let j = 0; j < 4; j++) {
        try {
            const response = await fetch(`https://dapi.kakao.com/v3/search/book?${paramsList[j]}`, {
                method: 'GET',
                headers: {
                    Authorization: "KakaoAK e0f80eea1a64f9ba196c16c9af6f300d"
                }
            });
            if (!response.ok) {
                throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
            }


            // 영어가 많이 있는 자료만 뽑아서 출력하기
            const Maindata = await response.json();
            const origin = Maindata.documents;
            function isMostlyEnglish(text, threshold = 0.7) {
                const englishChars = text.match(/[a-zA-Z]/g) || [];
                const totalChars = text.replace(/\s/g, '');
                return totalChars.length > 0 && (englishChars.length / totalChars.length) >= threshold;

            }
            const data = origin.filter((val)=>{
                         return val.contents && isMostlyEnglish(val.contents);
            })

            const boxElements = document.querySelectorAll(`.${bookAPI_list[j]}`);

            for (let i = 0; i < boxElements.length; i++) {
                const doc = data[i];
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
                p.textContent = doc.contents.substring(0, 50) + '...';
                box.appendChild(p);

                if(j==1|j==2){
                    // <h4> 책 저자
                    const authors = document.createElement("h4");
                    authors.textContent = doc.authors;
                    box.appendChild(authors);
                }else if(j==3){
                    // 별점
                    const Star = document.createElement("p");
                    const rating = Math.floor(Math.random() * 5) +1;
                    let FullStar = "★" .repeat(rating);
                    let EmptyStar = "☆" .repeat(5-rating); 
                    Star.textContent = FullStar + EmptyStar;
                    Star.style.color = "gold";
                    Star.style.fontSize = "20px";
                    box.appendChild(Star);
                    
                } else{
                    // <h3> 책 가격
                    const price = document.createElement("h3");
                    price.textContent = doc.price;
                    box.appendChild(price);
                    // <h3> 판매 가격
                    const sale_price = document.createElement("h3");
                    sale_price.textContent = doc.sale_price;
                    box.appendChild(sale_price);
                }
            };

        } catch (error) {
            console.log('에러발생', error);
        }
    }
}


bookData();




        