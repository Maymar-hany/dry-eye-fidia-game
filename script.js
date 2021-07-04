
var compined={
  'amino+hyaluronic0.15%':'images/hyalfid.png',
  'amino+hyaluronic0.3%':'images/hyalfid-gel.png',
  'hyaluronic0.15%+riboflavin':'images/ribolisin.png',
  'hyaluronic0.15%+echinacea':'images/iridium.png',
  'ginkgo+hyaluronic0.15%':'images/trium.png',
  'lipoic+hypromelose':'images/tioretin.png'
}
var infictions = [
 { 
  'images/trium.png':'Surgery & Trauma',
  'images/hyalfid-gel.png':'Multifactorial Dry Eye' ,
  'images/hyalfid.png':'Severe Dry Eye',
  'images/tioretin.png':'Diabetes', 
  'images/iridium.png':'Dry eye due to Iatrogenic alterations',
  'images/ribolisin.png':'Uv Light',
 }
 
]
var compounds = [
  {
    id:'amino',
    name:'Amino Acid',
    img:'images/amino.svg'
  },
  {
    id:'ginkgo',
    name:'Ginkgo biloba',
    img:'images/Ginkgo.svg'
  },
  {
    id:'hyaluronic0.15%',
    name:'Hyaluronic Acid 0.15%',
    img:'images/Hyaluronic Acid.svg'
  },
  {
    id:'hyaluronic0.3%',
    name:'Hyaluronic Acid 0.3%',
    img:'images/Hyaluronic Acid.svg'
  },
  {
    id:'echinacea',
    name:'Echinacea',
    img:'images/echinacea.svg'
  },
  {
    id:'hypromelose',
    name:'Hypromelose',
    img:'images/Hypromellose.png'
  }
  ,

  {
    id:'lipoic',
    name:'Lipoic',
    img:'images/lipoic.svg'
  },


  {
    id:'riboflavin',
    name:'Riboflavin',
    img:'images/Riboflavin.svg'
  } 
]
var medicines=[
  {
    id:'hyalfid',
    class:'hyalfid1',
    img:'images/hyalfid.png',
    des:'images/hyalfid-des.jpg'

  },
  {
    id:'hyalfidgel',
    class:'hyalfidgel1',
    img:'images/hyalfid-gel.png',
    des:'images/hyalfid-gel-des.jpg'

  },
  {
    id:'trium',
    class:'trium1',
    img:'images/trium.png',
    des:'images/Trium-des.jpg'
  },


  {
    id:'iridium',
    class:'iridium1',
    img:'images/iridium.png',
    des:'images/iridium1-des.jpg'
  },
  {
    id:'ribolisin',
    class:'ribolisin1',
    img:'images/ribolisin.png',
    des:'images/ribolsin-des.jpg'
  },
  {
    id:'tioretin',
    class:'tioretin1',
    img:'images/tioretin.png',
    des:'images/tiorten-des.jpg'
  },
 
]
var patients =[
  {
    attribute:'images/trium.png',
    id:'Post Surgery Dry eye',
    infiction:'Patients with dry eye post eye surgery',
    img:'images/icon1.svg'
  },
  {
    attribute:'images/hyalfid.png',
    id:'Moderate dry eye',
    infiction:'Patients with Multifactorial Dry eye e.g long screen time',
    img:'images/icon4.svg'
  },
  {
    attribute:'images/hyalfid-gel.png',
    id:'Severe Dry eye',
    infiction:'Patients with Multifactorial Dry eye e.g long screen time',
    img:'images/icon2.svg'
  },
  {
    attribute:'images/iridium.png',
    id:'Dry eye due to Iatrogenic alterations',
    infiction:'',
    img:'images/icon8.svg'
  },
  {
    attribute:'images/tioretin.png',
    id:'Diabetic Dry Eye',
    infiction:'',
    img:'images/icon5.svg'
  },
  {
    attribute:'images/ribolisin.png',
    id:'Dry eye due to photo-oxidative stress',
    infiction:'',
    img:'images/icon3.svg'
  },

]
var array =[]
var count = 0;
var score =0;
var item2='';
var item3 =''
var comp ='';
var show ='';
var dropped1='';
var dropped2="";
var dropped3="";
var productResult="";
var concentartion ="";
var activated ="";
var hint = document.getElementById('hint')
var compoundsdiv = document.getElementById('compounds');
var products = document.getElementById('products');
var medicine = document.getElementById("medicine");
var patientsdiv=document.getElementById('patients')
var lab = document.getElementById('labs')
var result = document.getElementById("relieved")
var suffer = document.getElementById("suffer-div")
var amount = document.getElementById("amount-div")
var toast = document.getElementById("snackbar");
var product = document.getElementById("product");
var resetbtn = document.getElementById('resetbtn')
var guide = document.getElementById('guide')
var squares = document.getElementById('squares')
var startPos = null;
var open = document.getElementById('relieved')
let outerClick = true;
var intro = new Audio('intro.mp3');
window.onload=function() {
  addCompounds();
  addPatients();
  showMedicine();
  showProducts();
  
 
}
var med=""
window.dragMoveListener = dragMoveListener
function showMedicine ( params  ){

    medicines.forEach(element => {
   /*    if(element.id==='iridium-gel'){
        med = ` 
        <div id="${element.id}" class="is-hidden medicine-item">
    <img width="120px" id="medicImg" src="${element.img}">
    </div>
    `
      }else{
        med = ` 
        <div id="${element.id}" class="single-medicine is-hidden  medicine-item"> 
    <img  id="medicImg" src="${element.img}">
    </div>
    `
      } */
      med = ` 
        <div id="${element.id}" class="single-medicine d-none  medicine-item col-md-12"> 
    <img  id="medicImg" src="${element.img}" class="img-fluid">
    </div>
    `
   medicine.innerHTML +=med 
  
  }); 
  
}
var cunt=0
function showProducts(){
  medicines.forEach(element => {
    cunt++
 
      med = ` 
     <div id="product-style"  class="col-md-2">
      <div id="${element.class}" class="single-product  product-item " onclick = "openDescription(this.id)">
    
  <img    class=" img-fluid medicImg1" src="${element.img}">
  <div id="des-txt" class="img__description_layer">
  <p class="img__description">Click For Description</p>
</div> 
  </div>      
  </div>
  `
 
 
  products.innerHTML +=med

}); 
}
function addCompounds (){
  var compound=""
  compounds.forEach(element => {

   // var compound = document.createElement('div')
  
    compound=
    `
    <div id="item-style" class="col-md-12  col-8"> 
    <div  class="item-style" >
   <img id="${element.id}" width="22%" height="22%" class="item" src="${element.img}" >
   <span id="name" > ${element.name}</span>
   </div>
   </div>
        `
        compoundsdiv.innerHTML+= compound
    // compound.classList.add('item')
    // compound.classList.add('is-2')
    // compound.id=element.id
  //compoundsdiv.insertBefore (compound , lab)
  });
}
function addPatients (){
  patients.forEach(element => {
    var patient = `
    <div id="patient-style" class="col-md-12 col-8">
    <div id="patient-icon" class="">
    <div  id="${element.id}" class="dropzone-patient row" data-medic="${element.attribute}">
    <div class="col-4">
    <img width="100%" height="100%"  src="${element.img}" >
    </div>
    <div class="col-8 d-flex align-items-center pl-0">
    <span id="patient-text-white"> ${element.id}</span>
    </div>
     </div>   
    </div
    </div>
    `

  patientsdiv.innerHTML +=patient
  });
}
function dragMoveListener (event) {
  var target = event.target
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy
  target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)'
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}


