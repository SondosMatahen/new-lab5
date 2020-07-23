'use stric'

var keyArray=[];
var animal=[];


// let nav=$('<nav>').before('header h1')
// nav.text="inner"
// $("h1").after("<nav id='nav1'> <input  type='button' id='page1' value='page1'> <input  type='button' id='page2' value='page2'>  </nav>");



function page1(){
$.get('data/page-1.json').then(data =>{
    
   
    data.forEach(element => {
        let obj=new Photo(element.image_url,element.title,element.description,element.keyword,element.horns);
         obj.render();
        //  $('.page').show();
         obj.options();
    });

 
})
}


function page2 (){
$.get('data/page-2.json').then(data =>{

    data.forEach(element=>{
        let obj2=new Photo(element.image_url,element.title,element.description,element.keyword,element.horns);
      obj2.render();
    
       obj2.options();
       

    })

})  
}



function Photo (image_url, title,description,keyword,horns ) {
this.image_url=image_url;
this.title=title;
this.description=description;
this.keyword=keyword;
this.horns=horns;
animal.push(this);
}

Photo.prototype.render=function(){
//console.log(this)
// let sectionclone=$('#photo-template').clone();

// sectionclone.removeAttr('id');
// sectionclone.attr('class',this.keyword);
// sectionclone.addClass('page');
// $('main').append(sectionclone);
// sectionclone.find('h2').text(this.title);
// sectionclone.find('img').attr({'src':this.image_url},{'alt':this.keyword})
// sectionclone.find('p').text(this.description);

let template=$('#template').html();
let section=Mustache.render(template, this );
$('main').append(section);

// section.removeAttr('id');
// section.attr('class',this.keyword);
$('section').addClass('page');



}



Photo.prototype.options=function(){

    if(!keyArray.includes(this.keyword)){
        keyArray.push(this.keyword);   
        // let opp=`<option>${this.keyword}</option>`;
        // $('select').append.(opp);
        $('.one').append(`<option>${this.keyword}</option>`)
    }

}





$('#page1').on('click',function(){
    $('.page').remove();
    
     page1()
})


$('#page2').on('click',function(){
    $('.page').remove();
   page2();
})

page1();
// page2();
// animal.forEach(element=>{
//     element.options();
// })




$('.one').change(function(){

    $('.page').hide();
    var value=$(this).val();
   $(`.${value}`).show();
    console.log(value);
    
})

$('.sort').change(function(){

   // $('.page').remove();
    var value=$(this).val();
    sortArray (value)
    console.log(value);
    
})

function sortArray (value){
    $('.page').remove();
    if(value=='horns'){
        $('.page').remove();
        console.log('ll')
        animal.sort((a,b)=>{
            return a.horns-b.horns

        })
        animal.forEach(element => {
            element.render(); 
            console.log(element.horns)
        });

    }
    if(value=='Title'){
        $('.page').remove();
        animal.sort((a,b)=>{
            return a.title.localeCompare(b.title)

        })
        animal.forEach(element => {
            element.render(); 
        });

    }

}
