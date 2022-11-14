
async function tokenGenetarion(){
    const res = await fetch(
        `http://api.cup2022.ir/api/v1/user/login`,
        {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json'},
            body:  JSON.stringify({
                "email": "dhnogueira1@hotmail.com",
                "password": "diego123@"
            })
        }
    );
    const data = await res.json();  
    return data.data.token;
}


export async function Jogos(id){
    const token = await tokenGenetarion();
    if(!id){
        const res = await fetch(
            `http://api.cup2022.ir/api/v1/match`,
            {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            }
        );
        const data = await res.json();   
        return data;
    }else{        
        const res = await fetch(
            `http://api.cup2022.ir/api/v1/match/${id}`,
            {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            }
            
        );
        const data = await res.json();
        return data;
    }    
    
}

export async function Classificacao(){
    const token = await tokenGenetarion();

        const res = await fetch(
            `http://api.cup2022.ir/api/v1/standings`,
            {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            }
        );
        const data = await res.json();
        return data;


}

export async function Selecoes(id){

    const token = await tokenGenetarion();   

    if(id){
        const res = await fetch(
            `http://api.cup2022.ir/api/v1/team/${id}`,
            {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            }
        );
        const data = await res.json();
        return data;
    }else{
        const res = await fetch(
            `http://api.cup2022.ir/api/v1/team`,
            {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            }
        );
        const data = await res.json();
        return data;
    }

  
}