interact('.item').draggable({
    inertia: true,
  
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: document.querySelector('#game'),
        endOnly: true,
      })
    ],
    snap: {
      targets: [
        // snap to this point
        { x: 100, y: 100, range: 25 },
  
        // give this function the x and y page coords
        // and snap to the object returned
        function (x, y) {
          return {
            x: x,
            y: (75 + 50 * Math.sin(x * 0.04)),
            range: 40
          };  
        },
  
        // create a function that snaps to a grid
        interact.createSnapGrid({
          x: 50, 
          y: 50, 
          range: 10,
          offset: { x: 5, y: 10 } // optional
        })  
      ],
      // this range is used if a target doesn't specify it's range
      range: Infinity
    },
    onstart:function(event){
    
     
        var rect = interact.getElementRect(event.target);
        if(event.target.getAttribute('data-start-x')==null){
         
        // record center point when starting the very first a drag
        event.target.setAttribute('data-start-x', rect.left + rect.width  / 2);
        event.target.setAttribute('data-start-y', rect.top  + rect.height / 2); }
      
    },
      onend: function (event) {
        if(!event.target.className.includes('dropped')){
          event.target.style.transform="none"
          event.target.setAttribute('data-x', 0)
          event.target.setAttribute('data-y',0) 
        }
       
      
  }
})

