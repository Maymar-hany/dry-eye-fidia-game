
var compined={
  'amino+hyaluronic0.15%':'images/hyalfid.png',
  'amino+hyaluronic0.3%':'images/hyalfid-gel.png',
  'amino+hyaluronic0.15%+riboflavin':'images/ribolisin.png',
  'amino+hyaluronic0.15%+echinacea':'images/iridium.png',
  'ginkgo+hyaluronic0.15%':'images/trium.png',
  'nacl+hyaluronic0.05%':'images/edenorm.png',
  'amino+liposome':'images/tearfid.png',
  'carbopol+echinacea+aloevera':'images/iridium-gel.png',
  'amino+lipoic+hypromelose':'images/tioretin.png'
}
var infictions = [
 { 
  'images/trium.png':'eye-post',
  'images/hyalfid-gel.png':'long-screen' ,
  'images/hyalfid.png':'long-screen',
  'images/tioretin.png':'diabetic', 
  'images/edenorm.png':'post-surgery', 
  'images/tearfid.png':'Meibomian', 
  'images/iridium.png':'dry-eye',
  'images/ribolisin.png':'uv-light',
  'images/iridium-gel.png':'red-eye',
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
    id:'hyaluronic',
    name:'Hyaluronic Acid',
    img:'images/Hyaluronic Acid.svg'
  },
 
  {
    id:'carbopol',
    name:'Carbopol',
    img:'images/carbopol.svg'
  },
  {
    id:'echinacea',
    name:'Echinacea',
    img:'images/echinacea.svg'
  },
  {
    id:'hypromelose',
    name:'Hypromelose',
    img:'images/Hypromellose.psd.png'
  }
  ,
   {
    id:'aloevera',
    name:'Aloe Vera',
    img:'images/aloevera.svg'
  }
  ,
  {
    id:'lipoic',
    name:'Lipoic',
    img:'images/lipoic.svg'
  },
  {
    id:'liposome',
    name:'Liposome',
    img:'images/liposome.png'
  }
  ,
  {
    id:'nacl',
    name:'NaCL',
    img:'images/nacl.svg'
  } 
  ,
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
    id:'hyalfid-gel',
    class:'hyalfid-gel1',
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
    id:'edenorm',
    class:'edenorm1',
    img:'images/edenorm.png',
    des:'images/edenorm-des.jpg'

  },
  {
    id:'tearfid',
    class:'tearfid1',
    img:'images/tearfid.png',
    des:'images/tearfid-des.jpg'
  },

  {
    id:'iridium',
    class:'iridium1',
    img:'images/iridium.png',
    des:'images/iridium-des.jpg'
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
  {
    id:'iridium-gel',
    class:'iridium-gel1',
    des:'images/iridium-des.jpg',
    img:'images/iridium-gel.png'
  },
  
]
var patients =[
  {
    attribute:'images/trium.png',
    id:'eye-post',
    infiction:'Patients with dry eye post eye surgery',
    img:'images/icon1.svg'
  },
  {
    attribute:'images/hyalfid.png',
    id:'long-screen',
    infiction:'Patients with Multifactorial Dry eye e.g long screen time',
    img:'images/icon4.svg'
  },
  
  {
    attribute:'images/edenorm.png',
    id:'post-surgery',
    
    img:'images/icon7.svg'
  },
  {
    attribute:'images/tearfid.png',
    id:'Meibomian',
    infiction:'',
    img:'images/icon2.svg'
  },
  {
    attribute:'images/iridium.png',
    id:'dry-eye',
    infiction:'',
    img:'images/icon8.svg'
  },
  {
    attribute:'images/tioretin.png',
    id:'diabetic',
    infiction:'',
    img:'images/icon5.svg'
  },
  {
    attribute:'images/ribolisin.png',
    id:'uv-light',
    infiction:'',
    img:'images/icon3.svg'
  },
  {
    attribute:'images/iridium-gel.png',
    id:'red-eye',
    infiction:'',
    img:'images/icon6.svg'
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
var result = document.getElementById("relieved-div")
var suffer = document.getElementById("suffer-div")
var amount = document.getElementById("amount-div")
var toast = document.getElementById("snackbar");
var product = document.getElementById("product");
var resetbtn = document.getElementById('resetbtn')
var guide = document.getElementById('guide')
var squares = document.getElementById('squares')
var startPos = null;
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
        <div id="${element.id}" class="single-medicine is-hidden  medicine-item"> 
    <img  id="medicImg" src="${element.img}">
    </div>
    `
   medicine.innerHTML +=med 
  
  }); 
  
}
var cunt=0
function showProducts(){
  medicines.forEach(element => {
    cunt++
    if(element.id==='iridium-gel'){
      med = ` 
      
      <div id="${element.class}" class="product-item  is-hidden">
  <img width="110px" id="medicImg" src="${element.img}">
 </div>
  `
    }else{
      med = ` 
     <div id="product-style"  class="swiper-slide">
      <div id="${element.class}" class="single-product  product-item " onclick = "openDescription(this.id)">
    
  <img  id="medicImg1" src="${element.img}">
  
  </div>      
  </div>
  `
    }
 
  products.innerHTML +=med
/*   var moreInfo =document.getElementById(element.class)
  
  var span = document.getElementById(cunt)
  console.log(span);
moreInfo.addEventListener("mouseover", event => {
  span.style.display='inline-block'
  
});
moreInfo.addEventListener("mouseout", event => {
  span.style.display='none'
}); */
}); 
}
function addCompounds (){
  var compound=""
  compounds.forEach(element => {

   // var compound = document.createElement('div')
  
    compound=
    `
    <div id="item-style" class="column is-6 "> 
    <div id="${element.id}" class="item mx-auto">
   <img width="100" height="100"  src="${element.img}" >
  <p id="name" > ${element.name}</p>
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
    <div id="patient-style" class="column is-9">
    <div id="patient-icon">
    <div  id="${element.id}" class="dropzone-patient" data-medic="${element.attribute}">
    <img width="55" height="55"  src="${element.img}" >
    <span id="patient-text-white"> ${element.id}</span>
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
        restriction: document.querySelector('#container'),
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
        var position = {x:event.target.getAttribute('data-start-x'),y:event.target.getAttribute('data-start-y')}
     
          // snap to the start position
          
          event.interactable.draggable({
              snap: {
                  targets: [position]
              }
          });
      
  }
})

