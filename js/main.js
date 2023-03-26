let boo = false;
sessionStorage.setItem("boo", "false");


function login() {
console.log("SURPRISE BOO");
    if (boo === false){
        boo = true;
    } else {
        boo = false;
    }

    if (boo) {

        document.getElementById("mainnav").innerHTML = `
        
        <a href="browse.html">Browse For Items</a>
        <a href="friendLists.html">Manage Friend List</a>
        <a href="contactUs.html">Contact Us</a>
        <a href="about.html">About</a>
        <a href="howToUse.html">How to Use This Site</a>
        <a href="accountInfo.html" class="acct"><img src="acct.png" height="40px" width="40px"></a>`;
     
    
    }

    console.log(boo);

}

document.getElementById("login").addEventListener("click",login);