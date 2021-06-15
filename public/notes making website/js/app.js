/*
function dark_mode()
{
    
}*/

console.log("hello bois and girls");
display_notes();

let add_btn = document.getElementById("add_note_btn");
add_btn.addEventListener("click", function (e) {
    let notes_ls = localStorage.getItem("notes_page");
    let texxt = document.getElementById("note_content");

    //console.log(notes_ls);

    if (notes_ls == null) {
        notes_Obj = []; // empty array
    }
    else {
        notes_Obj = JSON.parse(notes_ls);
    }
    notes_Obj.push(texxt.value); // change
    localStorage.setItem("notes_page", JSON.stringify(notes_Obj));
    texxt.value = "";
    //console.log(notes_Obj);

    display_notes();

})

function display_notes() {
    let notes_ls = localStorage.getItem("notes_page");

    //console.log(notes_ls);

    if (notes_ls == null) {
        notes_Obj = []; // empty array
    }
    else {
        notes_Obj = JSON.parse(notes_ls);
    }
    //console.log(nodlst);

    let html_code_of_notes = "";
    notes_Obj.forEach(function (element, index) {

        html_code_of_notes += `
        <div class="my-2 mx-2 card cards_custom" style="width: 18rem; id="card_custom${index}">
            <!img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Job ${index + 1}</h5>
              <p id="job_content_in_P" class="card-text">${element}</p>
              <button id="${index}" onclick="delete_note(this.id)" class="btn btn-primary">Done</button>
            </div>
          </div>
        `

    });

    let notes_pg = document.getElementById("notes_page");
    if (notes_Obj.length > 0) {
        document.getElementById("notes_page").innerHTML = html_code_of_notes;
    }
    else {
        document.getElementById("notes_page").innerHTML = "No Pending Jobs";
        document.getElementById("notes_page").style.height = "100px";
    }

    // maintain dark mode
    if (document.getElementsByTagName("nav")[0].className == "navbar navbar-expand-lg navbar-dark bg-dark")
    {
        
        document.getElementsByTagName("nav")[0].className="navbar navbar-expand-lg navbar-dark bg-dark";
        document.getElementsByTagName("body")[0].style="background-image:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('resource/getty_637326878_2000117118188430184_279676.jpeg');";
        
        document.getElementById("welcome").style.color="#e3d7b6";
        document.getElementById("notes").getElementsByTagName("div")[0].style.backgroundColor="rgba(0, 0, 0, 0.3)";
        document.getElementById("notes").getElementsByTagName("div")[3].getElementsByTagName("h1")[0].style.color="#e3d7b6"
        //document.getElementById("note_content").style.className="form-control bg-secondary";
        

        
        let c = document.getElementsByClassName("card-title");
        
        for (let i = 0; i < c.length; i++)
        c[i].style.color="#e3d7b6";

        c = document.getElementsByClassName("cards_custom");
        console.log(c);
        for (let i = 0; i < c.length; i++)
        {
            c[i].style="background-color:rgba(0, 0, 0, 0.3); width: 18rem; color: #e3d7b6;";
        }

        document.getElementsByTagName("textarea")[0].style = "background-color:rgba(0, 0, 0, 0.3); height: 100px; color: #e3d7b6;";
        document.getElementById("notes").style.color="#e3d7b6";
    }
    else
    {
        document.getElementsByTagName("nav")[0].className="navbar navbar-expand-lg navbar-light bg-light";
        document.getElementById("welcome").style.color="white";
        document.getElementsByTagName("body")[0].style="background-image: url('resource/getty_637326878_2000117118188430184_279676.jpeg');";
        document.getElementById("notes").getElementsByTagName("div")[0].style.backgroundColor="white";
        document.getElementById("notes").getElementsByTagName("div")[3].getElementsByTagName("h1")[0].style.color="white"

        // cards color
        let c = document.getElementsByClassName("card-title");
        
        for (let i = 0; i < c.length; i++)
        c[i].style.color="black";

        c = document.getElementsByClassName("cards_custom");
        console.log(c);
        for (let i = 0; i < c.length; i++)
        c[i].style="width: 18rem; color: black;";

        //document.getElementsByClassName("form-control").style = "height: 100px";
        document.getElementsByTagName("textarea")[0].style = " height: 100px;";
        document.getElementById("notes").style.color="white";
    }
}

