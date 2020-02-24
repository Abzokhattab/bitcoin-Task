<script>
  import DatePicker from 'vue2-datepicker';
  import 'vue2-datepicker/index.css';
import {bus}from '@/main.js';
//this.sendFile();
  export default { 
    components: { DatePicker },
    data() {
      return {
        unvaild:'',
        time2: new Date().toISOString().slice(0,10),
        time1: new Date (new Date().getTime() - 10*86400000).toISOString().slice(0,10),
      };
    }, 
    methods:{
       sendFile(){
        const date = Date.parse(new Date().toISOString().slice(0,10));
        if( Date.parse (this.time2)<= date && Date.parse(this.time1)<=date && Date.parse(this.time1)<=Date.parse(this.time2)){
          this.unvaild=''
         bus.$emit('send',{time1:this.time1,time2:this.time2})  
        }else if ( Date.parse(this.time1 )> date )
            this.unvaild='Invaild input : '+this.time1;
        else if ( Date.parse(this.time2) > date )
        this.unvaild='Invaild input : '+this.time2;
        else this.unvaild='Error: Time1 is greater than Time2'
      }
    }, mounted(){
      this.sendFile();
    }
  };
</script>

<template>
  <div>  <div>

    <date-picker  v-model="time1"   valueType="format"  ></date-picker>
    <date-picker  v-model="time2"   valueType="format"  ></date-picker>
      </div>
      <div>
    <button v-on:click="sendFile">Render</button>
</div>
<div>
  <p>{{ unvaild }}</p>
</div>

</div>


</template>