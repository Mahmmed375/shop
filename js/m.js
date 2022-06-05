

let pro2 = document.querySelectorAll(".pro1");
pro2.forEach( ( div ) => {

    div.addEventListener( "click", ( e ) => {

  window.open("html/info prodect.html","_self")

    } )
} )






let pro3 = document.querySelectorAll(".carousel-inner");
pro3.forEach( ( div ) => {

    div.addEventListener( "click", ( e ) => {

  window.open("html/info prodect.html","_self")

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



