function getRandomValue(max, min) {
    // max damage will be 15 & min wil be 8 and add the min again
    return Math.floor(Math.random() * (max - min)) + min;
}
const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
        }
    },
    computed: {
        monsterBarStyle() {
            return { width: this.monsterHealth + '%' };
        },
        playerBarStyle() {
            return { width: this.playerHealth + '%' };
        },
        enableSpecialAttack() {
            return this.currentRound % 3 !== 0
        }
    },
    methods: {
        attackMonster() {
            const attackValue = getRandomValue(12, 5);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
            this.currentRound++;
        },
        attackPlayer() {
            const attackValue = getRandomValue(15, 8);
            this.playerHealth -= attackValue;
        },
        specialAttackMonster() {
            const attackValue = getRandomValue(25, 10);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
            this.currentRound++;
        }
    }
});

app.mount('#game')