interact('.item')
  .draggable({
    listeners: {
       move: dragMoveListener,
      
        end (event) {
         
        }
      ,
    }
       
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
     
      if(item.id==='hyaluronic'&& !item.className.includes('concentration-added')){
        amount.classList.add('is-active')
        //item.classList.remove('item')
        item.classList.add('concentration-added')
       }
   
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
      item.classList.remove('concentration-added')
      item.classList.remove('cant-drop','shake','dropped')
      var one =array[0]
      var two = array[1]
      var three = array[2]
        if (one==='hyaluronic'+concentartion){
               dropped1 = document.getElementById('hyaluronic')
              }else{
               dropped1 = document.getElementById(one)
              }
              if (two==='hyaluronic'+concentartion){
               dropped2 = document.getElementById('hyaluronic')
              }else{
               dropped2 = document.getElementById(two)
               
              }
              if (three==='hyaluronic'+concentartion){
               dropped3 = document.getElementById('hyaluronic')
              }else{
               dropped3 = document.getElementById(three)
              }
      resetbtn.style.display="none"
       console.log(array);    
      if(count!=0){
        count-=1
      }
      
      item2=''
        medic=document.getElementById('medicine')
      var currentmedic = document.getElementById(show.id)
      if(currentmedic !== null){
      if(currentmedic.className.includes('medicine-item')){
        currentmedic.classList.add('is-hidden')
      }
    }
    },
   
    ondrop:function(event){
      const item = event.relatedTarget
 
      dropzoneElement  = event.target,
      dropRect         = interact.getElementRect(dropzoneElement)
   
     var   x= dropRect.left + dropRect.width  / 8
     var   y= dropRect.top  + dropRect.height / 2
      console.log(dropRect.left);
      item.style.webkitTransform =
      item.style.transform =
        'translate(' +'-'+ x + 'px, ' + 0 + 'px)'
        item.setAttribute('data-x', x)
        item.setAttribute('data-y', 0)
      guide.style.display='none'
      //squares.style.display="inline-flex"
      if(count > 3 && !item.className.includes('dropped')){
        item.classList.add('shake')
        
        item.classList.add('cant-drop')
        toast.innerHTML= 'No more elements allowed!'
        toast.style.backgroundColor="rgba(201, 10, 10, 0.753)"
        toast.className = "show";
        setTimeout(function(){ toast.className = toast.className.replace("show", "");}, 4000); 
      }
      
     
      if (item2===''){
        item2 =event.relatedTarget.id
      }else{
        item2 +="+" +event.relatedTarget.id
      }
      
      
      item.classList.remove('cannot-drop')
      item.classList.add('can-drop')
      item.classList.add('drop-target')
       var data = event.relatedTarget.id
       var target = event.target
       medicdiv = document.createElement('div')
       addConcentration();
       resetbtn.style.display="inline"
       var rect = document.getElementById('components').getBoundingClientRect();
       console.log(rect.left);
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
      item.classList.remove('cannot-drop')
      item.classList.add('can-drop')  
      
       if(item.className.includes('medicine-item')){
         //currentmedic = item.querySelector("#"+show.id).querySelector('#medicImg').getAttribute('src') 
         currentmedic = item.querySelector('#medicImg').getAttribute('src')
         
       }
       var targetid= event.target.id
      console.log(targetid);
      var attr=document.getElementById(targetid).getAttribute('data-medic')
     
     // var i = document.querySelector("#"+targetid).querySelector("#check")
      if (attr == currentmedic ){
         // i.style.display='flex' 
          item.classList.remove('dragging')
          }
          else if(attr==='images/hyalfid.png' && currentmedic ==='images/hyalfid-gel.png'){
            item.classList.remove('dragging')
          }
          
           
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
    
      if (!item.className.includes('dragging')){
        result.classList.add('is-active')
      document.getElementById("score").innerHTML = ++score;
      audio.play();
      document.getElementById('medicImg1').style.opacity='1'
      hint.style.display='none'
      guide.style.display='inline-block'
       console.log('matched');
      }else{
        suffer.classList.add('is-active')
        
      }
    
    }

  })

   function openfinalscore(){
    var winner =  document.getElementById("winner");
    var audio = new Audio('winsound.mp3');
    winner.classList.add('is-active')
    audio.play();
    document.getElementById("sc").innerHTML=score;
    
  }
  function closefinalscore(){
    winner.classList.remove('is-active')
  }
  function matchproduct(){
    product.classList.remove('is-active')
    show.classList.remove('is-hidden')
  }
  function closeproduct(){
    show.classList.remove('is-hidden')
    console.log(show);
    product.classList.remove('is-active')
  }
  function closeresult(){
    show.classList.add('is-hidden')
    result.classList.remove('is-active')
   //var productStyle= document.getElementById('product-style')
   // productResult.classList.add('swiper-slide')
      productResult.classList.remove('is-hidden')
     // dropped1.classList.remove('is-hidden')
                
                if (score===medicines.length){
                  openfinalscore();
                 }
  }
  function closesuffer(){
    
    suffer.classList.remove('is-active')
  }
