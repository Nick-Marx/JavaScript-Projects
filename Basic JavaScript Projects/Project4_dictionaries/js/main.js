//create a dictionary, delete a KVP, then try to write that KVP to the page
function Dictionary_One(){//create function
    var Book = {//create dictionary with 4 KVPs
        Genre:"Fiction",
        Color:"Dark_Blue",
        Number_of_Pages:415,
        Title:"Generic Novel"
    };
    delete Book.Color;//delete a KVP
    document.getElementById("dictionary").innerHTML = Book.Color;//try to write the deleted KVP to the page
}