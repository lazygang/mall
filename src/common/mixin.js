export const tongyong = {
    data(){
        return{
            scrollshow:false,
            position:0,
            zhuti:[0,500,1000,1500],
            // currentindex: 0
            //
            // tbcshow:false,
            // tbcy:0,
        }
    },
    methods:{
        backtop(){
            this.$refs.scroll.scrollto(0,0)
        },
    }
}

