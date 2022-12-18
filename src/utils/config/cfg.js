
import games from './games';
import standings from './standings';
import teams from './teams';



export async function Jogos(id){
    if(!id){
        return games();
    }else{       
    }    
    
}

export async function Classificacao(){
    return standings();
}

export async function Selecoes(id){

    if(id){
        var team = teams();
        team = team.data.filter((team)=>{
            if(team.id == id){
                return team
            }
        });
        return team;
    }else{       
        return teams();
    }

  
}