function startGame() {
  var start = document.getElementById("startgame")
  start.classList.remove('is-active')

}
var descrip = document.getElementById("description-div")
var descripClicked=0
function openDescription(productId) {
   descripClicked=1
  var decription= document.getElementById("description");
  var newid = productId.slice(0, -1);
  medicines.forEach(element => {
    if(element.id == newid){
      decription.src=element.des
      
    }
  })
  descrip.classList.add('is-active')
  
}
function closedescription(){
  descrip.classList.remove('is-active')
}
function concentrate(id) {
  concentartion =id
  amount.classList.remove('is-active')
}
window.onclick = function(event) {
  if(show !=''){
    var medicineClick =show.querySelector('#medicImg')
  }
  if(event.target!=suffer && event.target!=medicineClick ){ 
    suffer.classList.remove('is-active')
  }
   if(result.className.includes('is-active') &&event.target!=medicineClick ) {
    closeresult()
   }
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 0,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
function reset (){
  guide.style.display='block'

  var one =array[0]
       var two = array[1]
       var three = array[2]
         if (one==='hyaluronic'+concentartion){
                dropped1 = document.getElementById('hyaluronic')
               }else{
                dropped1 = document.getElementById(one)
               }
               if (two==='hyaluronic'+concentartion){
                dropped2 = document.getElementById('hyaluronic')
               }else{
                dropped2 = document.getElementById(two)
                
               }
               if (three==='hyaluronic'+concentartion){
                dropped3 = document.getElementById('hyaluronic')
               }else{
                dropped3 = document.getElementById(three)
               }
        
  resetbtn.style.display="none"
  dropped1.classList.remove('can-drop')
  dropped1.classList.add('cannot-drop')
  dropped1.classList.remove('drop-target')
  dropped1.classList.remove('concentration-added')
  dropped1.classList.remove('cant-drop','shake','dropped')
dropped1.style.transform="none"
if(dropped2!=null){
dropped2.classList.remove('can-drop')
dropped2.classList.add('cannot-drop')
dropped2.classList.remove('drop-target')
dropped2.classList.remove('concentration-added')
dropped2.classList.remove('cant-drop','shake','dropped')
dropped2.style.transform="none"}
if(dropped3!=null){
dropped3.classList.remove('can-drop')
dropped3.classList.add('cannot-drop')
dropped3.classList.remove('drop-target')
dropped3.classList.remove('concentration-added')
dropped3.classList.remove('cant-drop','shake','dropped')
dropped3.style.transform="none"}

item2=''
array=[]
console.log(item2);
}
function addConcentration(){
  array = item2.split("+");
  console.log(array);
  for (let index = 0; index < array.length; index++) {
    if(array[index]==='hyaluronic') {
     array[index]='hyaluronic'+concentartion
      
    }}

 console.log(array);
 var one =array[0]
 var two = array[1]
 var three = array[2]
 //var medicTarget = compined[`${item2}+${data}`] ?? compined[`${data}+${item2}`]
 var medicTarget = compined[`${one}+${two}+${three}`] ||compined[`${one}+${three}+${two}`]||
  compined[`${two}+${one}+${three}`] ||
 compined[`${two}+${three}+${one}`] ||
 compined[`${three}+${two}+${one}`] ||
 compined[`${three}+${one}+${two}`] ||
 compined[`${one}+${two}`] || compined[`${two}+${one}`]
if(medicTarget!==undefined ){

  medicines.forEach(element => {
    if(element.img === medicTarget){
      
      show = document.getElementById(element.id)
      var product = document.getElementById("product");
      var output= document.getElementById("output");
      
      var audio = new Audio('pop.wav');
      productResult = document.getElementById(show.id+'1')
      
//var compare = document.querySelector("#"+productResult.id).querySelector('#medicImg').getAttribute('src')

      if(!productResult.className.includes('is-hidden')){
        if(medicTarget==='images/iridium-gel.png'){
          output.style.height = '150px';
          output.style.width = '200px';
          output.src=medicTarget
        }else{
          output.style.height = '328px';
          output.style.width = '168px'; 
          output.src=medicTarget
        }
        if (one==='hyaluronic'+concentartion){
          dropped1 = document.getElementById('hyaluronic')
         }else{
          dropped1 = document.getElementById(one)
         }
         if (two==='hyaluronic'+concentartion){
          dropped2 = document.getElementById('hyaluronic')
         }else{
          dropped2 = document.getElementById(two)
          console.log(dropped2);
         }
         if (three==='hyaluronic'+concentartion){
          dropped3 = document.getElementById('hyaluronic')
         }else{
          dropped3 = document.getElementById(three)
         }
      
         
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
       
          if(dropped3!==null){
            dropped3.classList.add('animate__animated','animate__rollOut','animate__slow')
          setTimeout(function(){
            console.log(dropped3);
            dropped3.classList.remove('can-drop')
            dropped3.classList.add('cannot-drop')
            dropped3.classList.remove('drop-target')
           // dropped3.classList.remove('concentration-added')
            dropped3.classList.remove('cant-drop','shake','dropped')
          dropped3.style.transform="none"
          dropped3.classList.remove('animate__animated','animate__rollOut','animate__slow')
            //dropped3.classList.add('is-hidden')
        },2000)
          
        }
        setTimeout(function(){
          resetbtn.style.display="none"
      hint.style.display='block'
          show.classList.remove('is-hidden')
          audio.play();
      },2000)
       setTimeout(function(){
        item2=''
        array=[]
       }, 3000)   
      }

  
}else if(medicTarget== undefined && count>1){
toast.innerHTML= `Can't be mixed please try again`
  toast.style.backgroundColor="rgba(201, 10, 10, 0.753)"
  toast.className = "show";
  setTimeout(function(){ toast.className = toast.className.replace("show", "");}, 4000); 
}

/* if(!item.className.includes('dropped')){
do {
  count++
  item.classList.add('dropped')
} while (!item.className.includes('dropped'));

} */


})}

}
var list = document.getElementsByClassName("amount-btn");
for (var i = 0; i < list.length; i++) {
   list[i].addEventListener('click', addConcentration
    
   )
   
} 