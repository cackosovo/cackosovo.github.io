Vue.component('contact-form', {
    data() {
        return {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
        };
      },
    methods:{
        sendEmail(e) {
            const btn = document.querySelector('#button');
            btn.value = 'Sending...';
            emailjs.sendForm('default_service', 'template_uvinz95', e.target, 'user_1wflK7WkbyVGouoePZaLU', {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                phone: this.phone,
                message: this.meessage
            }).then(res => {
                setTimeout(() => {  
                    Swal.fire({
                            icon: 'success',
                            title: 'Successfully sent!',
                            text: 'Message successfully sent, we will contact you shortly.',
                    });
                    // Reset form field
                    this.firstName = '';
                    this.lastName = '';
                    this.email = '';
                    this.phone = '';
                    this.message = '';
                    btn.value = 'SEND MESSAGE';
                }, 1000);
            }).catch(err => {
                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    text: JSON.stringify(err.text),
                    icon: 'error',
                    showConfirmButton: false,
                    showCloseButton: true,
                    timerProgressBar: true,
                    timer: 5000
                });
                btn.value = 'SEND MESSAGE';
            })
        },
    },
    template: `
    <form class="rd-mailform" @submit.prevent="sendEmail">
    <div class="row row-fix row-20">
        <div class="col-md-6">
            <div class="form-wrap"> <label class="form-label-outside" for="form-3-name">First name</label> <input required v-model="firstName" class="form-input form-control-has-validation form-control-last-child" id="form-3-name" type="text" name="name" data-constraints="@Required"><span class="form-validation"></span>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-wrap"> <label class="form-label-outside" for="form-3-last-name">Last name</label> <input required v-model="lastName" class="form-input form-control-has-validation form-control-last-child" id="form-3-last-name" type="text" name="last-name" data-constraints="@Required"><span class="form-validation"></span> </div>
        </div>
        <div class="col-md-6">
            <div class="form-wrap"> <label class="form-label-outside" for="form-3-email">E-mail</label> <input required v-model="email" class="form-input form-control-has-validation form-control-last-child" id="form-3-email" type="email" name="email" data-constraints="@Email @Required"><span class="form-validation"></span> </div>
        </div>
        <div class="col-md-6">
            <div class="form-wrap"> <label class="form-label-outside" for="form-3-phone">Phone</label> <input required v-model="phone" class="form-input form-control-has-validation form-control-last-child" id="form-3-phone" type="text" name="phone" data-constraints="@Numeric @Required"><span class="form-validation"></span> </div>
        </div>
        <div class="col-sm-12">
            <div class="form-wrap"> <label class="form-label-outside" for="form-3-message">Message</label> <textarea required v-model="message" class="form-input form-control-has-validation form-control-last-child" id="form-3-message" name="message" data-constraints="@Required"></textarea><span class="form-validation"></span> </div>
        </div>
        <div class="col-sm-12 offset-custom-4">
            <input class="btn btn-outline-light text-primary" type="submit" id="button" value="SEND MESSAGE">
        </div>
    </div>
</form>
    `
});
new Vue({el: "#contact-form"});