interact('.item')
  .draggable({
    listeners: {
       move: dragMoveListener,
   
      
    },
    inertia: true,   
  })
  interact('.medicine-item')
  .draggable({
    listeners: { move: dragMoveListener } ,
    inertia: true,
 
   onstart:function(event){
  event.target.style.height='80px'
     var medicine = event.target.querySelector('#medicImg')
   medicine.style.height='80px'
}
})
 
  interact('.dropzone')
  .dropzone({
    accept: '.item',
    overlap: 0.75,

    ondropactivate: function (event) {
      const item = event.relatedTarget
      item.classList.add('dragging')
      event.target.id="components"
      activated=item.id
    
   
    },
    ondropdeactivate: function (event) {
      const item = event.relatedTarget
      event.target.id=""
   
      //item.classList.add('item')
      item.classList.remove('cant-drop','shake')
      item.classList.remove('dragging', 'cannot-drop')
    },
    ondragenter: function(event) {
      var draggableElement = event.relatedTarget
    

    },
    ondragleave: function(event) {
      const item = event.relatedTarget
      item.classList.remove('can-drop')
      item.classList.add('cannot-drop')
      item.classList.remove('drop-target')
      item.classList.remove('cant-drop','shake','dropped')
      
      var elems = document.getElementsByClassName('msg-div')
      for(var i=0; i<elems.length; i++) {
       elems[i].style.display='none'
      }
     
       
      resetbtn.style.display="none"
      guide.style.display='inline-block'
      
      var droppedelement=''
      for (let index = 0; index < array.length; index++) {
        var element = array[index];
        
      }
      if(droppedelement !=''){
      droppedelement = document.getElementById(element)
      droppedelement.classList.remove('can-drop')
      droppedelement.classList.add('cannot-drop')
      droppedelement.classList.remove('drop-target')
      droppedelement.classList.remove('cant-drop','shake','dropped')
      droppedelement.style.transform="none"
      droppedelement.setAttribute('data-x', 0)
      droppedelement.setAttribute('data-y',0) 
    }
      if(count!=0){
        count-=1
      }
      
      item2=''
        medic=document.getElementById('medicine')
      var currentmedic = document.getElementById(show.id)
      if(currentmedic !== null){
      if(currentmedic.className.includes('medicine-item')){
        currentmedic.classList.add('d-none')
      }
    }
    },
   
    ondrop:function(event){
      const item = event.relatedTarget
      item.classList.add('dropped')

      guide.style.display='none'
      
      if (item2===''){
        item2 =event.relatedTarget.id
      }else{
        item2 +="+" +event.relatedTarget.id
      }
    
      if(hint.style.display=='block'){
      
      console.log('hintt');
     
      item.classList.remove('can-drop')
      item.classList.add('cannot-drop')
      item.classList.remove('drop-target')
      item.classList.remove('cant-drop','shake','dropped')
      item.style.transform="none"
      item.setAttribute('data-x', 0)
      item.setAttribute('data-y',0) 
      resetbtn.style.display="none"
      item2=''
array=[]
    }
    else{
      resetbtn.style.display="block"
    }
      item.classList.remove('cannot-drop')
      item.classList.add('can-drop')
      item.classList.add('drop-target')
       var data = event.relatedTarget.id
       var target = event.target
       medicdiv = document.createElement('div')
       count++
       addConcentration();
      
       var rect = document.getElementById('components').getBoundingClientRect();
    
      
      
  
      
  },
})

 
  interact('.dropzone-patient')
  .dropzone({
    accept: '.medicine-item',
    overlap: 0.25,
   
    ondropactivate: function (event) {
      const item = event.relatedTarget
      item.classList.add('dragging')
    },
    ondropdeactivate: function (event) {
      const item = event.relatedTarget
      item.classList.remove('dragging', 'cannot-drop')
    },
    ondragenter: function(event) {
      const item = event.relatedTarget
     
          
           
    },
    ondragleave: function(event) {
      const item = event.relatedTarget
      item.classList.remove('can-drop')
      item.classList.add('cannot-drop')
      var d= event.target.id
      
     /*   var i = document.querySelector("#"+d).querySelector("#check")
      i.style.display = 'none' */
      
    },
    ondrop:function(event) {

      var audio = new Audio('mixkit-achievement-bell-600.wav');
      const item = event.relatedTarget
      item.classList.remove('cannot-drop')
      item.classList.add('can-drop')  
      
       if(item.className.includes('medicine-item')){
         //currentmedic = item.querySelector("#"+show.id).querySelector('#medicImg').getAttribute('src') 
         currentmedic = item.querySelector('#medicImg').getAttribute('src')
         
       }
       var targetid= event.target.id
     
      var attr=document.getElementById(targetid).getAttribute('data-medic')
   
         
      if (attr == currentmedic){
       
        $('#relieved').modal('show')
      document.getElementById("score").innerHTML = ++score;
      audio.play();
      var currentProduct= show.id
      
     document.getElementById(currentProduct+'1').querySelector('.medicImg1').style.opacity='1'
     show.classList.add('d-none')
     var em = document.getElementById(currentProduct+'1').querySelector('.medicImg1')
     
     var  elementOpacity = window.getComputedStyle(em).getPropertyValue("opacity");
     var descripTxt =document.getElementById(currentProduct+'1').querySelector('#des-txt')
    
       if(elementOpacity=='1'){
        descripTxt.style.display="flex"
      }
      hint.style.display='none'
      guide.style.display='inline-block'
      
      }else{
        $('#suffer-div').modal('show')
 
      }
      result.onclick = () => {
        if (score===medicines.length){
          openfinalscore();
         }
      }
    
    
    }
    

  })

   function openfinalscore(){
  
    var audio = new Audio('winsound.mp3');
    
    audio.play();
    document.getElementById("sc").innerHTML=score;
    $('#winner').modal('show')
    
  }
  function closefinalscore(){
    winner.classList.remove('is-active')
  }
  function matchproduct(){
    product.classList.remove('is-active')
    show.classList.remove('d-none')
  }
  function closeproduct(){
    show.classList.remove('d-none')
    product.classList.remove('is-active')
  }
  function closeresult(){
  
   //var productStyle= document.getElementById('product-style')
   // productResult.classList.add('swiper-slide')
      productResult.classList.remove('d-none')
     // dropped1.classList.remove('is-hidden')
                
                if (score===1){
                  openfinalscore();
                 }
  }
  function closesuffer(){
   
      suffer.style.display = 'none';
      suffer.style.opacity = 0;
 
  }
