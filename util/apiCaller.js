import axios from 'axios';

const apiCaller = async () => {

    try{
        const response = await axios.get(
            'https://valorant-api.com/v1/agents'
        );

        console.log(response.data)

        return response.data;

        // const parsedResponse = JSON.parse(response.data.data);

        // console.log(parsedResponse);

        // return parsedResponse;
    } catch {
        console.log('api call failed')
    }
}

export default apiCaller;