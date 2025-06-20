

export default function handler(request, response) {
    const { body } = request
    const email = body.email

    const hubspot = require('@hubspot/api-client');

    const apiKey = '6a24e4cc-d831-4499-89da-a8a8b6ecc4d8'
    const subscriptionId = 29309611

    const hubspotClient = new hubspot.Client({"apiKey":apiKey});

    async function createContact(){
        try {

            const properties = {
                'email':email
            }
            const SimplePublicObjectInput = { properties }
            
            const apiResponse = await hubspotClient.crm.contacts.basicApi.create(SimplePublicObjectInput);
            
            const subscriptionApiResponse = await subscribeContact()

            response.statusCode = 200;
            await response.send(JSON.stringify(subscriptionApiResponse.body, null, 2));
        } catch (e) {
            // e.message === 'HTTP request failed'
            // ? 
            // : 
            response.statusCode = 404;
            if(e.message === 'HTTP request failed'){
                console.error(JSON.stringify(e.response, null, 2))
                await response.send(JSON.stringify(e.response, null, 2));

            }else{
                console.error(e)
                await response.send(e);
            }
        }
    }

    createContact()

    async function subscribeContact(){
        var options = {
            "method": "POST",
            "path": `/communication-preferences/v3/subscribe`,
            "headers": {
                "accept": "application/json",
                "content-type": "application/json"
            },
            "body":{
                'emailAddress': email,
                'subscriptionId': subscriptionId,
                'legalBasis': 'NON_GDPR',
                'legalBasisExplanation': 'Newsletter subscription'
            }
        };

        const apiResponse = await hubspotClient.apiRequest(options)

        return apiResponse
        
    }

    
}