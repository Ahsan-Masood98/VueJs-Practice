export default {
    contactCoach(conetxt, payload) {
        const newRequest = {
            id: new Date().toISOString(),
            coachId: payload.coachId,
            userEmail: payload.email,
            message: payload.message,
        };
        conetxt.commit('addRequest', newRequest);
    }
}