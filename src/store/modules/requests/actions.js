export default {
    async contactCoach(context, payload) {
        const newRequest = {
            userEmail: payload.email,
            message: payload.message,
        };

        const response = await fetch(`https://vue-project-c918a-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`, {
            method: "POST",
            body: JSON.stringify(newRequest),
        });
        const responseData = await response.json();
        if (!response.ok) {
            const error = new Error(responseData.message || "Faild to send request");
            throw error
        }
        newRequest.id = responseData.name;
        newRequest.coachId = payload.coachId;
        context.commit('addRequest', newRequest);
    },

    async fetchRequests(context) {
        const coachId = context.rootGetters.userId;
        const response = await fetch(`https://vue-project-c918a-default-rtdb.firebaseio.com/requests/${coachId}.json`);
        const responseData = await response.json();
        if (!response.ok) {
            const error = new Error(responseData.message || "Faild to fetch requests");
            throw error
        }
        const requests = [];
        for (const key in responseData ){
            const request = {
                id: key,
                userEmail: responseData[key].userEmail,
                message: responseData[key].message,
                coachId: coachId,
            }
            requests.push(request);
        }
        context.commit('setRequests', requests);
    }
}