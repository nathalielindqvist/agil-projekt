<template>

    <div id="mainContainer">
        <header id="headerContainer">
            <h1>Contact Us</h1>
        </header>
        <div id="contentContainer">
        <main id="formContainer">
            <div class="mb-3">
            <label for="exampleFormControlInput2" class="form-label" >Name</label>
            <input type="text" class="form-control" id="formName" placeholder="Your Name" v-model="customerName">
            </div>
            <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="formEmail" placeholder="name@example.com" v-model="customerEmail">
            </div>
            <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Message</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="How can we help?" v-model="customerMessage"></textarea>
            </div>
            <button @click="submitReply" type="button" class="btn btn-primary">Send</button>
        </main>
        <aside id="pageDecoContainer">
         <p>Hi! What's going on?</p>
         <p id="writingReply" v-if="customerName != '' || customerEmail != '' || customerMessage != '' || showBubbleSent == true">{{chatBubbleText}}</p>
         <p v-if="showBubbleReply"> {{bubbleReplyText}} </p>
        </aside>
    </div>

    </div>



</template>

<script>
export default {
    name: "Contact",

    data() {
        return {

        customerName: "",
        customerEmail: "",
        customerMessage: "",
        chatBubbleText: "...",
        showBubbleSent: false,
        showBubbleReply: false,
        bubbleReplyText: ""

        }
    },

    methods: {
        submitReply() {
            
            this.showBubbleSent = true,
            
            this.customerName = "";
            this.customerEmail = "";
            this.customerMessage = "";

            this.chatBubbleText = "Check inbox";

            setTimeout(() => {
                this.showBubbleReply = true;
                this.bubbleReplyText = "replying...";
                
            }, 2000)
            
            setTimeout(() => {
                
                this.bubbleReplyText = "Will do. Thanks!";
                
            }, 6000)
            
            
            setTimeout(() => {
                
                this.chatBubbleText = "...";
                this.showBubbleSent = false,
                this.showBubbleReply = false;
                this.bubbleReplyText = ""
                
            }, 10000)

        }
    }

   
}
</script>

<style scoped>

#writingReply {
    width: fit-content;
    min-width: 150px;
    height: fit-content;
    text-align: center;
    padding: 3%;
    margin-top: 5%;
    align-self: flex-end;
    color: black;
    background-color: lightblue;
    border-radius: 50px;
}

aside p {
    width: fit-content;
    height: fit-content;
    text-align: center;
    padding: 3%;
    align-self: flex-start;
    color: black;
    background-color: lightgreen;
    border-radius: 50px;
}

aside {
    display: flex;
    flex-direction: column;
    font-size: 2.5em;
}

#mainContainer {

     padding: 10%;
}


#headerContainer {

     padding: 1% 2% 4%;
}

#contentContainer {

     display: flex;
     justify-content: space-around;
}

#formContainer{

    width: 45%;
    

}

#pageDecoContainer {
        width: 45%;
        border-left: 2px solid black;
        padding-left: 3%;
}

.mb-3 {
    font-size: 1.1em;
    margin-bottom: 1.5em !important;
}


</style>