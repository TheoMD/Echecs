export interface piece {
    couleur:boolean;
    type:string;
    codeHtml:string;
}

export function printPiece(p:piece):string{
    let result : string;
    let joueur : number;
    if(p.couleur){
        joueur = 1;
    }else{
        joueur = 2;
    }
    result = p.type+'-'+joueur;
    return result;
}

export function printHtml(p:piece):string{
    return p.codeHtml;
}