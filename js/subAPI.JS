//SUB API

async function sub_main() {
    const params = new URLSearchParams({ 
        query: "the Lord the Rings" })
    ;

        try {
            const response = await fetch(`https://dapi.kakao.com/v3/search/book?${params}`, {
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

            // 이미지  API
            const S_M_IMG = document.querySelectorAll(`.sub_main_img div`);
            const S_M_SLIDER = document.querySelectorAll(`.sub_bookList_box button`);
            // 텍스트 API
            const S_M_TEXT = document.querySelectorAll(`.sub_main_text div`);

            for (let i = 0; i < 5; i++) {
                const doc = data[i];
                const box1 = S_M_IMG[i];
                const box2 = S_M_SLIDER[i];
                const box3 = S_M_TEXT[i];

                // <main img>
                const img1 = document.createElement("img");
                img1.src = doc.thumbnail;
                img1.style.width = '370px';
                img1.classList.add("S_M_API_IMG");
                box1.appendChild(img1);

                // <slide img>
                const img2 = document.createElement("img");
                img2.src = doc.thumbnail;
                img2.style.width = '110px';
                box2.appendChild(img2);

                // <main text>
                const title = document.createElement("h1");
                title.textContent = doc.title;
                title.style.marginBottom = "15px";
                box3.appendChild(title);

                const price = document.createElement("h1");
                price.textContent = "₩" + doc.price;
                price.style.color = 'green';
                price.style.marginBottom = "15px";
                box3.appendChild(price);

                const p = document.createElement("p");
                p.textContent = doc.contents;
                p.style.fontSize = '18px';
                p.style.marginBottom = "30px";
                box3.appendChild(p);


                //테이블 추가
                const table = document.createElement("table");
                table.classList.add("S_M_T_table");
                box3.appendChild(table);


                const table_tr = document.createElement("tr");
                table.appendChild(table_tr);
                const table_th = document.createElement("th");
                table_th.textContent = "Book Name : "
                table_tr.appendChild(table_th);
                const table_td = document.createElement("td");
                table_td.textContent = doc.title.substring(0,40) + "...";
                table_tr.appendChild(table_td);

                const table_tr2 = document.createElement("tr");
                table.appendChild(table_tr2);
                const table_th2 = document.createElement("th");
                table_th2.textContent = "Author Name : "
                table_tr2.appendChild(table_th2);
                const table_td2 = document.createElement("td");
                table_td2.textContent = doc.authors;
                table_tr2.appendChild(table_td2);

                const table_tr3 = document.createElement("tr");
                table.appendChild(table_tr3);
                const table_th3 = document.createElement("th");
                table_th3.textContent = "Item Publish Date : "
                table_tr3.appendChild(table_th3);
                const table_td3 = document.createElement("td");
                table_td3.textContent = doc.datetime.substring(0,10);
                table_tr3.appendChild(table_td3);
                

            };

        } catch (error) {
            console.log('에러발생', error);
        }
    }


sub_main()

//oepnAPI
async function sub_bookList() {
    const sub_paramsList = [
        new URLSearchParams({ query: "dragon" }),
        new URLSearchParams({ query: "movie" }),
    ];

    const sub_bookAPI_list = ['sub_bookAPI2', 'sub_bookAPI3']

    for (let j = 0; j < sub_paramsList.length; j++) {
        try {
            const response = await fetch(`https://dapi.kakao.com/v3/search/book?${sub_paramsList[j]}`, {
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

            const boxElements = document.querySelectorAll(`.${sub_bookAPI_list[j]}`);

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


sub_bookList()