function startGame() {
  var start = document.getElementById("startgame")
  start.classList.add('d-none')
  document.body.style.overflowY = "scroll";
 intro.play()
  intro.volume="0.05"
  

}

var descripClicked=0
function openDescription(productId) {
  var em = document.getElementById(productId).querySelector('.medicImg1')
var  elementOpacity = window.getComputedStyle(em).getPropertyValue("opacity");
var descripTxt = document.getElementById('des-txt')

  if(elementOpacity==1){
  
    descripClicked=1
    var decription= document.getElementById("description");
    var newid = productId.slice(0, -1);
    medicines.forEach(element => {
      if(element.id == newid){
        decription.src=element.des
        
      } 
    })
    $('#description-div').modal('show')
   
  }


  
}
function closedescription(){
  descrip.classList.remove('is-active')
}

window.onclick = function(event) {
  
  if(show !=''){
    var medicineClick =show.querySelector('#medicImg')
  }
  if(event.target!=suffer && event.target!=medicineClick ){ 
    suffer.classList.remove('is-active')
  }
   if(result.className.includes('show') &&event.target!=medicineClick ) {
    closeresult()
   }
}


function reset (){
  guide.style.display='inline-block'
   hint.style.display="none"
   var elems = document.getElementsByClassName('msg-div')
   for(var i=0; i<elems.length; i++) {
    elems[i].style.display='none'
   }
  
 
   if(show !== ''){
    show.classList.add('d-none')
   }

  resetbtn.style.display="none"
  var droppedelement=''
for (let index = 0; index < array.length; index++) {
  var element = array[index];
 
    droppedelement = document.getElementById(element)

 droppedelement.classList.remove('can-drop')
 droppedelement.classList.add('cannot-drop')
 droppedelement.classList.remove('drop-target')
 droppedelement.classList.remove('cant-drop','shake','dropped')
 droppedelement.style.transform="none"
 droppedelement.setAttribute('data-x', 0)
 droppedelement.setAttribute('data-y',0)  
}
console.log(array);
item2=''
array=[]

}
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
function filterIt(arr, searchKey) {
  return arr.filter(obj => Object.keys(obj).some(key => obj[key].includes(searchKey)));
}
function addConcentration(){
  var firstarray = item2.split("+");
  array=firstarray.filter(onlyUnique)
  if(array.length<3){

 var one =array[0]
 var two = array[1]

 var medicTarget =
 compined[`${one}+${two}`] || compined[`${two}+${one}`]
  

if(medicTarget!==undefined ){

  medicines.forEach(element => {
    if(element.img === medicTarget){
      
      show = document.getElementById(element.id)
      var em = document.getElementById(show.id+'1').querySelector('.medicImg1')
      var  elementOpacity = window.getComputedStyle(em).getPropertyValue("opacity");
      if(elementOpacity!=1){
      var product = document.getElementById("product");
      var output= document.getElementById("output");
      
      var audio = new Audio('pop.wav');
      productResult = document.getElementById(show.id+'1')
      
//var compare = document.querySelector("#"+productResult.id).querySelector('#medicImg').getAttribute('src')

      if(!productResult.className.includes('d-none')){
      /*   if(medicTarget==='images/iridium-gel.png'){
          output.style.height = '150px';
          output.style.width = '200px';
          output.src=medicTarget
        }else{
          output.style.height = '328px';
          output.style.width = '168px'; 
          output.src=medicTarget
        } */
     
          dropped1 = document.getElementById(one)
      
          dropped2 = document.getElementById(two)
       
      
         
          dropped1.classList.add('animate__animated','animate__rollOut','animate__slow')
          dropped2.classList.add('animate__animated','animate__rollOut','animate__slow')
          setTimeout(function(){
            dropped1.classList.remove('animate__animated','animate__rollOut','animate__slow')
            dropped1.classList.remove('can-drop')
            dropped1.classList.add('cannot-drop')
            dropped1.classList.remove('drop-target')
           // dropped1.classList.remove('concentration-added')
            dropped1.classList.remove('cant-drop','shake','dropped')
          dropped1.style.transform="none"
          dropped2.classList.remove('animate__animated','animate__rollOut','animate__slow')
          dropped2.classList.remove('can-drop')
         dropped2.classList.add('cannot-drop')
         dropped2.classList.remove('drop-target')
         //dropped2.classList.remove('concentration-added')
         dropped2.classList.remove('cant-drop','shake','dropped')
       dropped2.style.transform="none"
        },2000)
       
       
        setTimeout(function(){
          resetbtn.style.display="none"
      hint.style.display='block'
      var elems = document.getElementsByClassName('msg-div')
      for(var i=0; i<elems.length; i++) {
       elems[i].style.display='none'
      }
     
          show.classList.remove('d-none')
          
          item2=''
          array=[]
          audio.play();
      },1500)
       
      
   
  
}

}
else{
  document.getElementById('found-div').style.display='flex'
}
    }
})
}else if(medicTarget== undefined && array.length > 1 ){
  document.getElementById('error-div').style.display='flex'
  
}
}else{

  document.getElementById('notallowed-div').style.display='flex'
  var droppedelement=''
  for (let index = 0; index < array.length; index++) {
    var element = array[index];
  
      droppedelement = document.getElementById(element)
      
     
}
document.getElementById('error-div').style.display='none'
droppedelement.classList.remove('can-drop')
droppedelement.classList.add('cannot-drop')
droppedelement.classList.remove('drop-target')
droppedelement.classList.remove('concentration-added')
droppedelement.classList.remove('cant-drop','shake','dropped')
droppedelement.style.transform="none"
droppedelement.setAttribute('data-x', 0)
droppedelement.setAttribute('data-y',0) 
console.log(array);
}

}
var list = document.getElementsByClassName("amount-btn");
for (var i = 0; i < list.length; i++) {
   list[i].addEventListener('click', addConcentration
    
   )
   
}
function turnSoundOff(){
 var off= document.getElementById('soundoff')
  off.classList.remove('d-none')
  var on= document.getElementById('soundon')
  on.classList.add('d-none')
 intro.pause()
}
function turnSoundOn(){
  var off= document.getElementById('soundoff')
   off.classList.add('d-none')
   var on= document.getElementById('soundon')
   on.classList.remove('d-none')
  intro.play()
 }
