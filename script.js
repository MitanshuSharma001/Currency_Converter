
const curapi = async () => {
    for (let a in countryList) {
        for (let i = 0; i < 2; i++) {
            let xy = document.createElement("option")
            xy.value = a
            xy.innerText = `${countryNameList[a]} ${a}`
            document.getElementsByTagName("select")[i].append(xy.cloneNode(true));
        }
    }
    let amount;
    let flagurl1;
    let flagurl2;
    let currcode5;
    let currcode6;

    let input1 = document.getElementById("input")
    const input2 = () =>{
        return new Promise((resolve)=>{
            input1.addEventListener("input", (evt)=>{
                let oldamount = input1.value;
                resolve(amount = oldamount)
            })
        })
    }


console.log(document.getElementsByTagName("select")[0].firstElementChild)
let io = document.getElementsByTagName("select")[0]
let option1 = io.querySelector('option[value="AED"]')
option1.selected = true
console.log(document.getElementsByTagName("select")[0].firstElementChild)


    let selectopt1 = document.getElementsByTagName("select")[0]
    const pip = () => {
        return new Promise((resolve) => {
            selectopt1.addEventListener("change", (evt) => {
                let currcode3 = evt.target.value;
                console.log(countryList.INR)
                let currcodeN = currcode3.toLowerCase()
                //flag started
                let flagx = document.createElement("img")
                    flagurl1 = countryList[currcode3]
                console.log(flagurl1)
                    // flagurl1 = countryList.currcode3
                flagx.src = "https://flagsapi.com/"+flagurl1+"/shiny/64.png"
                flagx.classList.add("flag1")
                document.body.append(flagx)
                //flag ended & name started
                let name1 = document.createElement("div")
                name1.className = "c1"
                name1.innerText = countryNameList[currcode3]
                document.body.append(name1)
                resolve(currcode5 = currcodeN)
            })
        })
    }
    let selectopt2 = document.getElementsByTagName("select")[1]
    const top = () => {
        return new Promise((resolve) => {
            selectopt2.addEventListener("change", (evt) => {
                let currcode4 = evt.target.value;
                let currcodeF = currcode4.toLowerCase()
                //flag started
                let flagx = document.createElement("img")
                    flagurl2 = countryList[currcode4]
                    flagx.src = "https://flagsapi.com/"+flagurl2+"/shiny/64.png"
                flagx.classList.add("flag2")
                document.body.append(flagx)
                //flag ended & name started
                let name2 = document.createElement("div")
                name2.className = "c2"
                name2.innerText = countryNameList[currcode4]
                document.body.append(name2)
                resolve(currcode6 = currcodeF)
            })
        })
    }
    amount = input2()
    currcode5 = await pip();
    currcode6 = await top();
    console.log(amount)
    console.log(currcode5)
    console.log(currcode6)

    // let count3 = 23
    // let numcount3 = Number.parseInt(count3)
    // const x1 = performance.now()
    // let p = await fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/" + currcode5 + "/" + currcode6 + ".json");
    // let data = await p.json()
    // console.log(data)
    // let rate = await data[currcode6]
    // let lat_date = await data.date
    // const x2 = performance.now();



    // let finaloutput = numcount3 * rate;

    const btn = document.getElementsByTagName("button")[0]

    btn.addEventListener("click",async (evt) => {
        evt.preventDefault();
        
        
        // const btn2 = document.getElementsByName("button")[1]
        // btn2.addEventListener("click",async (evt)=>{
        //     await pip()
        //     selectopt1 = document.getElementsByTagName("select")[1]
        //     await top()
        // })



    let numcount3 = Number.parseInt(amount)
    const x1 = performance.now()
        let data;
        try {
    let p = await fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/" + currcode5 + "/" + currcode6 + ".json");
    data = await p.json()
    }
    catch (error) {
        console.error('Error fetching data: Reason----->', error);
        document.getElementsByClassName("output")[0].innerHTML = "error fetching currency possible reasons:(currency doesn't exist)";
    }
    console.log(data)
    let rate = await data[currcode6]
    let lat_date = await data.date
    const x2 = performance.now();
    let finaloutput = numcount3 * rate;
        document.getElementsByClassName("output")[0].innerHTML = `${numcount3} ${currcode5.toUpperCase()} is ${finaloutput.toFixed(2)} ${currcode6.toUpperCase()} ->-latest by->- ${lat_date}`;
        if(currcode5 === currcode6 && (input1.value<0 || input1.value=="")){
            document.getElementsByClassName("output")[0].innerHTML = "Same currencies Entered";
        }
        else if(input1.value==""){
            document.getElementsByClassName("output")[0].innerHTML = "Amount N/A";
        }
        else if(input1.value<0) {
            document.getElementsByClassName("output")[0].innerHTML = "Not Valid Amount";
        }
        else if(input1.value==0) {
            document.getElementsByClassName("output")[0].innerHTML = "Not Valid Amount";
        }
        else{
            document.getElementsByClassName("output")[0].innerHTML = `${numcount3} ${currcode5.toUpperCase()} is ${finaloutput.toFixed(2)} ${currcode6.toUpperCase()} ->-latest by->- ${lat_date}`;
        }
        document.getElementsByClassName("timetaken")[0].innerHTML = "Time Taken for Retrieving API=> " + (x2 - x1).toFixed(2) + " ms(milliseconds)"
    })
}

curapi();
