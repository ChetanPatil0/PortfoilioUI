let project_det = document.querySelector('.project-details');

function projectdet_overlap_show(){
    project_det.style.opacity="1";
};
function projectdet_overlap_hide(){
    project_det.style.opacity="0";
};

let section2BottomBody = document.querySelector('.section-2-body');
let  section2BottomBodyWidth=section2BottomBody.offsetWidth;
console.log(section2BottomBodyWidth + 'hrhrh');
let position=0;
let sec2width=0;
function section2RightMove(){
    if( sec2width < section2BottomBodyWidth -1000){
        sec2width=sec2width+700;
        position=position+58;
    section2BottomBody.style.transform=`translatex(${-position}vh)`;
    }
    
    
}
function section2LeftMove(){
    if(position>0 ){  
        sec2width=sec2width-700;
        position=57;     
        position=position-57;
        section2BottomBody.style.transform=`translatex(${position}vh)`;
    }
    
}

let section4Project = document.querySelector('.section-4-project');

  let posi2=0;  

function section4LeftMove(){
    if(posi2<100)
    posi2=posi2+60;
    section4Project.style.transform=`translate(${-posi2}vh)`;
}
function section4RightMove(){
    if(posi2>60)
        posi2=0;
    section4Project.style.transform=`translate(${posi2}vh)`;
}