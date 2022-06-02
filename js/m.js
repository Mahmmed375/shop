let pro = document.querySelectorAll(".prodect");



pro.forEach( ( div ) => {

    div.addEventListener( "click", ( e ) => {

  window.open("../html/info prodect.html")

    } )
} )


let next = document.querySelectorAll(".show a");
let img = document.querySelectorAll(".prodect");

next.forEach( ( a ) => {//////////

    a.addEventListener( "click", ( e ) => {//////

        next.forEach( ( a ) => {///
            a.classList.remove( "hi" );
        } )///
        e.currentTarget.classList.add( "hi" );


      

    } )//////
} )/////////////



