export const myMixins = {
    data(){
        return {
            lists: ['CHome','About','Content','Info'],
            name: '',
        }
    },
    created() {
        this.showName();
    },
    methods: {
        showName(){
            this.name = "Nuruzzaman Himell"
        }
    },
}