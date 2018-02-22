import {piece} from './Piece';
import {printPiece} from './Piece';

export interface Echiquier{
    grille : Array<Array<piece>>;
}

export function initGrid():Echiquier{
    //Piece blanche 
    let Ta1: piece = {type:'T', couleur:true, codeHtml:"&#9814" };
    let Cb1: piece = {type:'C', couleur:true, codeHtml:"&#9815" };
    let Fc1: piece = {type:'F', couleur:true, codeHtml:"&#9815" };
    let Dd1: piece = {type:'R', couleur:true, codeHtml:"&#9813" };
    let Re1: piece = {type:'K', couleur:true, codeHtml:"&#9812" };
    let Ff1: piece = {type:'F', couleur:true, codeHtml:"&#9815" };
    let Cg1: piece = {type:'C', couleur:true, codeHtml:"&#9815" };
    let Th1: piece = {type:'T', couleur:true, codeHtml:"&#9814" };
    
    let Pa2: piece = {type:'P', couleur:true, codeHtml:"&#9817" };
    let Pb2: piece = {type:'P', couleur:true, codeHtml:"&#9817" };
    let Pc2: piece = {type:'P', couleur:true, codeHtml:"&#9817" };
    let Pd2: piece = {type:'P', couleur:true, codeHtml:"&#9817" };
    let Pe2: piece = {type:'P', couleur:true, codeHtml:"&#9817" };
    let Pf2: piece = {type:'P', couleur:true, codeHtml:"&#9817" };
    let Pg2: piece = {type:'P', couleur:true, codeHtml:"&#9817" };
    let Ph2: piece = {type:'P', couleur:true, codeHtml:"&#9817" };
    //Piece noir 
    let Ta8: piece = {type:'T', couleur:true, codeHtml:"&#9822" };
    let Cb8: piece = {type:'C', couleur:true, codeHtml:"&#9821" };
    let Fc8: piece = {type:'F', couleur:true, codeHtml:"&#9820" };
    let Dd8: piece = {type:'R', couleur:true, codeHtml:"&#9819" };
    let Re8: piece = {type:'K', couleur:true, codeHtml:"&#9818" };
    let Ff8: piece = {type:'F', couleur:true, codeHtml:"&#9820" };
    let Cg8: piece = {type:'C', couleur:true, codeHtml:"&#9821" };
    let Th8: piece = {type:'T', couleur:true, codeHtml:"&#9822" };
    
    let Pa7: piece = {type:'P', couleur:true, codeHtml:"&#9823" };
    let Pb7: piece = {type:'P', couleur:true, codeHtml:"&#9823" };
    let Pc7: piece = {type:'P', couleur:true, codeHtml:"&#9823" };
    let Pd7: piece = {type:'P', couleur:true, codeHtml:"&#9823" };
    let Pe7: piece = {type:'P', couleur:true, codeHtml:"&#9823" };
    let Pf7: piece = {type:'P', couleur:true, codeHtml:"&#9823" };
    let Pg7: piece = {type:'P', couleur:true, codeHtml:"&#9823" };
    let Ph7: piece = {type:'P', couleur:true, codeHtml:"&#9823" };

    //Position initial des pieces
    let plateau: Echiquier = {grille :
    [
        [Ta8,Cb8,Fc8,Dd8,Re8,Ff8,Cg8,Th8],
        [Pa7,Pb7,Pc7,Pd7,Pe7,Pf7,Pg7,Ph7],
        [   ,   ,   ,   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ,   ,   ,   ],
        [   ,   ,   ,   ,   ,   ,   ,   ],
        [Pa2,Pb2,Pc2,Pd2,Pe2,Pf2,Pg2,Ph2],
        [Ta1,Cb1,Fc1,Dd1,Re1,Ff1,Cg1,Th1]
        
    ]}
    
    
    return plateau;
}

function printEchiquier(e:Echiquier){
    let ligne:string;
    let seq:string="------------------------------------------------------";
    console.log(seq);
    for(let i = 0;i<8;i++){
        if(e.grille[i][j]==null){
            ligne=ligne+"    ";
        }else{
            ligne=ligne+printPiece(e.grille[i][j])+"";
        }
    }
}