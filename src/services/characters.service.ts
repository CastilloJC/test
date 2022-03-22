import httpCommon from "./http-common";

const CharactersService ={
    getAllCharacters: (page:number) =>{
        return httpCommon.get(`people/?page=${page}`)
    }
}

export default CharactersService