function delete_note(index) {
    let notes_ls = localStorage.getItem("notes_page");

    //console.log("deletion of " , index);

    if (notes_ls == null) {
        notes_Obj = []; // empty array
    }
    else {
        notes_Obj = JSON.parse(notes_ls);
    }
    //notes_Obj
    notes_Obj.splice(index, 1);
    localStorage.setItem("notes_page", JSON.stringify(notes_Obj));
    
    display_notes();
}




function create_note(e) {
    let texxt = document.getElementById("note_content").textContent;
    let ele = document.createElement("div.my-2.mx-2.card");
    ele.style.width = "18rem";
    ele.createElement("div.card-body");
    ele.childNodes[0].createElement("h5.card-title");
    ele.childNodes[0].childNodes[0].textContent = "Card title";
    ele.childNodes[0].createElement("p.card-text");
    ele.childNodes[0].childNodes[1].textContent = texxt;
    ele.childNodes[0].createElement("button.btn.btn-primary");
    ele.childNodes[0].childNodes[2].textContent = "done";
    document.getElementById("notes").appendChild(ele);

}


// deleting note




document.getElementById("clrBtn").addEventListener("click", function(e)
{
    localStorage.clear();
    //delete_note(0);
    display_notes();
})

//srch ing

document.getElementById("srch_text").addEventListener("input", function(){
    //console.log("values of input chnages");

    let listt = document.getElementsByClassName("card-text");
    //console.log(listt);
    
    Array.from(listt).forEach(function(element, index)
    {
        let e = element;
        let txt = element.textContent;
        //console.log(element.parentElement.parentElement);
        if (txt.includes(document.getElementById("srch_text").value)){
            element.parentElement.parentElement.style.display = "block";
        }
        else {
            element.parentElement.parentElement.style.display = "none";
        }
    })
    //display_notes();
})


// dark mode
//console.log(document.getElementById("notes").getElementsByTagName("div")[4])

//console.log(document.getElementById("dark_mode_link"));

let e = document.getElementById("dark_mode_link").addEventListener("click", function(e){
    
    if (document.getElementsByTagName("nav")[0].className == "navbar navbar-expand-lg navbar-dark bg-dark")
    {
        document.getElementsByTagName("nav")[0].className="navbar navbar-expand-lg navbar-light bg-light";
        document.getElementById("welcome").style.color="white";
        document.getElementsByTagName("body")[0].style="background-image: url('resource/getty_637326878_2000117118188430184_279676.jpeg');";
        document.getElementById("notes").getElementsByTagName("div")[0].style.backgroundColor="white";
        document.getElementById("notes").getElementsByTagName("div")[3].getElementsByTagName("h1")[0].style.color="white"

        // cards color
        let c = document.getElementsByClassName("card-title");
        
        for (let i = 0; i < c.length; i++)
        c[i].style.color="black";

        c = document.getElementsByClassName("cards_custom");
        console.log(c);
        for (let i = 0; i < c.length; i++)
        c[i].style="width: 18rem; color: black;";

        //document.getElementsByClassName("form-control").style = "height: 100px";
        document.getElementsByTagName("textarea")[0].style = " height: 100px;";
        document.getElementById("notes").style.color="white";

    }
    else
    {
        document.getElementsByTagName("nav")[0].className="navbar navbar-expand-lg navbar-dark bg-dark";
        document.getElementsByTagName("body")[0].style="background-image:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('resource/getty_637326878_2000117118188430184_279676.jpeg');";
        
        document.getElementById("welcome").style.color="#e3d7b6";
        document.getElementById("notes").getElementsByTagName("div")[0].style.backgroundColor="rgba(0, 0, 0, 0.3)";
        document.getElementById("notes").getElementsByTagName("div")[3].getElementsByTagName("h1")[0].style.color="#e3d7b6"
        //document.getElementById("note_content").style.className="form-control bg-secondary";
        

        
        let c = document.getElementsByClassName("card-title");
        
        for (let i = 0; i < c.length; i++)
        c[i].style.color="#e3d7b6";

        c = document.getElementsByClassName("cards_custom");
        console.log(c);
        for (let i = 0; i < c.length; i++)
        {
            c[i].style="background-color:rgba(0, 0, 0, 0.3); width: 18rem; color: #e3d7b6;";
        }

        document.getElementsByTagName("textarea")[0].style = "background-color:rgba(0, 0, 0, 0.3); height: 100px; color: #e3d7b6;";
        document.getElementById("notes").style.color="#e3d7b6";
    }
})