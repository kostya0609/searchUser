import {BaseRepository} from "./BaseRepository";

export class UserRepository extends BaseRepository {

    /**
     * @returns {URL} 
     */
    _buildUrl(nestedEndpoint){
        return new URL(`${this._url}` + (nestedEndpoint ? `/${nestedEndpoint}` : ''));
    }

    /**
     * @param {Object} params
     * @return Promise<any>
     */
    async search(params) {
        const result = await this._query({
            method: 'GET',
            params,
            nestedEndpoint:'users'
        });
        
        if (result.status >=400)
            throw new Error(`Ошибка при получении информации о пользователях, статус запроса - ${result.status}`);
       
        return result.data;
    }
}