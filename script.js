console.log('this is kalua library ')

// constructor

function Book(name ,author ,type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

//  display constructor

function Display() {
    
}

// add method to display prototype

Display.prototype.add = function(book){
    console.log("Adding to UI")
    tableBody = document.getElementById('tableBody')
    let uiString = `  <tr>
                            <td>${book.name}</td>
                            <td>${book.author}</td>
                            <td>${book.type}</td>
                       </tr> `;
    tableBody.innerHTML += uiString;                    
}


// 

Display.prototype.clear = function(){  
    let libraryForm = document.getElementById('libraryForm')
    libraryForm.reset();
}



// add submit event listener 

let libraryForm = document.getElementById('libraryForm')

libraryForm.addEventListener('submit',libraryFormSubmit)

function libraryFormSubmit(e){
    console.log('you have submitted your library form')
    let name = document.getElementById('bookName').value
    let author = document.getElementById('Author').value
    let type
    // fiction, programming , cooking

    let fiction = document.getElementById('Fiction')
    let programming = document.getElementById('Programming')
    let cooking = document.getElementById('Cooking')

    if (fiction.checked){
        type= fiction.value
    }
    else if (programming.checked){
        type= programming.value
    }
    else if (cooking.checked){
        type= cooking.value
    }

    let book =new Book(name,author,type)
    console.log(book)

    let display = new Display();
    display.add(book);
    display.clear();
    e.preventDefault()

}